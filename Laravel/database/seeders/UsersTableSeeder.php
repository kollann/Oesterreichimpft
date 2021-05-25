<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->svnr = '4709170697';
        $user->firstname = 'Anna-Sophie';
        $user->lastname = 'Koll';
        $user->gender = 'weiblich';
        $user->email = 'askoll097@gmail.com';
        $user->password = bcrypt('secret');
        $user->is_admin = '1';
        $user->save();

        $user2 = new User;
        $user2->svnr = '4445351';
        $user2->firstname = 'Sepp';
        $user2->lastname = 'Koll';
        $user2->gender = 'männlich';
        $user2->email = 'sepp@gmail.com';
        $user2->password = bcrypt('secret');
        $user2->is_admin = '0';
        $user2->save();

        $user3 = new User;
        $user3->svnr = '65465132';
        $user3->firstname = 'Bertl';
        $user3->lastname = 'Eibensteiner';
        $user3->gender = 'männlich';
        $user3->email = 'bertl.eibenstener@gmail.com';
        $user3->password = bcrypt('secret');
        $user3->is_admin = '0';
        $user3->save();

    }
}
