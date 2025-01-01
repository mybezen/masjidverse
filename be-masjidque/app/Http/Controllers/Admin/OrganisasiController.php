<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\StrukturOrganisasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OrganisasiController extends Controller
{
    public function index()
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $organisasi = StrukturOrganisasi::where('masjid_id', $idMasjid)->get();

        if ($organisasi->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak ada anggota organisasi masjid.'
            ]);
        }

        return response()->json([
            'success' => true,
            'organisasi' => $organisasi
        ]);
    }

    public function store(Request $request)
    {
        $akunMasjid = Auth::guard('masjid')->user();
        $idMasjid = $akunMasjid->id;

        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'jabatan' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $organisasi = StrukturOrganisasi::create([
            'nama' => $request->input('nama'),
            'jabatan' => $request->input('jabatan'),
            'masjid_id' => $idMasjid
        ]);

        if (!$organisasi) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal menambahkan anggota organisasi masjid baru.'
            ]);
        }
    }

    public function edit($id)
    {
        $organisasi = StrukturOrganisasi::find($id);

        if (!$organisasi) {
            return response()->json([
                'success' => false,
                'message' => 'Anggota organisasi masjid tidak ditemukan.'
            ]);
        }

        return response()->json([
            'success' => true,
            'organisasi' => $organisasi
        ]);
    }

    public function update($id, Request $request)
    {
        $organisasi = StrukturOrganisasi::find($id);

        if (!$organisasi) {
            return response()->json([
                'success' => false,
                'message' => 'Anggota organisasi masjid tidak ditemukan.'
            ]);
        }

        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'jabatan' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $organisasi->update([
            'nama' => $request->input('nama'),
            'jabatan' => $request->input('jabatan')
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Data anggota organisasi berhasil diubah.'
        ]);
    }

    public function destroy($id)
    {
        $organisasi = StrukturOrganisasi::find($id);

        if (!$organisasi) {
            return response()->json([
                'success' => false,
                'message' => 'Anggota organisasi masjid tidak ditemukan.'
            ]);
        }

        $organisasi->delete();

        return response()->json([
            'success' => true,
            'message' => 'Anggota organisasi masjid berhasil dihapus.'
        ]);
    }
}
