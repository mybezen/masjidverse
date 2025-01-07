<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\Masjid;
use Illuminate\Http\Request;

class ManajemenPendaftaranController extends Controller
{
    public function index()
    {
        $pendaftaran = Masjid::where('status', 'diajukan')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $pendaftaran
        ]);
    }

    public function setujui($id)
    {

        $masjid = Masjid::findOrFail($id);
        $masjid->status = 'diterima';
        $masjid->save();

        return redirect()->back()->with('success', 'Pendaftaran berhasil disetujui, masjid telah diterima.');
    }

    public function tolak($id)
    {

        $masjid = Masjid::findOrFail($id);
        $masjid->status = 'ditolak';
        $masjid->save();

        return redirect()->back()->with('success', 'Pendaftaran berhasil ditolak.');
    }

    public function tinjau($id)
    {

        $masjid = Masjid::findOrFail($id);
        $masjid->status = 'ditinjau';
        $masjid->save();

        return redirect()->back()->with('success', 'Pendaftaran berhasil ditandai untuk ditinjau.');
    }

}
