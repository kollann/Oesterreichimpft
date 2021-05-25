<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vaccinelocation extends Model
{
    use HasFactory;

    protected $fillable = ['zip', 'city', 'street', 'description'];

    // vaccinelocation has many vaccinations
    public function vaccinations() : HasMany {
        return $this->hasMany(Vaccination::class);
    }
}
