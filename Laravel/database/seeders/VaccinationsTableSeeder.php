<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Vaccination;
use App\Models\Vaccinedate;
use App\Models\Vaccinelocation;
use Illuminate\Database\Seeder;
use DateTime;

class VaccinationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $vaccinedate = new Vaccinedate;
        $vaccinedate->day = new DateTime();
        $vaccinedate->starttime = new DateTime();
        $vaccinedate->endtime = new DateTime();
        $vaccinedate->maximum_attendees = 10;

        // first user
        $user = User::all()->first();
        // $vaccinedate->user()->associate($user);

        $vaccinedate->save();

        $vaccinelocation = new Vaccinelocation;
        $vaccinelocation->zip = '4184';
        $vaccinelocation->city = 'Helfenberg';
        $vaccinelocation->street = 'Piberstein 29';
        $vaccinelocation->description = "bei den Koll's";
        $vaccinelocation->save();

        $vaccinelocation2 = new Vaccinelocation;
        $vaccinelocation2->zip = '4192';
        $vaccinelocation2->city = 'Schenkenfelden';
        $vaccinelocation2->street = 'Markt 12';
        $vaccinelocation2->description = "Bergsmann Haus";
        $vaccinelocation2->save();

        $vaccination = new Vaccination;
        $vaccination->vaccinelocation_id = $vaccinelocation->id;
        $vaccination->vaccinedate_id = $vaccinedate->id;
        $vaccination->save();

        $users = User::all()->pluck('id');
        // $vaccination->users()->sync($users);
        $vaccination->save();

        $vaccinedate2 = new Vaccinedate;
        $vaccinedate2->day = new DateTime();
        $vaccinedate2->starttime = new DateTime;
        $vaccinedate2->endtime = new DateTime;
        $vaccinedate2->maximum_attendees = 40;

        // second user
        $user2 = User::all()->first();
        // $vaccinedate2->user()->associate($user2);

        $vaccinedate2->save();

        $vaccinelocation3 = new Vaccinelocation;
        $vaccinelocation3->zip = '4050';
        $vaccinelocation3->city = 'Rohrbach';
        $vaccinelocation3->street = 'Schulstraße 10';
        $vaccinelocation3->description = "Centro Rohrbach";
        $vaccinelocation3->save();


        $vaccination2 = new Vaccination;
        $vaccination2->vaccinelocation_id = $vaccinelocation3->id;
        $vaccination2->vaccinedate_id = $vaccinedate2->id;
        $vaccination2->save();

        //$users2 = User::all()->pluck('id');
        //$vaccination2->users()->sync($users2);
        $vaccination2->save();

    }
}
