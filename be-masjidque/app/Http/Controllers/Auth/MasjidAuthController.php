<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Masjid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class MasjidAuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = auth()->guard('masjid')->attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Email atau password yang dimasukkan salah.'
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Berhasil login.',
            'bearer_token' => $token,
        ]);
    }

    public function register(Request $request)
    {
        /**
         * ? NOTE: di front-end harus ada field dengan nama 'password' dan 'password_confirmation'.
         */
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'password' => 'required|string|min:8',
            'deskripsi' => 'required|string',
            'provinsi' => 'required|string|max:255',
            'kota' => 'required|string|max:255',
            'kecamatan' => 'required|string|max:255',
            'alamat' => 'required|string|max:500',
            'alamat_map' => 'nullable|string|max:500',
            'kode_pos' => 'required|string|max:10',
            'tahun_berdiri' => 'required|digits:4|integer|max:' . date('Y'),
            'luas_tanah' => 'required|numeric|min:0',
            'luas_bangunan' => 'required|numeric|min:0',
            'bank' => 'required|string|max:255',
            'no_rekening' => 'required|numeric|digits_between:10,20',
            'atas_nama' => 'required|string|max:255',
            'no_telepon' => 'required|numeric|digits_between:10,15',
            'email' => 'required|email|max:255|unique:users,email',
            'instagram' => 'nullable|string|max:255|url',
            'facebook' => 'nullable|string|max:255|url',
            'website' => 'nullable|string|max:255|url',
            'nama_yayasan' => 'required|string|max:255',
            'foto' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        // TODO: REQUEST FILE HANDLE ------------------------------------------------------------------------------------------------------------------
        // ? REQUEST FILE HANDLE
        $fotoPath = $request->file('foto')->store('uploads/foto', 'public');
        $logoPath = $request->file('logo')->store('uploads/logo', 'public');

        $masjid = Masjid::create([
            'nama' => $request->input('nama'),
            'password' => Hash::make($request->input('password')),
            'deskripsi' => $request->input('deskripsi'),
            'provinsi' => $request->input('provinsi'),
            'kota' => $request->input('kota'),
            'kecamatan' => $request->input('kecamatan'),
            'alamat' => $request->input('alamat'),
            'alamat_map' => $request->input('alamat_map'),
            'kode_pos' => $request->input('kode_pos'),
            'tahun_berdiri' => $request->input('tahun_berdiri'),
            'luas_tanah' => $request->input('luas_tanah'),
            'luas_bangunan' => $request->input('luas_bangunan'),
            'bank' => $request->input('bank'),
            'no_rekening' => $request->input('no_rekening'),
            'atas_nama' => $request->input('atas_nama'),
            'no_telepon' => $request->input('no_telepon'),
            'email' => $request->input('email'),
            'instagram' => $request->input('instagram'),
            'facebook' => $request->input('facebook'),
            'website' => $request->input('website'),
            'nama_yayasan' => $request->input('nama_yayasan'),
            'foto' => $fotoPath, // TODO: URL/Path foto
            'logo' => $logoPath, // TODO: URL/Path logo
        ]);

        if (!$masjid) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mendaftarkan akun baru.'
            ], 409);
        }

        return response()->json([
            'success' => true,
            'message' => 'Berhasil mendaftarkan akun baru.',
            'user' => $masjid
        ], 201);
    }

    public function logout()
    {
        try {
            auth('masjid')->logout();

            return response()->json([
                'success' => true,
                'message' => 'Berhasil logout.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal logout, silahkan coba lagi.'
            ], 500);
        }
    }
}
