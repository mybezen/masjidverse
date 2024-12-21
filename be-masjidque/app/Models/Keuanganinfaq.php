<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KeuanganInfaq extends Model
{
    protected $table = 'keuangan_infaq';

    protected $fillable = [
        'tanggal',
        'keterangan',
        'jumlah',
        'jenis_transaksi',
        'status_transaksi',
        'masjid_id',
        'bukti_transfer'
    ];

    public function masjid(): BelongsTo
    {
        return $this->belongsTo(Masjid::class);
    }
}
