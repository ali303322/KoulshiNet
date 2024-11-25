<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Ville extends Model
{
    protected $connection = "mongodb";
    protected $collection = "Villes";
    protected $fillable = ['region', 'villes']; // Specify the attributes you want to fill
    // protected $casts = [
    //     'villes' => 'array', // Cast the 'villes' attribute to an array
    // ];
}
