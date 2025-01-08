<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckMasjidAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!Auth::guard('masjid')->check()) {
            return response()->json([
                'success' => false,
                'message' => 'Maaf anda tidak memiliki izin untuk mengakses halaman ini',
            ]);
        }

        return $next($request);
    }
}
