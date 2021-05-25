<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Vaccination;
use App\Models\Vaccinedate;
use App\Models\Vaccinelocation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class VaccinationController extends Controller
{
    public function saveuser(Request $request){
        DB::beginTransaction();
        try {
            $user = User::create($request->all());

            // save user
            $user = User::firstOrNew(['firstname' => $user['firstname'], 'lastname' => $user['lastname'],
                            'gender' => $user['gender'], 'svnr' => $user['svnr'], 'email' => $user['email'], 'password' => $user['password'],
                'is_admin' => $user['is_admin']]);
            $user->save($user);

            return $user;

            /*DB::commit();
            return response()->json($user, 201);*/
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("saving user failed: " . $e->getMessage(), 420);
        }
    }

    public function findAllVaccinedates(){
        $vaccinedates = Vaccinedate::join('vaccinations', 'vaccinations.vaccinedate_id', '=', 'vaccinedates.id')
            ->join('vaccinelocations', 'vaccinations.vaccinelocation_id', '=', 'vaccinelocations.id')
            // show only vaccinedates which are in the future (so registration is possible)
            ->where('day', '>=', Carbon::now())
            ->orderBy('day', 'asc')
            ->get();

        return $vaccinedates;
    }

   public function findAllVaccinelocations(){
        $vaccinelocations = Vaccinelocation::with(['vaccinations'])->get();
        return $vaccinelocations;
    }

    public function findLocationById(int $id) : Vaccinelocation {
        $vaccinelocation = Vaccinelocation::where('id', $id)->first();
        return $vaccinelocation;
    }

    public function findDateById(int $id) : Vaccinedate {
        $vaccinedate = Vaccinedate::where('id', $id)->with(['vaccinations'])->first();
         return $vaccinedate;
    }

    public function findUsersByLocationAndDate(int $dateid, int $locid) {
        $vaccineuser = Vaccination::where('vaccinelocation_id', $locid)
            ->where('vaccinedate_id', $dateid)
            ->with(['users'])->first()->users()->get();
        return $vaccineuser;
    }

    public function savedate(Request $request) : JsonResponse {
        $request = $this->parseRequest($request);

        DB::beginTransaction();
        try {
            $vaccinedate = Vaccinedate::create($request->all());

            // save vaccinedate
            if(isset($request['vaccinedates']) && is_array($request['vaccinedates'])) {
                foreach($request['vaccinedates'] as $vdate) {
                    $vaccinedate =
                        Vaccinedate::firstOrNew(['day' => $vdate['day'], 'starttime' => $vdate['starttime'],
                            'endtime' => $vdate['endtime'], 'maximum_attendees' => $vdate['maximum_attendees']]);
                    $vaccinedate->vaccinationdate()->save($vaccinedate);
                }
            }

            DB::commit();
            return response()->json($vaccinedate, 201);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("saving vaccinedate failed: " . $e->getMessage(), 420);
        }
    }

    public function savevaccination(Request $request) : JsonResponse {
        $request = $this->parseRequest($request);

        DB::beginTransaction();
        try {
            $vaccination = Vaccination::create($request->all());

            // save vaccination
            if(isset($request['vaccinations']) && is_array($request['vaccinations'])) {
                foreach($request['vaccinations'] as $vac) {
                    $vaccination =
                        Vaccinedate::firstOrNew(['vaccinelocation_id' => $vac['vaccinelocation_id'], 'vaccinedate_id' => $vac['vaccinedate_id']]);
                    $vaccination->vaccination()->save($vaccination);
                }
            }

            DB::commit();
            return response()->json($vaccination, 201);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("saving vaccination failed: " . $e->getMessage(), 420);
        }
    }

    public function registerToVaccination(Request $request) : JsonResponse {
        DB::beginTransaction();
        try {
            $vaccination = Vaccination::where('id', $request['vaccination_id'])->first();

            if (isset($request['user_id'])) {
                $user = User::firstOrNew(['id' => $request['user_id']]);
                $vaccination->users()->save($user);
            }

            DB::commit();

            return response()->json($vaccination, 201);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("register user to vaccination failed: " . $e->getMessage(), 420);
        }
    }

    public function updatedate(Request $request, int $id) : JsonResponse {
        DB::beginTransaction();
        try {
            $vaccinedate = Vaccinedate::where('id', $id)->first();
            if($vaccinedate != null) {
                $request = $this->parseRequest($request);
                $vaccinedate->update($request->all());

                $vaccinedate->save();
            }

            DB::commit();
            $vaccinedate1 = Vaccinedate::where('id', $id)->first();
            return response()->json($vaccinedate1, 201);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("updating vaccinedate failed: " . $e->getMessage(), 420);
        }
    }

    public function updatevaccination(Request $request, int $id) : JsonResponse {
        DB::beginTransaction();
        try {
            $vaccination = Vaccination::where('id', $id)->first();
            if($vaccination != null) {
                $request = $this->parseRequest($request);
                $vaccination->update($request->all());

                $vaccination->save();
            }

            DB::commit();
            $vaccination1 = Vaccination::where('id', $id)->first();
            return response()->json($vaccination1, 201);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("updating vaccination failed: " . $e->getMessage(), 420);
        }
    }

    public function updateVaccinationAdministered(Request $request)  {
        DB::beginTransaction();
        try {
            $vaccination = Vaccination::where('id', $request['pivot']['vaccination_id'])
                ->with(['users'])->first()->users()->get()
                ->where('id', $request['id'])->first();

            if($vaccination != null) {
                $vaccination->pivot->update($request['pivot']);
                $vaccination->pivot->save();
            }

            DB::commit();

            $vaccination = Vaccination::where('id', $request['pivot']['vaccination_id'])
                ->with(['users'])->first()->users()->get()
                ->where('id', $request['id'])->first();

            return response()->json($vaccination, 201);
        }
        catch (\Exception $e) {
            DB::rollBack();
            return response()->json("updating vaccination administered failed: " . $e->getMessage(), 420);
        }
    }


    public function deletedate(int $id) : JsonResponse {
       $vaccinedate = Vaccinedate::where('id', $id)->first();
       if($vaccinedate != null){
           $vaccinedate->delete();
       }
       else {
           throw new \Exception("vaccinedate does not exist");
       }
        return response()->json('vaccinedate (' . $id .') successfully deleted', 200);
    }

    public function deletevaccination(int $id) : JsonResponse {
        $vaccination = Vaccination::where('id', $id)->first();
        if($vaccination != null){
            $vaccination->delete();
        }
        else {
            throw new \Exception("vaccination does not exist");
        }
        return response()->json('vaccination (' . $id .') successfully deleted', 200);
    }

    // ???
    public function show($vaccination) {
        $vaccination = Vaccination::find($vaccination);
        return view('vaccinations.show', compact('vaccination'));
    }

    /**
     * modify / convert values if needed
     */
    private function parseRequest(Request $request) : Request {
        // get date and convert it - its in ISO 8601, e.g. "2018-01-01T23:00:00.000Z"
        $request['day'] = new \DateTime($request->day);
        $request['starttime'] = new \DateTime($request->starttime);
        $request['endtime'] = new \DateTime($request->endtime);
        return $request;
    }
}
