<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Surucu;

class SurucuAPIController extends Controller
{
    public function index()
    {
        $suruculer = Surucu::all();
        return response()->json($suruculer);
    }

    public function store(Request $request)
    {

        $surucu = Surucu::create($request->all());
        return response()->json($surucu, 201);
    }

    public function show($id)
    {
        $surucu = Surucu::findOrFail($id);
        return response()->json($surucu);
    }

    public function update(Request $request, $id)
    {
        $surucu = Surucu::findOrFail($id);
        $surucu->update($request->all());
        return response()->json($surucu, 200);
    }

    public function destroy($id)
    {
        $surucu = Surucu::findOrFail($id);
        $surucu->delete();
        return response()->json(null, 204);
    }
}
