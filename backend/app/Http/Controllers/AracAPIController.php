<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Arac;
use App\Models\Surucu;

class AracAPIController extends Controller
{
    public function index()
    {
        $araclar = Arac::all();
        return response()->json($araclar);
    }

    public function store(Request $request)
{
    $surucu = new Surucu();
    $surucu->ad = $request->input('surucu.ad');
    $surucu->soyad = $request->input('surucu.soyad');
    $surucu->telefon = $request->input('surucu.telefon');
    $surucu->save();

    $arac = new Arac();
    $arac->marka = $request->input('marka');
    $arac->model = $request->input('model');
    $arac->plaka = $request->input('plaka');
    $arac->surucu_id = $surucu->id;
    $arac->save();

    return response()->json($arac, 201);
}

    public function show($id)
    {
        $arac = Arac::findOrFail($id);
        return response()->json($arac);
    }

    public function update(Request $request, $id)
    {
        $arac = Arac::findOrFail($id);

        $surucu = Surucu::findOrFail($arac->id);
        $surucu->ad = $request->input('ad');
        $surucu->soyad = $request->input('soyad');
        $surucu->telefon = $request->input('telefon');
        $surucu->save();

        $arac->update($request->all());
        return response()->json($arac, 200);
    }


    public function destroy($id)
    {
        $arac = Arac::findOrFail($id);
        $arac->delete();
        return response()->json(null, 204);
    }
}
