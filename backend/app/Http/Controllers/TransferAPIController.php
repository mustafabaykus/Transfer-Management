<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Transfer;

class TransferAPIController extends Controller
{
    public function index()
    {
        $transferler = Transfer::all();
        return response()->json($transferler);
    }

    public function store(Request $request)
{
    $validatedData = $request->validate([
        'yolcu_id' => 'required|integer',
        'arac_id' => 'required|integer',
        'sefer_tarihi' => 'required|date',
        'sefer_saati' => 'required|date_format:H:i',
        'baslangic_noktasi' => 'required|string',
        'bitis_noktasi' => 'required|string',
    ]);

    $transfer = Transfer::create($validatedData);
    return response()->json($transfer, 201);
}

    public function show($id)
    {
        $transfer = Transfer::findOrFail($id);
        return response()->json($transfer);
    }

    public function update(Request $request, $id)
    {
        $transfer = Transfer::findOrFail($id);
        $transfer->update($request->all());
        return response()->json($transfer, 200);
    }

    public function destroy($id)
    {
        $transfer = Transfer::findOrFail($id);
        $transfer->delete();
        return response()->json(null, 204);
    }
    public function gununTransferleri(Request $request)
    {
        $tarih = $request->input('tarih');
        $gununTransferleri = Transfer::whereDate('sefer_tarihi', $tarih)->with(['yolcu', 'arac'])->get();
        return response()->json($gununTransferleri);
    }

}
