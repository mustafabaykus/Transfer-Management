<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AracResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'marka' => $this->marka,
            'model' => $this->model,
            'plaka' => $this->plaka,
            'surucu' => [
                'id' => $this->surucu->id,
                'ad' => $this->surucu->ad,
                'soyad' => $this->surucu->soyad,
                'telefon' => $this->surucu->telefon,
            ],
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
