<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StrukturOrganisasi extends Model
{
    protected $table = 'struktur_organisasi';

    protected $fillable = [
        'nama',
        'jabatan',
        'masjid_id'
    ];

    public function masjid(): BelongsTo
    {
        return $this->belongsTo(Masjid::class);
    }
}
