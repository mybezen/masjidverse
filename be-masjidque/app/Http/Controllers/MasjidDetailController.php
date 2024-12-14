<?php

namespace App\Http\Controllers;

use App\Models\Masjid;
use Illuminate\Http\Request;

class MasjidDetailController extends Controller
{
    public function index($id){
        $masjid = Masjid::find($id);
        return response()->json([
            'nama'=> $masjid->nama,
            'foto'=>$masjid->foto,
            'id'=>$masjid->id
        ]);
    }

    public function profile($id){
        $masjid = Masjid::find($id);
        return response()->json([
            'masjid'=>$masjid
        ]);
    }

    public function kegiatan($id){
        $masjid = Masjid::find($id);
        $kegiatan = $masjid->kegiatan;
        return response()->json([
            'kegiatan'=>$kegiatan
        ]);
    }

    public function keuangan($id){
        $masjid = Masjid::find($id);
        $keuangan = $masjid->keuangan;
        return response()->json([
            'keuangan'=>$keuangan
        ]);
    }
}
