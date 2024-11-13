<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AsetMasjid extends Model
{
    protected $table = 'aset_masjid';

    public function Masjid(): BelongsTo
    {
        return $this->belongsTo(Masjid::class);
    }
}
