<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Surucu extends Model
{
    use HasFactory;

    protected $fillable = [
        'ad',
        'soyad',
        'telefon',
    ];

    protected $table = 'suruculer';

    // Araç ile Sürücü arasında bir ilişki tanımlıyoruz
    public function araclar()
    {
        return $this->hasMany(Arac::class, 'surucu_id');
    }
}
