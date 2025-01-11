<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardKeamananController extends Controller // Fitur apa aja? backup data jadi ga?
{
    public function index()
    {
        // Dummy
        $logAktivitas = [
            [
                'id' => 1,
                'aktivitas' => 'Login berhasil',
                'pengguna' => 'Super Admin',
                'waktu' => '2025-01-12 10:00:00',
            ],
            [
                'id' => 2,
                'aktivitas' => 'Gagal login - password salah',
                'pengguna' => 'Admin Masjid',
                'waktu' => '2025-01-12 09:45:00',
            ],
        ];

        return response()->json([
            'status' => 'success',
            'data' => [
                'logAktivitas' => $logAktivitas,
            ],
        ]);
    }
}
