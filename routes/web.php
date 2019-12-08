<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/','PagesController@welcome');

Auth::routes();

Route::get('/home', 'PagesController@home')->middleware('auth');
Route::get('/profile','ProfileController@index');
Route::get('/profile/edit','ProfileController@edit');
Route::post('/profile/edit','ProfileController@update');

