<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Masjid;
use Illuminate\Http\Request;

class DashboardStatistikController extends Controller
{
    public function index()
    {
        $jumlahMasjidTerdaftar = Masjid::where('status', 'diterima')->count();

        $dataMasjid = Masjid::select('id', 'nama as nama_masjid', 'email', 'password', 'no_telepon')
            ->orderBy('id', 'asc')
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'jumlahMasjidTerdaftar' => $jumlahMasjidTerdaftar,
                'dataMasjid' => $dataMasjid,
            ],
        ]);
    }
}


