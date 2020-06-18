"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
import browsersync from "browser-sync";

gulp.task("images", () => {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dist))
        .pipe(debug({
            "title": "Images"
        }))
        .on("end", browsersync.reload);
});