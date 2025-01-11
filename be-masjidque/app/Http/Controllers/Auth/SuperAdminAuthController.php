<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class SuperAdminAuthController extends Controller
{
    /**
     * Login SuperAdmin
     */
    public function login(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validasi gagal',
                'errors' => $validator->errors(),
            ], 422);
        }

        // Ambil kredensial
        $credentials = $request->only('email', 'password');

        try {
            // Verifikasi kredensial dengan JWT
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Kredensial tidak valid',
                ], 401);
            }

            // Pastikan hanya role "superadmin" yang dapat login
            $user = Auth::user();
            if ($user->role !== 'superadmin') {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Akses ditolak. Hanya SuperAdmin yang bisa login.',
                ], 403);
            }

            // Berikan token jika login berhasil
            return response()->json([
                'status' => 'success',
                'message' => 'Login berhasil',
                'data' => [
                    'user' => $user,
                    'token' => $token,
                ],
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Tidak bisa membuat Token',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Logout SuperAdmin
     */
    public function logout()
    {
        try {
            // Hapus token
            Auth::logout();

            return response()->json([
                'status' => 'success',
                'message' => 'Berhasil Logout',
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal untuk Logout',
                'error' => $e->getMessage(),
            ], 500);
        }
    }}
