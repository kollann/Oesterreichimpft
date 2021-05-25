<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Vaccinedate;
use Illuminate\Database\Seeder;
use DateTime;
use Time;

class VaccinedatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
/*        $vaccinedate = new Vaccinedate;
        $vaccinedate->day = new DateTime();
        // HIER NEW TIME --> nicht möglich --> wirft Fehler!
        $vaccinedate->starttime = '10:22:13';
        $vaccinedate->endtime = '14:55:36';
        $vaccinedate->maximum_attendees = 10;

      // first user
        $user = User::all()->first();
        $vaccinedate->user()->associate($user);

        $vaccinedate->save();*/
    }
}
