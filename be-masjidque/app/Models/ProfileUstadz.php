<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProfileUstadz extends Model
{
    protected $table = 'profile_ustadz';

    protected $fillable = [
        'nama',
        'alamat',
        'no_telepon',
        'foto',
        'status_pendidikan'
    ];

    public function Masjid(): BelongsTo
    {
        return $this->belongsTo(Masjid::class);
    }
}
