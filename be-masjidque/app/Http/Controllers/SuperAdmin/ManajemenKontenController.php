<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\KegiatanMasjid;
use Illuminate\Http\Request;

class ManajemenKontenController extends Controller
{
    public function index()
    {
        $konten = KegiatanMasjid::whereIn('status_laporan', ['diajukan'])
        ->orderBy('created_at', 'desc')
        ->get();

    return response()->json([
        'success' => true,
        'data' => $konten
        ]);
    }

    public function setujui($id)
    {
        $konten = KegiatanMasjid::findOrFail($id);
        $konten->status_laporan = 'disetujui';
        $konten->save();

        return redirect()->back()->with('success', 'Konten berhasil disetujui.');
    }

    public function tolak($id)
    {
        $konten = KegiatanMasjid::findOrFail($id);
        $konten->status_laporan = 'ditolak';
        $konten->save();

        return redirect()->back()->with('success', 'Konten berhasil ditolak.');
    }

    public function tinjau($id)
    {
        $konten = KegiatanMasjid::findOrFail($id);
        $konten->status_laporan = 'ditinjau';
        $konten->save();

        return redirect()->back()->with('success', 'Konten berhasil ditandai untuk ditinjau.');
    }
}
