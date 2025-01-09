<?php

use App\Http\Controllers\DashboardSuperAdminController;
use App\Http\Controllers\SuperAdmin\ManajemenPendaftaranController;
use App\Http\Controllers\SuperAdmin\ManajemenAkunController;
use App\Http\Controllers\SuperAdmin\ManajemenKontenController;

use App\Http\Controllers\DashboardAdminController;
use App\Http\Controllers\Admin\InventarisController;
use App\Http\Controllers\Admin\KegiatanController;
use App\Http\Controllers\Admin\OrganisasiController;
use App\Http\Controllers\Admin\PemasukanController;
use App\Http\Controllers\Admin\PengeluaranController;

use App\Http\Controllers\MasjidController;
use App\Http\Controllers\MasjidDetailController;
use App\Http\Controllers\Auth\MasjidAuthController;
use App\Http\Controllers\Auth\UserAuthController;
use App\Http\Middleware\CheckMasjidAdmin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register', [MasjidAuthController::class, 'register']);
Route::post('/login', [MasjidAuthController::class, 'login']);
Route::get('/logout', [MasjidAuthController::class, 'logout']);

// Masjid Controller
Route::get('/', [MasjidController::class, 'home']);
Route::get('/kegiatan', [MasjidController::class, 'kegiatan']);
Route::get('/kegiatan/search', [MasjidController::class, 'searchKegiatan']);
Route::get('/masjid', [MasjidController::class, 'masjid']);
Route::get('/masjid/search', [MasjidController::class, 'searchMasjid']);

// MasjidDetail Controller
Route::get('/masjid/{id}', [MasjidDetailController::class, 'profile']);
Route::get('/masjid/{id}/kegiatan', [MasjidDetailController::class, 'kegiatan']);
Route::get('/kegiatan/{kegiatanId}', [MasjidDetailController::class, 'kegiatanDetail']);
Route::get('/masjid/{id}/aset', [MasjidDetailController::class, 'aset']);
Route::get('/masjid/{id}/keuangan', [MasjidDetailController::class, 'keuangan']);
Route::get('/masjid/{id}/organisasi', [MasjidDetailController::class, 'organisasi']);
Route::post('/masjid/{id}/keuangan', [MasjidDetailController::class, 'donasi']);
Route::post('/masjid/{id}/peminjaman', [MasjidDetailController::class, 'peminjamanAset']);

// Dashboard Admin
// ? Middleware
Route::middleware([CheckMasjidAdmin::class])->group(function () {
    Route::get('/dashboard', [DashboardAdminController::class, 'index']);

    Route::get('/dashboard/pemasukan', [PemasukanController::class, 'index']);
    Route::get('/dashboard/pemasukan/{id}', [PemasukanController::class, 'show']);
    Route::patch('/dashboard/pemasukan/{id}/setujui', [PemasukanController::class, 'setujui']);
    Route::patch('/dashboard/pemasukan/{id}/tolak', [PemasukanController::class, 'tolak']);
    Route::get('/dashboard/pengeluaran', [PengeluaranController::class, 'index']);
    Route::post('/dashboard/pengeluaran', [PengeluaranController::class, 'store']);

    Route::get('/dashboard/inventaris', [InventarisController::class, 'asetMasjid']);
    Route::post('/dashboard/inventaris', [InventarisController::class, 'store']);
    Route::put('/dashboard/inventaris/{id}', [InventarisController::class, 'update']);
    Route::delete('/dashboard/inventaris/{id}', [InventarisController::class, 'destroy']);
    Route::get('/dashboard/peminjaman', [InventarisController::class, 'pengajuanPeminjaman']);
    Route::patch('/dashboard/peminjaman/{id}/setujui', [InventarisController::class, 'setujuiPeminjaman']);
    Route::patch('/dashboard/peminjaman/{id}/tolak', [InventarisController::class, 'tolakPeminjaman']);
    Route::patch('/dashboard/peminjaman/{id}/pengembalian', [InventarisController::class, 'pengembalianPeminjaman']);

    Route::get('/dashboard/kegiatan', [KegiatanController::class, 'index']);
    Route::get('/dashboard/kegiatan/{id}', [KegiatanController::class, 'show']); // Perlu?
    Route::post('/dashboard/kegiatan', [KegiatanController::class, 'store']);
    Route::get('/dashboard/kegiatan/{id}/edit', [KegiatanController::class, 'edit']);
    Route::put('/dashboard/kegiatan/{id}/edit', [KegiatanController::class, 'update']);
    Route::delete('/dashboard/kegiatan/{id}', [KegiatanController::class, 'destroy']);

    Route::get('/dashboard/organisasi', [OrganisasiController::class, 'index']);
    Route::post('/dashboard/organisasi', [OrganisasiController::class, 'store']);
    Route::put('/dashboard/organisasi/{id}', [OrganisasiController::class, 'update']);
    Route::delete('/dashboard/organisasi/{id}', [OrganisasiController::class, 'destroy']);
});

// Dashboard SuperAdmin
Route::get('/dashboard/superadmin', [DashboardSuperAdminController::class, 'index']);

Route::get('/manajemen-pendaftaran', [ManajemenPendaftaranController::class, 'index']);
Route::post('/manajemen-pendaftaran/{id}/setujui', [ManajemenPendaftaranController::class, 'setujuiPendaftaran']);
Route::post('/manajemen-pendaftaran/{id}/tolak', [ManajemenPendaftaranController::class, 'tolakPendaftaran']);
Route::post('/manajemen-pendaftaran/{id}/tinjau', [ManajemenPendaftaranController::class, 'tinjauPendaftaran']);

Route::get('/manajemen-akun', [ManajemenAkunController::class, 'index']);
Route::get('/manajemen-akun/create', [ManajemenAkunController::class, 'create']);
Route::post('/manajemen-akun', [ManajemenAkunController::class, 'store']);
Route::get('/manajemen-akun/{id}/edit', [ManajemenAkunController::class, 'edit']);
Route::put('/manajemen-akun/{id}', [ManajemenAkunController::class, 'update']);
Route::delete('/manajemen-akun/{id}', [ManajemenAkunController::class, 'destroy']);

Route::get('/manajemen-konten', [ManajemenKontenController::class, 'index']);
Route::post('/manajemen-konten/{id}/setujui', [ManajemenKontenController::class, 'setujuiKonten']);
Route::post('/manajemen-konten/{id}/tolak', [ManajemenKontenController::class, 'tolakKonten']);
Route::post('/manajemen-konten/{id}/tinjau', [ManajemenKontenController::class, 'tinjauKonten']);

// manajemen keuangan
