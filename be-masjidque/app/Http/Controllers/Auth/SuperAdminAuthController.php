<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class SuperAdminAuthController extends Controller
{

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validasi gagal.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $credentials = $request->only('email', 'password');

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Kredensial tidak valid.',
            ], 401);
        }

        $user = Auth::user();
        if ($user->role !== 'superadmin') {
            return response()->json([
                'status' => 'error',
                'message' => 'Akses ditolak. Hanya SuperAdmin yang bisa login.',
            ], 403);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Login berhasil.',
            'data' => [
                'user' => $user,
                'token' => $token,
            ],
        ], 200);
    }

    public function logout()
    {
        try {
            Auth::logout();

            return response()->json([
                'status' => 'success',
                'message' => 'Berhasil Logout.',
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal logout, silahkan coba lagi.',
            ], 500);
        }
    }
}
