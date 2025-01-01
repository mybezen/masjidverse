<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KegiatanMasjid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;

class KegiatanController extends Controller
{
    public function index()
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $kegiatan = KegiatanMasjid::where('masjid_id', $idMasjid)->get();

        if ($kegiatan->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak ada kegiatan masjid.'
            ]);
        }

        return response()->json([
            'success' => true,
            'kegiatan' => $kegiatan
        ]);
    }

    public function show($id)
    {
        $kegiatan = KegiatanMasjid::find($id);

        if (!$kegiatan) {
            return response()->json([
                'success' => false,
                'message' => 'Kegiatan masjid tidak ditemukan.'
            ]);
        }

        return response()->json([
            'success' => true,
            'kegiatan' => $kegiatan
        ]);
    }

    public function store(Request $request)
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $validator = Validator::make($request->all(), [
            'nama_masjid' => 'required',
            'nama_kegiatan' => 'required',
            'penceramah' => 'required',
            'deskripsi' => 'required',
            'tanggal' => 'required|date|after_or_equal:' . now(),
            'waktu' => 'required',
            'lokasi' => 'required',
            'foto' => 'required'
        ]);

        // TODO: file

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $kegiatan = KegiatanMasjid::create([
            'tanggal' => $request->input('tanggal'),
            'waktu' => $request->input('waktu'),
            'nama_masjid' => $request->input('nama_masjid'),
            'nama_kegiatan' => $request->input('nama_kegiatan'),
            'foto' => $request->input('foto'),
            'deskripsi' => $request->input('deskripsi'),
            'lokasi' => $request->input('lokasi'),
            'penceramah' => $request->input('penceramah'),
            'masjid_id' => $idMasjid
        ]);

        if (!$kegiatan) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal membuat kegiatan baru.'
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Berhasil membuat kegiatan baru.',
        ]);
    }

    // ? Butuh method edit?
    // public function edit($id)
    // {
    //     $kegiatan = KegiatanMasjid::find($id);

    //     if (!$kegiatan) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Kegiatan masjid tidak ditemukan.'
    //         ]);
    //     }

    //     return response()->json([
    //         'success' => true,
    //         'kegiatan' => $kegiatan
    //     ]);
    // }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_masjid' => 'required',
            'nama_kegiatan' => 'required',
            'penceramah' => 'required',
            'deskripsi' => 'required',
            'tanggal' => 'required|date|after_or_equal:' . now(),
            'waktu' => 'required',
            'lokasi' => 'required',
            'foto' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $kegiatan = KegiatanMasjid::find($id);

        $kegiatan->update([
            'tanggal' => $request->input('tanggal'),
            'waktu' => $request->input('waktu'),
            'nama_masjid' => $request->input('nama_masjid'),
            'nama_kegiatan' => $request->input('nama_kegiatan'),
            'foto' => $request->input('foto'),
            'deskripsi' => $request->input('deskripsi'),
            'lokasi' => $request->input('lokasi'),
            'penceramah' => $request->input('penceramah'),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil mengubah data kegiatan.'
        ]);
    }

    public function destroy($id)
    {
        $kegiatan = KegiatanMasjid::find($id);

        if (!$kegiatan) {
            return response()->json([
                'success' => false,
                'message' => 'Kegiatan masjid tidak ditemukan.'
            ]);
        }

        $kegiatan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Kegiatan masjid berhasil dihapus.'
        ]);
    }
}
