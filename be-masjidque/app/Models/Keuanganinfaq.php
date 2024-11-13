<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KeuanganInfaq extends Model
{
    protected $table = 'keuangan_infaq';

    public function Masjid(): BelongsTo
    {
        return $this->belongsTo(Masjid::class);
    }
}
