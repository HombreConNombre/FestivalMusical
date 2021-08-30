const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarCSS(fin) {
    return src("./scss/app.scss")
        .pipe(sass())
        .pipe(dest("./build/css"));
    fin();
}

function observadorArchivos(fin) {
    watch("scss/*.scss", compilarCSS);
    fin()
}

exports.compilarCSS = compilarCSS;
exports.observadorArchivos = observadorArchivos;
// Series determina el orden que se va a llevar a cabo. Parallel las ejecuta todas a la vez(hace falta importarlo de Gulp)
//exports.cola = series(compilarCSS);