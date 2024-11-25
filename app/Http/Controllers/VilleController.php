<?php

namespace App\Http\Controllers;

use App\Models\Ville;
use Illuminate\Http\Request;

class VilleController extends Controller
{

    //methode qui prendre toute les ville dans la collection villes dans database:

    public function GetCitys(){

         $results = Ville::raw(function ($collection) {
            return $collection->aggregate([
                ['$unwind' => '$regions'],
                ['$unwind' => '$regions.cities'],
                ['$project' => ['_id' => 0, 'city' => '$regions.cities.name']],
            ]);
        });

        $villes = iterator_to_array($results);

        return response()->json($villes);
    }

}
