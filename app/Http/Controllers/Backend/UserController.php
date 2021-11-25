<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public function index()
    {

        $users= User::latest()->get();

       return response()->json($users, 200);
    }


    public function update(Request $request, $id)
    {
    //    return $request;
        $user = User::find($id);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
        ]);

        return response()->json(['success' => 'User Updated'], 200);
    }


    public function destroy($id)
    {
        $User = User::find($id);

        $User->delete();


        return response()->json('success', 200);

    }

}
