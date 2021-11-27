<?php

namespace App\Models;
use App\Events\ChatCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $guarded = [];

    // protected $dispatchesEvents = [

    //     'created' => ChatCreated::class,

    // ];

    public function user(){

        return $this->belongsTo(User::class);

    }


}
