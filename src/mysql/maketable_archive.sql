CREATE TABLE `archives_tsukushiaria` (
    `video_id` VARCHAR(20) NOT NULL PRIMARY KEY COMMENT "Video_ID",
    `title` VARCHAR(200) NOT NULL COMMENT "Title",
    `thumbnail_url` VARCHAR(200) NOT NULL COMMENT "Thumbnail_URL",
    `published_on` DATETIME NOT NULL COMMENT "Published_On",
    `view_count` INT UNSIGNED NOT NULL COMMENT "Views",
    `like_count` INT NOT NULL COMMENT "Likes",
    `comment_count` INT NOT NULL COMMENT "Comments",
    `duration` TIME NOT NULL COMMENT "Duration",
    `privacy_status` VARCHAR(20) NOT NULL COMMENT "Status",
    `embed_html` VARCHAR(200) NOT NULL COMMENT "Embed_HTML",
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT "Created At",
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT "Updated At"
) ENGINE=InnoDB DEFAULT CHARSET=utf8;