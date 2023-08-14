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
    Schema::create('transferler', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('yolcu_id');
        $table->date('sefer_tarihi');
        $table->time('sefer_saati');
        $table->string('baslangic_noktasi');
        $table->string('bitis_noktasi');
        $table->unsignedBigInteger('arac_id');
        $table->timestamps();

        $table->foreign('yolcu_id')->references('id')->on('yolcular');
        $table->foreign('arac_id')->references('id')->on('araclar');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transferler');
    }
};
