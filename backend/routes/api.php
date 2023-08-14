<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\YolcuAPIController;
use App\Http\Controllers\AracAPIController;
use App\Http\Controllers\TransferAPIController;
use App\Http\Controllers\SurucuAPIController;


Route::get('/yolcular', [YolcuAPIController::class, 'index']);
Route::post('/yolcular', [YolcuAPIController::class, 'store']);
Route::get('/yolcular/{id}', [YolcuAPIController::class, 'show']);
Route::put('/yolcular/{id}', [YolcuAPIController::class, 'update']);
Route::delete('/yolcular/{id}', [YolcuAPIController::class, 'destroy']);


Route::get('/araclar', [AracAPIController::class, 'index']);
Route::post('/araclar', [AracAPIController::class, 'store']);
Route::get('/araclar/{id}', [AracAPIController::class, 'show']);
Route::put('/araclar/{id}', [AracAPIController::class, 'update']);
Route::delete('/araclar/{id}', [AracAPIController::class, 'destroy']);

Route::get('/suruculer', [SurucuAPIController::class, 'index']);
Route::post('/suruculer', [SurucuAPIController::class, 'store']);
Route::get('/suruculer/{id}', [SurucuAPIController::class, 'show']);
Route::put('/suruculer/{id}', [SurucuAPIController::class, 'update']);
Route::delete('/suruculer/{id}', [SurucuAPIController::class, 'destroy']);


Route::get('/transferler/gunun-transferleri', [TransferAPIController::class, 'gununTransferleri']);
Route::get('/transferler', [TransferAPIController::class, 'index']);
Route::post('/transferler', [TransferAPIController::class, 'store']);
Route::get('/transferler/{id}', [TransferAPIController::class, 'show']);
Route::put('/transferler/{id}', [TransferAPIController::class, 'update']);
Route::delete('/transferler/{id}', [TransferAPIController::class, 'destroy']);





