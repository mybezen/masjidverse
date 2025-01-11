<?php
namespace App\Http\Controllers;

use App\Models\KegiatanMasjid;
use App\Models\KeuanganInfaq;
use App\Models\Masjid;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class DashboardSuperAdminController extends Controller
{
    public function index()
    {
            if (!Auth::guard('superadmin')->check()) {
                return response()->json(['message' => 'Unauthorized'], 403);
            }

            $jumlahMasjid = Masjid::where('status', 'diterima')->count();
            $jumlahPenggunaAktif = User::where('status', 'aktif')->count();

            $manajemenAkun = Masjid::select('nama', 'password', 'no_telepon', 'email')
                ->orderBy('id', 'desc')
                ->take(5)
                ->get();

            $manajemenPendaftaran = Masjid::select('nama', 'no_telepon', 'email', 'status')
                ->where('status', 'diajukan')
                ->orderBy('created_at', 'desc')
                ->take(5)
                ->get();

            $manajemenKonten = KegiatanMasjid::select('nama_kegiatan', 'status_laporan')
                ->where('status_laporan', 'diajukan')
                ->orderBy('id', 'desc')
                ->take(5)
                ->get();

            $manajemenKeuangan = KeuanganInfaq::join('masjid', 'keuangan_infaq.masjid_id', '=', 'masjid.id')
                ->select(
                    'keuangan_infaq.tanggal',
                    'masjid.nama as nama_masjid',
                    'keuangan_infaq.nominal as jumlah',
                    'keuangan_infaq.status_transaksi as status')
                ->orderBy('keuangan_infaq.tanggal', 'desc')
                ->take(5)
                ->get();

            return response()->json([
                'jumlahMasjidTerdaftar' => $jumlahMasjid,
                'jumlahPenggunaAktif' => $jumlahPenggunaAktif,
                'manajemenAkun' => $manajemenAkun,
                'manajemenPendaftaran' => $manajemenPendaftaran,
                'manajemenKonten' => $manajemenKonten,
                'manajemenKeuangan' => $manajemenKeuangan,
            ]);
        }
    }
