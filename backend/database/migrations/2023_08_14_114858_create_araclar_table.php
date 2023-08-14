<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
{
    Schema::create('araclar', function (Blueprint $table) {
        $table->increments('id');
        $table->string('marka');
        $table->string('model');
        $table->string('plaka');
        $table->unsignedBigInteger('surucu_id')->default(0);
        $table->timestamps();
    });

    Schema::table('araclar', function (Blueprint $table) {
        $table->foreign('surucu_id')->references('id')->on('suruculer');
    });
}

};
