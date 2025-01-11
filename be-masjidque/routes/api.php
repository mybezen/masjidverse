<?php

use App\Http\Controllers\DashboardSuperAdminController;
use App\Http\Controllers\SuperAdmin\ManajemenPendaftaranController;
use App\Http\Controllers\SuperAdmin\ManajemenAkunController;
use App\Http\Controllers\SuperAdmin\ManajemenKontenController;
use App\Http\Controllers\SuperAdmin\ManajemenKeuanganController;
use App\Http\Controllers\SuperAdmin\DashboardStatistikController;
use App\Http\Controllers\SuperAdmin\DashboardKeamananController;

use App\Http\Controllers\DashboardAdminController;
use App\Http\Controllers\Admin\InventarisController;
use App\Http\Controllers\Admin\KegiatanController;
use App\Http\Controllers\Admin\OrganisasiController;
use App\Http\Controllers\Admin\PemasukanController;
use App\Http\Controllers\Admin\PengeluaranController;

use App\Http\Controllers\MasjidController;
use App\Http\Controllers\MasjidDetailController;
use App\Http\Controllers\Auth\SuperAdminAuthController;
use App\Http\Controllers\Auth\MasjidAuthController;

use App\Http\Middleware\CheckGuest;
use App\Http\Middleware\CheckMasjidAdmin;
use App\Http\Middleware\CheckSuperAdmin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware([CheckGuest::class])->group(function () {
    // Guest Authentication
    Route::post('/login', [MasjidAuthController::class, 'login']);
    Route::post('/register', [MasjidAuthController::class, 'register']);

    // Masjid Controller
    Route::get('/', [MasjidController::class, 'home']);
    Route::get('/kegiatan', [MasjidController::class, 'kegiatan']);
    Route::get('/kegiatan/search', [MasjidController::class, 'searchKegiatan']);
    Route::get('/masjid', [MasjidController::class, 'masjid']);
    Route::get('/masjid/search', [MasjidController::class, 'searchMasjid']);

    // Masjid Detail Controller
    Route::get('/masjid/{id}', [MasjidDetailController::class, 'profile']);
    Route::get('/masjid/{id}/kegiatan', [MasjidDetailController::class, 'kegiatan']);
    Route::get('/kegiatan/{kegiatanId}', [MasjidDetailController::class, 'kegiatanDetail']);
    Route::get('/masjid/{id}/aset', [MasjidDetailController::class, 'aset']);
    Route::get('/masjid/{id}/keuangan', [MasjidDetailController::class, 'keuangan']);
    Route::post('/masjid/{id}/keuangan', [MasjidDetailController::class, 'donasi']);
    Route::get('/masjid/{id}/organisasi', [MasjidDetailController::class, 'organisasi']);
    Route::get('/masjid/{id}/peminjaman', [MasjidDetailController::class, 'peminjamanAsetShow']);
    Route::post('/masjid/{id}/peminjaman', [MasjidDetailController::class, 'peminjamanAset']);
    });

    // Admin Authentication
Route::middleware([CheckMasjidAdmin::class])->group(function () {
    Route::get('/logout', [MasjidAuthController::class, 'logout']);
    Route::post('/dashboard/ganti-password', [DashboardAdminController::class, 'gantiPassword']);

    // Dashboard Admin
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
    Route::get('/dashboard/kegiatan/{id}', [KegiatanController::class, 'show']);
    Route::post('/dashboard/kegiatan', [KegiatanController::class, 'store']);
    Route::get('/dashboard/kegiatan/{id}/edit', [KegiatanController::class, 'edit']);
    Route::put('/dashboard/kegiatan/{id}/edit', [KegiatanController::class, 'update']);
    Route::delete('/dashboard/kegiatan/{id}', [KegiatanController::class, 'destroy']);

    Route::get('/dashboard/organisasi', [OrganisasiController::class, 'index']);
    Route::post('/dashboard/organisasi', [OrganisasiController::class, 'store']);
    Route::put('/dashboard/organisasi/{id}', [OrganisasiController::class, 'update']);
    Route::delete('/dashboard/organisasi/{id}', [OrganisasiController::class, 'destroy']);
    });

    // SuperAdmin Authentication
    Route::post('/superadmin/login', [SuperAdminAuthController::class, 'login']);

    // Dashboard SuperAdmin
Route::middleware([CheckSuperAdmin::class])->group(function () {
    Route::get('/dashboard/superadmin', [DashboardSuperAdminController::class, 'index']);
    Route::post('/superadmin/logout', [SuperAdminAuthController::class, 'logout']);

    Route::get('/dashboard/manajemen-pendaftaran', [ManajemenPendaftaranController::class, 'index']);
    Route::post('/dashboard/manajemen-pendaftaran/{id}/setujui', [ManajemenPendaftaranController::class, 'setujuiPendaftaran']);
    Route::post('/dashboard/manajemen-pendaftaran/{id}/tolak', [ManajemenPendaftaranController::class, 'tolakPendaftaran']);
    Route::post('/dashboard/manajemen-pendaftaran/{id}/tinjau', [ManajemenPendaftaranController::class, 'tinjauPendaftaran']);

    Route::get('/dashboard/manajemen-akun', [ManajemenAkunController::class, 'index']);
    Route::post('/dashboard/manajemen-akun', [ManajemenAkunController::class, 'store']);
    Route::get('/dashboard/manajemen-akun/{id}/edit', [ManajemenAkunController::class, 'edit']);
    Route::put('/dashboard/manajemen-akun/{id}', [ManajemenAkunController::class, 'update']);
    Route::delete('/dashboard/manajemen-akun/{id}', [ManajemenAkunController::class, 'destroy']);

    Route::get('/dashboard/manajemen-konten', [ManajemenKontenController::class, 'index']);
    Route::post('/dashboard/manajemen-konten/{id}/setujui', [ManajemenKontenController::class, 'setujuiKonten']);
    Route::post('/dashboard/manajemen-konten/{id}/tolak', [ManajemenKontenController::class, 'tolakKonten']);
    Route::post('/dashboard/manajemen-konten/{id}/tinjau', [ManajemenKontenController::class, 'tinjauKonten']);

    Route::get('/dashboard/manajemen-keuangan', [ManajemenKeuanganController::class, 'index']);
    Route::get('/dashboard/manajemen-keuangan/{id}', [ManajemenKeuanganController::class, 'show']);

    Route::get('/dashboard/statistik', [DashboardStatistikController::class, 'index']);

    Route::get('/dashboard/keamanan', [DashboardKeamananController::class, 'index']);
    });
