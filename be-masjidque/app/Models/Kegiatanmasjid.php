<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KegiatanMasjid extends Model
{
    protected $table = 'kegiatan_masjid';

    public function Masjid(): BelongsTo
    {
        return $this->belongsTo(Masjid::class);
    }
}
