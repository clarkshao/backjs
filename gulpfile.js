/**
 * Created by clark on 16/1/19.
 */
var gulp = require("gulp");
var browsersync = require('browser-sync');
var babel = require("gulp-babel");
//var reload = browsersync.reload;


gulp.task("transform", function () {
    return gulp.src("modules/*/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
        //.pipe(reload({stream: true}));
});

gulp.task('serve', ['transform'], function() {
    browsersync({
        server: {
            baseDir: './'
        },
        port: 9494,
        files: [
            'dist/*/*.js'
        ]
    });

    gulp.watch("modules/*/*.js", ['transform']);
});

gulp.task('default', ['serve'], function() {
});