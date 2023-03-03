<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Song;

class SongController extends Controller
{
    public function getAllSongs() {
        // $Songs = Song::get()->toJson(JSON_PRETTY_PRINT);
        // return response($Songs, 200);
        $songs = DB::table('songs')
                    ->join('archives', 'songs.video_id', '=', 'archives.video_id')
                    ->select('songs.*', 'archives.*')
                    ->distinct()
                    ->get();
        return response($songs, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $songs = DB::table('songs')
                    ->join('archives', 'songs.video_id', '=', 'archives.video_id')
                    ->select('songs.*', 'archives.*')
                    ->where('id', '=', $id)
                    ->distinct()
                    ->get();
        return response($songs, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
