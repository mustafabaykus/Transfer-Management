<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('yolcular', function (Blueprint $table) {
        $table->id();
        $table->string('ad');
        $table->string('soyad');
        $table->string('telefon');
        $table->string('yolcu_tipi');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('yolcular');
    }
};
