<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SurucuResource extends JsonResource
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
            'ad' => $this->ad,
            'soyad' => $this->soyad,
            'telefon' => $this->telefon,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
