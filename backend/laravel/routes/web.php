<?php

use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;

Route::apiResources([
    'events' => EventController::class,
]);