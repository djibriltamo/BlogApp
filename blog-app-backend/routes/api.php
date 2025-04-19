<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\TempImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('blogs', [BlogController::class, 'index']);
Route::post('blogs/store', [BlogController::class, 'store']);
Route::post('save_image', [TempImageController::class, 'store']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
