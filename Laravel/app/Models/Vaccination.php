<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Vaccination extends Model
{
    use HasFactory;

    protected $fillable = ['vaccinedate_id', 'vaccinelocation_id'];

    // vaccinelocation has many vaccinations (1:N)
    public function vaccinelocation() : BelongsTo {
        return $this->belongsTo(Vaccinelocation::class);
    }

    // vaccinedate has many vaccinations (1:N)
    public function vaccinedate() : BelongsTo {
        return $this->belongsTo(Vaccinedate::class);
    }

    // vaccination belongs to many users
    public function users() : BelongsToMany {
        return $this->belongsToMany(User::class)->withTimestamps()->withPivot('vaccination_administered');
    }
}

