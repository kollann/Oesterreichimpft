<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vaccinedate extends Model
{
    use HasFactory;

    protected $fillable = ['day', 'starttime', 'endtime', 'maximum_attendees'];

 /*   public function user() : BelongsTo {
        return $this->belongsTo(User::class);
    }*/

    // vaccinelocation has many vaccinations
    public function vaccinations() : HasMany {
        return $this->hasMany(Vaccination::class);
    }
}
