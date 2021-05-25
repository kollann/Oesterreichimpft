<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// save user in postman
Route::post('user', [\App\Http\Controllers\VaccinationController::class, 'saveuser']);

// public auth login
Route::post('auth/login', [\App\Http\Controllers\AuthController::class, 'login']);

// get all vaccinations
// Route::get('vaccinations', [\App\Http\Controllers\VaccinationController::class, 'index']);
Route::get('vaccinedates', [\App\Http\Controllers\VaccinationController::class, 'findAllVaccinedates']);
Route::get('vaccinelocations', [\App\Http\Controllers\VaccinationController::class, 'findAllVaccinelocations']);

// get vaccination, location or date by id
// Route::get('vaccination/{id}', [\App\Http\Controllers\VaccinationController::class, 'findVaccinationById']);
Route::get('vaccinelocation/{id}', [\App\Http\Controllers\VaccinationController::class, 'findLocationById']);
Route::get('vaccinedate/{id}', [\App\Http\Controllers\VaccinationController::class, 'findDateById']);

// methods with authentication needed
Route::group(['middleware' => ['api', 'auth.jwt']], function(){
    // get user by date and location
    Route::get('vaccineuser/{dateid}/{locid}', [\App\Http\Controllers\VaccinationController::class, 'findUsersByLocationAndDate']);

    // save vaccination, vaccinedate and vaccinelocation uses VERB post
    Route::post('vaccinedate', [\App\Http\Controllers\VaccinationController::class, 'savedate']);
    Route::post('vaccination', [\App\Http\Controllers\VaccinationController::class, 'savevaccination']);
    Route::post('vaccinelocation', [\App\Http\Controllers\VaccinationController::class, 'savelocation']);

    // register user for specific vaccination
    Route::post('vaccinationUser', [\App\Http\Controllers\VaccinationController::class, 'registerToVaccination']);

    // update vaccination, vaccinedate and vaccinelocation uses VERB put
    Route::put('vaccinedate/{id}', [\App\Http\Controllers\VaccinationController::class,'updatedate']);
    Route::put('vaccination/{id}', [\App\Http\Controllers\VaccinationController::class,'updatevaccination']);
    Route::put('vaccinelocation/{id}', [\App\Http\Controllers\VaccinationController::class,'updatelocation']);

    // set vaccination administered
    Route::put('vaccineuser/{id}', [\App\Http\Controllers\VaccinationController::class,'updateVaccinationAdministered']);

    // delete vaccination, vaccinedate and vaccinelocation uses VERB delete
    Route::delete('vaccinedate/{id}', [\App\Http\Controllers\VaccinationController::class,'deletedate']);
    Route::delete('vaccination/{id}', [\App\Http\Controllers\VaccinationController::class,'deletevaccination']);
    Route::delete('vaccinelocation/{id}', [\App\Http\Controllers\VaccinationController::class,'deletevaccinelocation']);

    Route::post('auth/logout',[\App\Http\Controllers\AuthController::class, 'logout']);
});
