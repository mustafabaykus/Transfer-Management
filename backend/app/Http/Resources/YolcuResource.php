<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class YolcuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'ad' => $this->ad,
            'soyad' => $this->soyad,
            'telefon' => $this->telefon,
            'yolcu_tipi' => $this->yolcu_tipi,
        ];
    }
}
