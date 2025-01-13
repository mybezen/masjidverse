<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AsetMasjid extends Model
{
    protected $table = 'aset_masjid';

    protected $fillable = [
        'nama_barang',
        'foto',
        'jumlah',
        'status_peminjaman',
        'masjid_id'
    ];

    public function masjid(): BelongsTo
    {
        return $this->belongsTo(Masjid::class);
    }
}
