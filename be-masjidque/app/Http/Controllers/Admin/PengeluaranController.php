<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KeuanganInfaq;
use App\Models\Masjid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PengeluaranController extends Controller
{
    public function index()
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $listPengeluaran = KeuanganInfaq::where('masjid_id', $idMasjid)
            ->where('jenis_transaksi', 'kredit')
            ->orderBy('created_at', 'desc')
            ->get();

        if ($listPengeluaran->isEmpty()) {
            return response()->json([
                'success' => false,
                'listPengeluaran' => [],
                'totalPengeluaran' => 0
            ]);
        }

        $totalPengeluaran = $listPengeluaran->sum('nominal');

        return response()->json([
            'success' => true,
            'listPengeluaran' => $listPengeluaran,
            'totalPengeluaran' => $totalPengeluaran
        ]);
    }

    public function store(Request $request)
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $masjid = Masjid::find($idMasjid);

        $validator = Validator::make($request->all(), [
            'deskripsi' => 'required',
            'nominal' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        if ($request->input('nominal') > $masjid->saldo_kas) {
            return response()->json([
                'success' => false,
                'message' => 'Saldo kas tidak cukup'
            ], 422);
        }

        $pengeluaran = KeuanganInfaq::create([
            'tanggal' => now(),
            'keterangan' => $request->input('deksripsi'),
            'nominal' => $request->input('nominal'),
            'jenis_transaksi' => 'kredit',
            'status_transaksi' => 'disetujui',
            'masjid_id' => $idMasjid,
            'bukti_transfer' => null
        ]);

        if (!$pengeluaran) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal membuat pengeluaran baru.'
            ]);
        }

        $masjid = Masjid::find($idMasjid);
        $saldoMasjid = $masjid->saldo_kas;

        $nominalPengeluaran = $request->input('nominal');

        $saldoMasjid = $saldoMasjid - $nominalPengeluaran;

        $masjid->update([
            'saldo_kas' => $saldoMasjid
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil membuat pengeluaran baru.',
        ]);
    }
}
