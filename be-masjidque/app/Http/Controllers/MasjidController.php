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

    public function searchKegiatan(Request $request): JsonResponse
    {
        $kegiatan = [];

        if ($request->has('keyword')) {
            $query = $request->keyword;
            $kegiatan = KegiatanMasjid::where('nama_kegiatan', 'like', '%' . $query . '%')->paginate(10);
        }

        return response()->json([
            'success' => true,
            'kegiatan' => $kegiatan,
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

    public function searchMasjid(Request $request): JsonResponse
    {
        $masjid = [];

        if ($request->has('keyword')) {
            $query = $request->keyword;
            $masjid = Masjid::where('nama', 'like', '%' . $query . '%')->paginate(10);
        }

        return response()->json([
            'success' => true,
            'masjid' => $masjid
        ]);
    }
}
