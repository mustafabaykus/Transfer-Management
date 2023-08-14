<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    use HasFactory;

    protected $fillable = [
        'yolcu_id',
        'arac_id',
        'sefer_tarihi',
        'sefer_saati',
        'baslangic_noktasi',
        'bitis_noktasi',
    ];

    protected $table = 'transferler';

    // Yolcu ilişkisi
    public function yolcu()
    {
        return $this->belongsTo(Yolcu::class, 'yolcu_id');
    }

    // Araç ilişkisi
    public function arac()
    {
        return $this->belongsTo(Arac::class, 'arac_id');
    }
}
