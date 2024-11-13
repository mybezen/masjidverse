<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KegiatanMasjid extends Model
{
    protected $table = 'kegiatan_masjid';

    protected $fillable = [
        'tanggal',
        'nama_kegiatan',
        'foto',
        'deskripsi',
        'lokasi',
        'masjid_id'
    ];

    public function Masjid(): BelongsTo
    {
        return $this->belongsTo(Masjid::class);
    }
}
