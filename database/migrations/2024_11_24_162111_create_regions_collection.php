<?php

use Illuminate\Database\Migrations\Migration;
use MongoDB\Laravel\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected $connection = 'mongodb';
    
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::connection('mongodb')->create('villes', function (Blueprint $collection) {
            $collection->string('region'); // The name of the region
            $collection->json('villes');  // Cities and their data
            $collection->timestamps();   // Optional, if you want to track creation and updates
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::connection('mongodb')->dropIfExists('villes');
    }
};
