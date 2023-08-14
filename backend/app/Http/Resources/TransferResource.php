<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\YolcuResource;
use App\Http\Resources\AracResource;

class TransferResource extends JsonResource
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
            'yolcu' => new YolcuResource($this->whenLoaded('yolcu')),
            'arac' => new AracResource($this->whenLoaded('arac')),
            'sefer_tarihi' => $this->sefer_tarihi,
            'sefer_saati' => $this->sefer_saati,
            'baslangic_noktasi' => $this->baslangic_noktasi,
            'bitis_noktasi' => $this->bitis_noktasi,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
