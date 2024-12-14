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
        'password',
        'deskripsi',
        'provinsi',
        'kota',
        'kecamatan',
        'alamat',
        'alamat_map',
        'kode_pos',
        'tahun_berdiri',
        'luas_tanah',
        'luas_bangunan',
        'bank',
        'no_rekening',
        'atas_nama',
        'no_telepon',
        'email',
        'instagram',
        'facebook',
        'website',
        'nama_yayasan',
        'foto',
        'logo',
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

    public function keuanganInfaq(): HasMany
    {
        return $this->hasMany(KeuanganInfaq::class);
    }

    public function strukturOrganisasi(): HasMany
    {
        return $this->hasMany(strukturOrganisasi::class);
    }
}
