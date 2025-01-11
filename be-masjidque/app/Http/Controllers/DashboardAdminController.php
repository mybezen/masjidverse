<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use App\Models\KegiatanMasjid;
use App\Models\KeuanganInfaq;
use App\Models\Masjid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class DashboardAdminController extends Controller
{
    public function index(Request $request)
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $kegiatanAkanDatang = KegiatanMasjid::where('masjid_id', $idMasjid)
            ->whereDate('tanggal', '>', now())
            ->orderBy('tanggal', 'asc')
            ->limit(2)
            ->get();

        $listPengeluaran = KeuanganInfaq::where('masjid_id', $idMasjid)
            ->where('jenis_transaksi', 'kredit')
            ->pluck('nominal');

        $totalPengeluaran = $listPengeluaran->sum();

        $listPemasukan = KeuanganInfaq::where('masjid_id', $idMasjid)
            ->where('jenis_transaksi', 'debit')
            ->where('status_transaksi', 'disetujui')
            ->pluck('nominal');

        $totalPemasukan = $listPemasukan->sum();

        // Data pengeluaran dan pemasukan
        $tahun = $request->query('tahun');

        if (!$tahun) {
            $tahun = date('Y');
        }

        $pengeluaranBulanan = KeuanganInfaq::selectRaw('MONTH(tanggal) as bulan, SUM(nominal) as total_pengeluaran')
            ->whereYear('tanggal', $tahun)
            ->where('masjid_id', $idMasjid)
            ->where('jenis_transaksi', 'kredit')
            ->where('status_transaksi', 'disetujui')
            ->groupByRaw('MONTH(tanggal)')
            ->orderBy('bulan')
            ->get()
            ->pluck('total_pengeluaran', 'bulan');

        $listPengeluaranBulanan = [];
        for ($bulan = 1; $bulan <= 12; $bulan++) {
            $listPengeluaranBulanan[$bulan] = $pengeluaranBulanan->get($bulan, 0);
        }

        $pemasukanBulanan = KeuanganInfaq::selectRaw('MONTH(tanggal) as bulan, SUM(nominal) as total_pemasukan')
            ->whereYear('tanggal', $tahun)
            ->where('masjid_id', $idMasjid)
            ->where('jenis_transaksi', 'debit')
            ->where('status_transaksi', 'disetujui')
            ->groupByRaw('MONTH(tanggal)')
            ->orderBy('bulan')
            ->get()
            ->pluck('total_pemasukan', 'bulan');

        $listPemasukanBulanan = [];
        for ($bulan = 1; $bulan <= 12; $bulan++) {
            $listPemasukanBulanan[$bulan] = $pemasukanBulanan->get($bulan, 0);
        }

        return response()->json([
            'kegiatan' => $kegiatanAkanDatang,
            'totalPemasukan' => $totalPemasukan,
            'totalPengeluaran' => $totalPengeluaran,
            'dataPemasukan' => $listPemasukanBulanan,
            'dataPengeluaran' => $listPengeluaranBulanan
        ]);
    }

    public function gantiPassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);

        $user = Auth::guard('masjid')->user();

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'User tidak ditemukan.'], 404);
        }

        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json(['success' => false, 'message' => 'Password lama salah.'], 400);
        }

        $updated = Masjid::where('id', $user->id)->update([
            'password' => Hash::make($request->new_password),
            'password_last_updated_at' => now(),
        ]);

        if ($updated) {
            return response()->json(['success' => true, 'message' => 'Password berhasil diubah.'], 200);
        }

        return response()->json(['success' => false, 'message' => 'Gagal mengubah password.'], 500);
    }
}