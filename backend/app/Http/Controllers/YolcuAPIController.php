<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Yolcu;

class YolcuAPIController extends Controller
{
    public function index()
    {
        $yolcular = Yolcu::all();
        return response()->json($yolcular);
    }

    public function store(Request $request)
    {
        $yolcu = Yolcu::create($request->all());
        return response()->json($yolcu, 201);
    }

    public function show($id)
    {
        $yolcu = Yolcu::findOrFail($id);
        return response()->json($yolcu);
    }

    public function update(Request $request, $id)
    {
        $yolcu = Yolcu::findOrFail($id);
        $yolcu->update($request->all());
        return response()->json($yolcu, 200);
    }

    public function destroy($id)
    {
        $yolcu = Yolcu::findOrFail($id);
        $yolcu->delete();
        return response()->json(null, 204);
    }
}
