<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\KeuanganInfaq;
use Illuminate\Http\Request;

class ManajemenKeuanganController extends Controller
{
    public function index(Request $request)
    {
        $filter = $request->query('filter', 'all');
        $keuanganQuery = KeuanganInfaq::query();

        switch ($filter) {
            case 'hari':
                $keuanganQuery->whereDate('tanggal', now());
                break;
            case 'minggu':
                $keuanganQuery->whereBetween('tanggal', [now()->startOfWeek(), now()->endOfWeek()]);
                break;
            case 'bulan':
                $keuanganQuery->whereMonth('tanggal', now()->month)
                    ->whereYear('tanggal', now()->year);
                break;
            case 'tahun':
                $keuanganQuery->whereYear('tanggal', now()->year);
                break;
            case 'all':
            default:
                break;
        }

        $keuangan = $keuanganQuery->orderBy('tanggal', 'desc')->get();

        return response()->json([
            'status' => 'success',
            'data' => $keuangan,
        ], 200);
    }

    public function show($id)
    {
        $keuangan = KeuanganInfaq::find($id);

        if (!$keuangan) {
            return response()->json([
                'status' => 'error',
                'message' => 'Laporan tidak ditemukan.',
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $keuangan,
        ], 200);
    }
}
