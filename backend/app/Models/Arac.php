<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Arac extends Model
{
    use HasFactory;

    protected $fillable = [
        'marka',
        'model',
        'plaka',
        'surucu_id'
    ];

    protected $table = 'araclar';


}

