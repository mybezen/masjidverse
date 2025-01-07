<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KegiatanMasjid extends Model
{
    protected $table = 'kegiatan_masjid';

    protected $fillable = [
        'tanggal',
        'waktu',
        'nama_kegiatan',
        'foto',
        'deskripsi',
        'lokasi',
        'penceramah',
        'masjid_id',
        'status_laporan'
    ];

    public function masjid(): BelongsTo
    {
        return $this->belongsTo(Masjid::class);
    }
}
