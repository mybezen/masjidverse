<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KeuanganInfaq;
use App\Models\Masjid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PemasukanController extends Controller
{
    public function index()
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $listPemasukan = KeuanganInfaq::where('masjid_id', $idMasjid)
            ->where('jenis_transaksi', 'debit')
            ->where('status_transaksi', 'diajukan')
            ->orderBy('created_at', 'desc')
            ->get();

        $listPemasukanDisetujui = KeuanganInfaq::where('masjid_id', $idMasjid)
            ->where('jenis_transaksi', 'debit')
            ->where('status_transaksi', 'disetujui')
            ->pluck('nominal');

        $totalPemasukan = $listPemasukanDisetujui->sum();

        return response()->json([
            'success' => true,
            'listPemasukan' => $listPemasukan,
            'totalPemasukan' => $totalPemasukan
        ]);
    }

    public function show($id)
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $pemasukan = KeuanganInfaq::find($id);

        if (!$pemasukan || $pemasukan->status_transaksi != 'diajukan' || $pemasukan->masjid_id != $idMasjid) {
            return response()->json([
                'success' => false,
                'message' => 'Data tidak ditemukan.',
            ], 404);
        }

        // TODO: File handling

        return response()->json([
            'success' => true,
            'pemasukan' => $pemasukan
        ]);
    }

    public function setujui($id)
    {
        $pemasukan = KeuanganInfaq::find($id);

        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        if (!$pemasukan || $pemasukan->status_transaksi != 'diajukan' || $pemasukan->masjid_id != $idMasjid) {
            return response()->json([
                'success' => false,
                'message' => 'Data tidak ditemukan.',
            ], 404);
        }

        $pemasukan->update([
            'status_transaksi' => 'disetujui'
        ]);

        $masjid = Masjid::find($idMasjid);
        $saldoMasjid = $masjid->saldo_kas;

        $saldoMasjid = $saldoMasjid + $pemasukan->nominal;

        $masjid->update([
            'saldo_kas' => $saldoMasjid
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil mengonfirmasi pemasukan.',
        ]);
    }

    public function tolak($id)
    {
        $pemasukan = KeuanganInfaq::find($id);

        if (!$pemasukan) {
            return response()->json([
                'success' => false,
                'message' => 'Data tidak ditemukan',
            ], 404);
        }

        $pemasukan->update([
            'status_transaksi' => 'ditolak'
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil menolak pemasukan yang diajukan.',
        ]);
    }
}
