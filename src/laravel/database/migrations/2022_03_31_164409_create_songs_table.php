<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->string('video_id');
            $table->foreign('video_id')->references('video_id')->on('archives')->onUpdate('CASCADE')->onDelete('RESTRICT');
            // $table->foreignId('video_id')->constrained('archives')->onUpdate('cascade')->onDelete('restrict');
            $table->unsignedInteger('track_no');
            $table->string('song_title');
            $table->string('song_title_for_sort');
            $table->string('artist');
            $table->string('artist_for_sort');
            $table->unsignedInteger('start_time');
            $table->unsignedInteger('end_time');
            $table->unsignedTinyInteger('is_stream');
            $table->unsignedTinyInteger('is_full');
            $table->timestamps();
            $table->engine = 'InnoDB';
            $table->charset = 'utf8mb4';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $table->dropForeign('songs_video_id_foreign');
        Schema::dropIfExists('songs');
    }
}
