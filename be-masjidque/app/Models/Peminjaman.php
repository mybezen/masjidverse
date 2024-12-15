<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Peminjaman extends Model
{
    protected $table = 'peminjaman';

    protected $fillable = [
        'nama',
        'no_telepon',
        'jumlah',
        'tanggal_peminjaman',
        'tanggal_pengembalian',
        'aset_id'
    ];

    public function asetMasjid(): BelongsTo
    {
        return $this->belongsTo(AsetMasjid::class);
    }
}
