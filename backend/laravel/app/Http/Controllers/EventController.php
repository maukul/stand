<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Token;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{

    public function __construct(Request $request)
    {
        $appName = $request->query('appName');
        $token = $request->query('token');
        
        $token = Token::where('name', $appName)->where('token', $token)->first();

        if (!$token) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }

    protected function validateRequest(Request $request)
    {
        return Validator::make($request->all(), [
            'date' => 'required|date',
            'hour' => 'required|integer|max:23',
            'userFirst' => 'required',
            'userSecond' => 'required',
        ]);
    }

    public function index(Request $request)
    {
        $startDate = $request->query('startDate');
        $endDate = $request->query('endDate');

        $events = Event::select('*');

        if ($startDate) {
            $events = $events->where('date', '>=', $startDate);
        }

        if ($endDate) {
            $events = $events->where('date', '<=', $endDate);
        }

        $events = $events->get();
        return response()->json($events);
    }

    public function store(Request $request)
    {
        $validator = $this->validateRequest($request);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $validated = $validator->validated();

        $event = Event::create([
            'date' => $validated['date'],
            'hour' => $validated['hour'],
            'users' => [
                'first' => $validated['userFirst'],
                'second' => $validated['userSecond'],
            ],
        ]);

        return response()->json($event, 201);
    }

    public function show(Event $event)
    {
        return $event;
    }

    public function update(Request $request, Event $event)
    {
        $validator = $this->validateRequest($request);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $validated = $validator->validated();

        $event->update([
            'date' => $validated['date'],
            'hour' => $validated['hour'],
            'users' => [
                'first' => $validated['userFirst'],
                'second' => $validated['userSecond'],
            ],
        ]);

        return response()->json($event);
    }

    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json(null, 204);
    }
}
