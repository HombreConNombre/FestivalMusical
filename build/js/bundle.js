document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = 'src/img/thumb/' + i + '.webp';
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);

        imagen.classList.add('fotoConciertos');
        imagen.onclick = ampliarImagen;
        imagen.dataset.imagenID = i
    }
}

function ampliarImagen(e) {
    const id = parseInt(e.target.dataset.imagenID);
    const imagen = document.createElement('IMG');
    imagen.src = 'src/img/grande/' + id + '.webp';

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Boton para cerrar la imagen grande
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('botonCerrar');
    overlay.appendChild(cerrarImagen);

    //Mostrar en el HTML

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');


    cerrarImagen.onclick =
        function() {
            overlay.remove();
            body.classList.remove('fijar-body');
        }
}