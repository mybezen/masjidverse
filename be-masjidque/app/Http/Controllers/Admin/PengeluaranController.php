<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KeuanganInfaq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PengeluaranController extends Controller
{
    public function index()
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $listPemasukan = KeuanganInfaq::where('masjid_id', $idMasjid)
            ->where('jenis_transaksi', 'kredit')
            ->orderBy('created_at', 'desc')
            ->get();

        $totalPemasukan = $listPemasukan->sum('nominal');

        return response()->json([
            'success' => true,
            'listPemasukan' => $listPemasukan,
            'totalPemasukan' => $totalPemasukan
        ]);
    }

    public function store(Request $request)
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

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

        return response()->json([
            'success' => true,
            'message' => 'Berhasil membuat pengeluaran baru.',
        ]);
    }
}
