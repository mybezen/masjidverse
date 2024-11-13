<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
