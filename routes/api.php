<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\backend\UserController;
use App\Http\Controllers\backend\CategoryController;

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


// User Route-Controller
Route::middleware('auth:sanctum')->group(function () {


    //------------------------------- User  Logout --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('logout',[AuthController::class,'logout']);


    //------------------------------- User  Crud --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('users',[UserController::class,'index']);
    Route::post('user/update/{id}',[CategoryController::class,'update']);
    Route::post('user/delete/{id}',[CategoryController::class,'destroystore']);


    //------------------------------- Category  Crud --------------------------\\
    //------------------------------------------------------------------\\
    Route::get('category',[CategoryController::class,'index']);
    Route::post('category/create',[CategoryController::class,'store']);
    Route::post('category/update/{id}',[CategoryController::class,'update']);
    Route::post('category/delete/{id}',[CategoryController::class,'destroy']);


});


    //------------------------------- Auth  Route --------------------------\\
    //------------------------------------------------------------------\\
    Route::post('register',[AuthController::class,'register']);
    Route::post('login',[AuthController::class,'login']);



