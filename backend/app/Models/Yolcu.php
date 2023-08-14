<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Yolcu extends Model {

    protected $fillable = ['ad' , 'soyad' , 'telefon' , 'yolcu_tipi'];
    protected $table = 'yolcular';
    use HasFactory;
}
