<?php

namespace App\Http\Controllers;

use App\Models\KegiatanMasjid;
use App\Models\KeuanganInfaq;
use App\Models\Masjid;
use App\Models\User;

class DashboardSuperAdminController extends Controller
{
    public function index()
    {
        $jumlahMasjid = Masjid::count(); // ? status diterima
        $jumlahPenggunaAktif = User::where('status', 'aktif')->count(); // ? status

        $manajemenAkun = User::select('name', 'password', 'no_telp', 'email')
            ->orderBy('id', 'desc')
            ->take(5)
            ->get();

        $manajemenPendaftaran = Masjid::where('nama', 'nama_masjid', 'no_telp', 'email', 'status', 'diajukan')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        $manajemenKonten = KegiatanMasjid::select('nama_kegiatan', 'status_laporan')
            ->orderBy('id', 'desc')
            ->take(5)
            ->get();

        $laporanKeuangan = KeuanganInfaq::select('tanggal', 'nama', 'jumlah', 'status')
            ->orderBy('tanggal', 'desc')
            ->take(5)
            ->get();

        return response()->json([
            'jumlahMasjidTerdaftar' => $jumlahMasjid,
            'jumlahPenggunaAktif' => $jumlahPenggunaAktif,
            'manajemenAkun' => $manajemenAkun,
            'manajemenPendaftaran' => $manajemenPendaftaran,
            'manajemenKonten' => $manajemenKonten,
            'laporanKeuangan' => $laporanKeuangan,
        ]);
    }
}
