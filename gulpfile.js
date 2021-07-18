const gulp = require("gulp");
const clean = require("gulp-clean");
const ts = require("gulp-typescript");
const nodemon = require('gulp-nodemon')

// Realiza ações automáticas de Build dos arquivos

const tsProject = ts.createProject("tsconfig.json");

gulp.task("scripts", ["static"], () => {
  const tsResult = tsProject.src().pipe(tsProject());

  return tsResult.js.pipe(gulp.dest("dist"));
});

gulp.task("static", ["clean"], () => {
  return gulp.src(["src/**/*.json"]).pipe(gulp.dest("dist"));
});

gulp.task("clean", () => {
  return gulp.src("dist/*").pipe(clean());
})

gulp.task("build", ["scripts"]);

// Verifica alterações de arquivos
gulp.task("watch", ["build"], () => {
  return gulp.watch(["src/**/*.ts", "src/**/*.json"], ["build"]);
})

gulp.task('default', ['watch'], () => {
  nodemon({
       script: 'dist/app',
       ext: 'js'
     }).on('restart', function(){
          return gulp.task('default', ['default']);
     });
 });