<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $fillable = [
        'id',
        'title',
        'artist_id',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }
}
