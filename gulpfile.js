const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//const imagein = require('gulp-imagein');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'scss/**/*.scss',
    js: 'JS/**/*.js'
}

function compilarCSS() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest("./build/css"));
}
// Función para GULP que autocomprime las imágenes. No funciona por directrices ES.
//function imagenes() {
//    return src('src/img/**/*')
//        .pipe(imagein())
//        .pipe(dest('./build/img'));
//}

function observadorArchivos() {
    watch(paths.scss, compilarCSS)
    watch(paths.js, javaScript)
}

function javaScript() {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
}

exports.compilarCSS = compilarCSS;
/**
 * exports.imagenes = imagenes;
 */
exports.versionWebp = versionWebp;
exports.observadorArchivos = observadorArchivos;
exports.javaScript = javaScript;
exports.default = series(compilarCSS, javaScript, versionWebp, observadorArchivos);

// Series determina el orden que se va a llevar a cabo. Parallel las ejecuta todas a la vez(hace falta importarlo de Gulp)
//exports.cola = series(compilarCSS);