<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Chat;
use Auth;
class FCMController extends Controller
{

     public function index(Request $req){

       return $input = $req->all();
        $fcm_token = $input['fcm_token'];
        $user_id = $input['user_id'];


         $user = User::findOrFail($user_id);

        $user->fcm_token = $fcm_token;
        $user->save();

        return response()->json([
            'success'=>true,
            'message'=>'User token updated successfully.'
        ]);
     }



     public function createChat(Request $request){

        $input = $request->all();
            $message = $input['message'];
            $chat = new Chat([
                'sender_id' => auth()->user()->id,
                'sender_name' => auth()->user()->name,
                'message' => $message
            ]);

            $this->broadcastMessage(auth()->user()->name,$message);

            $chat->save();
            return redirect()->back();

        }



     private function broadcastMessage($senderName, $message){
            $optionBuilder = new OptionsBuilder();
            $optionBuilder->setTimeToLive(60 * 20);

            $notificationBuilder = new PayloadNotificationBuilder('New message from : ' . $senderName);
            $notificationBuilder->setBody($message)
                ->setSound('default');
                // ->setClickAction('http://localhost:8000/home');

            $dataBuilder = new PayloadDataBuilder();
            $dataBuilder->addData([
                'sender_name' => $senderName,
                'mesage' => $message
            ]);

            $option = $optionBuilder->build();
            $notification = $notificationBuilder->build();
            $data = $dataBuilder->build();

            $tokens = User::all()->pluck('fcm_token')->toArray();

            $downstreamResponse = FCM::sendTo($tokens, $option, $notification, $data);

            return $downstreamResponse->numberSuccess();

        }
}
