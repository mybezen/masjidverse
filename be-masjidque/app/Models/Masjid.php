<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Masjid extends Authenticatable
{
    protected $table = 'masjid';

    protected $fillable = [
        'nama',
        'alamat',
        'no_telepon',
        'website',
        'email',
        'alamat_map',
        'foto',
        'logo',
        'password',
        'no_rekening',
        'status',
    ];

    public function kegiatanMasjid(): HasMany
    {
        return $this->hasMany(KegiatanMasjid::class);
    }

    public function asetMasjid(): HasMany
    {
        return $this->hasMany(AsetMasjid::class);
    }

    public function KeuanganInfaq(): HasMany
    {
        return $this->hasMany(KeuanganInfaq::class);
    }
}
