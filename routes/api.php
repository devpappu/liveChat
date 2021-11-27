<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\backend\UserController;
use App\Http\Controllers\backend\CategoryController;
use App\Http\Controllers\backend\FCMController;
use App\Http\Controllers\backend\ChatController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//------------------------------- User  Data --------------------------\\
    //------------------------------------------------------------------\\
Route::middleware('auth:sanctum')->get('user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->group(function () {


    Route::get('/chats',[ChatController::class,'index']);
    Route::get('/messages', [ChatController::class,'fetchAllMessages']);
    Route::post('/messages', [ChatController::class,'sendMessage']);

    //------------------------------- User  Logout --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('logout',[AuthController::class,'logout']);
    Route::get('profile',[AuthController::class,'profile']);


    //------------------------------- Live Chating --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('save-token',[FCMController::class,'index']);



});


    //------------------------------- Auth  Route --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('register',[AuthController::class,'register']);
    Route::post('login',[AuthController::class,'login']);





 //------------------------------- User  Crud --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('users',[UserController::class,'index']);
    Route::post('user/update/{id}',[UserController::class,'update']);
    Route::post('user/delete/{id}',[UserController::class,'destroy']);


    //------------------------------- Category  Crud --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('category',[CategoryController::class,'index']);
    Route::post('category/create',[CategoryController::class,'store']);
    Route::post('category/update/{id}',[CategoryController::class,'update']);
    Route::post('category/delete/{id}',[CategoryController::class,'destroy']);