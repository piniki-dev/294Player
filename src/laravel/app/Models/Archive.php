<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Archive extends Model
{
    // use HasFactory;
    protected $primaryKey = 'video_id';
    public $incrementing = false;
    protected $keyType = 'string';
}
