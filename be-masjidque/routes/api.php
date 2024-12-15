<?php

use App\Http\Controllers\Auth\UserAuthController;
use App\Http\Controllers\MasjidController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UserAuthController::class, 'register']);
Route::post('/login', [UserAuthController::class, 'login']);
Route::post('/logout', [UserAuthController::class, 'logout']);

// Masjid Controller
Route::get('/', [MasjidController::class, 'home']);
Route::get('/kegiatan', [MasjidController::class, 'kegiatan']);
Route::get('/kegiatan/{query}', MasjidController::class, 'searchKegiatan');
Route::get('/masjid', [MasjidController::class, 'masjid']);
Route::get('/masjid/{query}', MasjidController::class, 'searchMasjid');
