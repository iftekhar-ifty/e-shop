<?php

use App\Http\Controllers\Frontend\HomePageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomePageController::class,'index']);

// Route::get('/d', [HomePageController::class,'index']);
