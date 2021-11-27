<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
// use App\Models\Chat;
use App\Models\Message;
use App\Events\ChatEvent;
use App\Events\MessageSent;
Use Auth;
class ChatController extends Controller
{

    public function fetchAllMessages(){
    	return Message::with('user')->get();
    }

    public function sendMessage(Request $request)
    {
        // $user =  auth()->user();
        // $message = $request->message;

    	// $chat = auth()->user()->messages()->create([
        //     'message' => $request->message
        // ]);

        $message = auth()->user()->messages()->create([
            'message' => $request->message
        ]);

        broadcast(new MessageSent($message->load('user')))->toOthers();

    	return ['status' => 'success'];
    }
}
