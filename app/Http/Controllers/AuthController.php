<?php

namespace App\Http\Controllers;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Hash;
use Auth;
use App\Models\User;
class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name'                  => ['required'],
            'email'                 => ['required', 'email', 'unique:users'],
            'password'              => ['required', 'min:6', 'confirmed'],
            'password_confirmation' => ['required'],
        ]);

        $user = User::create([
            'name'          => $request->name,
            'email'         => $request->email,
            'password'      => Hash::make($request->password),
        ]);


        return response()->json(['msg' => 'Registered Successfully']);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function check_token(Request $request){

        return Auth()->user();
    }

    public function logout(Request $request)
    {
        // Get user who requested the logout
        $user = Auth()->user();
        // Revoke current user token
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        return response()->json(['msg' => 'Logout Successfull']);
    }

}
