CREATE TABLE `songs_tsukushiaria` (
    `song_id` INT NOT NULL PRIMARY KEY COMMENT "ID",
    `video_id` VARCHAR(20) NOT NULL COMMENT "Video_ID",
    `track_no` INT NOT NULL COMMENT "Track No.",
    `song_title` VARCHAR(200) NOT NULL COMMENT "Song Title",
    `song_title_for_sort` VARCHAR(200) NOT NULL COMMENT "Song Title for Sort",
    `artist` VARCHAR(200) NOT NULL COMMENT "Artist",
    `artist_for_sort` VARCHAR(200) NOT NULL COMMENT "Artist for Sort",
    `start_time` INT NOT NULL COMMENT "Start Time",
    `end_time` INT NOT NULL COMMENT "END TIME",
    `is_full` BOOLEAN NOT NULL COMMENT "is Full"
) ENGINE=InnoDB DEFAULT CHARSET=utf8;