<?php

namespace App\Http\Controllers\Api;

use App\Models\Hero;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHeroRequest;
use App\Http\Requests\UpdateHeroRequest;
use App\Http\Resources\HeroResource;

class HeroController extends Controller
{
    public function index()
    {
        return HeroResource::collection(Hero::all()->sortByDesc('id'));
    }

    public function store(StoreHeroRequest $request)
    {
        $data = $request->validated();
        $hero = Hero::create($data);
        return response(new HeroResource($hero), 201);
    }

    public function show(Hero $hero)
    {
        return new HeroResource($hero);
    }

    public function update(UpdateHeroRequest $request, Hero $hero)
    {
        $data = $request->validated();
        $hero->update($data);
        return new HeroResource($hero);
    }

    public function destroy(Hero $hero)
    {
        $hero->delete();
        return response("", 204);
    }
}
