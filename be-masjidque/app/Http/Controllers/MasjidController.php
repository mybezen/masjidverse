<?php

namespace App\Http\Controllers;

use App\Models\KegiatanMasjid;
use App\Models\Masjid;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MasjidController extends Controller
{
    public function home(): JsonResponse
    {
        $kegiatan = KegiatanMasjid::orderBy('created_at', 'desc')->limit(5)->get();
        $masjid = Masjid::orderBy('created_at', 'desc')->limit(5)->get();

        return response()->json([
            'success' => true,
            'kegiatan' => $kegiatan,
            'masjid' => $masjid
        ]);
    }

    public function kegiatan(): JsonResponse
    {
        $kegiatan = KegiatanMasjid::orderBy('created_at', 'desc')->paginate(10);

        return response()->json([
            'success' => true,
            'kegiatan' => $kegiatan
        ]);
    }

    public function searchKegiatan($query): JsonResponse
    {
        $kegiatan = KegiatanMasjid::where('nama', 'like', '%' . $query . '%')->get();

        return response()->json([
            'success' => true,
            'kegiatan' => $kegiatan
        ]);
    }

    public function masjid(): JsonResponse
    {
        $masjid = Masjid::orderBy('created_at', 'desc')->paginate(10);

        return response()->json([
            'success' => true,
            'masjid' => $masjid
        ]);
    }

    public function searchMasjid($query): JsonResponse
    {
        $masjid = Masjid::where('nama', 'like', '%' . $query . '%')->get();

        return response()->json([
            'success' => true,
            'masjid' => $masjid
        ]);
    }
}
