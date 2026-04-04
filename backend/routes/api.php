<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\BookController;

// creates the endpoints for marcos frontend
Route::apiResource('authors', AuthorController::class);
Route::apiResource('books', BookController::class);
