<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArchivesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('archives', function (Blueprint $table) {
            // $table->id();
            $table->string('video_id')->primary(); //->comment('video_id');
            $table->string('title');
            $table->string('thumbnail_url');
            $table->datetime('published_on');
            $table->unsignedInteger('view_count');
            $table->unsignedInteger('like_count');
            $table->unsignedInteger('comment_count');
            $table->time('duration');
            $table->string('privacy_status');
            $table->string('embed_html');
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
        Schema::dropIfExists('archives');
    }
}
