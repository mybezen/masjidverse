<?php

namespace App\Http\Controllers;

use App\Models\KeuanganInfaq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

/**
 * TODO:
 * - handle data tidak ditemukan.
 * TODO:
 * - verifikasi akun masjid yg akses data.
 */

class DashboardAdminController extends Controller
{
    public function index(Request $request)
    {
        $akunMasjid = Auth::guard('masjid')->user();

        $kegiatanAkanDatang = $akunMasjid->kegiatanMasjid()
            ->whereDate('tanggal', '>', now())
            ->orderBy('tanggal', 'asc')
            ->limit(2)
            ->get();

        $listPengeluaran = $akunMasjid->keuanganInfaq()
            ->where('jenis_transaksi', 'kredit')
            ->pluck('nominal');

        $totalPengeluaran = $listPengeluaran->sum();

        $listPemasukan = $akunMasjid->keuanganInfaq()
            ->where('jenis_transaksi', 'debit')
            ->pluck('nominal');

        $totalPemasukan = $listPemasukan->sum();

        // Data pengeluaran dan pemasukan
        $periode = $request->query('periode', null);

        if ($periode == null) {
            $periode = date('Y');
        }

        // TODO: recap pengeluaran/pemasukan per bulan.
        $dataPengeluaran = $akunMasjid->keuanganInfaq()
            ->where('jenis_transaksi', 'kredit')
            ->whereYear('tanggal', $periode)
            ->pluck('nominal');

        $dataPemasukan = $akunMasjid->keuanganInfaq()
            ->where('jenis_transaksi', 'debit')
            ->whereYear('tanggal', $periode)
            ->pluck('nominal');

        return response()->json([
            'kegiatan' => $kegiatanAkanDatang,
            'totalPemasukan' => $totalPemasukan,
            'totalPengeluaran' => $totalPengeluaran,
            'dataPemasukan' => $dataPemasukan->toArray(),
            'dataPengeluaran' => $dataPengeluaran->toArray()
        ]);
    }
}
