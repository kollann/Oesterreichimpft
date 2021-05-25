<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVaccinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vaccinations', function (Blueprint $table) {
            $table->id();
            // unsigned = sign (+/-) is not saved whole integer area can be used
            $table->bigInteger('vaccinelocation_id')->unsigned();
            $table->foreign('vaccinelocation_id')
                ->references('id')->on('vaccinelocations')
                ->onDelete('cascade');
            $table->bigInteger('vaccinedate_id')->unsigned();
            $table->foreign('vaccinedate_id')
                ->references('id')->on('vaccinedates')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vaccinations');
    }
}
