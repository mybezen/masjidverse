<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserAuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = auth()->guard('user')->attempt($credentials)) {
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
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }

        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password'))
        ]);

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mendaftarkan akun baru.'
            ], 409);
        }

        return response()->json([
            'success' => true,
            'message' => 'Berhasil mendaftarkan akun baru.',
            'user' => $user
        ], 201);
    }

    public function logout()
    {
        try {
            JWTAuth::logout();

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
