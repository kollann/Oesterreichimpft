<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(){
        // if defined route "login" is
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(){
        $credentials = request(['email', 'password']);
        // try to login user with email and password --> Laravel standard config
        if(!$token = auth()->attempt($credentials)){
            // login fails
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);

    }

    public function logout(){
        auth()->logout();
        return response()->json(['message' => 'logged out!']);
    }

    public function refresh(){
        // jwt has expiration date, to extend --> refresh
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken(string $token){
        return response()->json([
           'access_token' => $token,
            'token_type' => 'bearer',
            // time to leaf (TTL) is in seconds -> * 60 = minutes
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

}
