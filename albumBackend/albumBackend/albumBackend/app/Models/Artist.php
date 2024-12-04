<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
 
    protected $fillable =[
        'id',
        'name',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function albums()
    {
        return $this->hasMany(Album::class);
    }
}
