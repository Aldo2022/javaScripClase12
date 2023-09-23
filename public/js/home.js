const obtenerPublicaciones = async () => {  //
    const response = await fetch('publicaciones')  //Se realiza una consulta a una ruta y la repuesta lo guardo en formato JSON 
    const data = response.json(); // luego lo guardo a formato JS
    return data;//data retorna como una promesa
}

const mostrarPublicaciones = (publicaciones,elementoHtml)=>{

    let registros = "";

    //Recorremos el El Array publicaciones
    publicaciones.forEach(publicacion => {
        registros += `
            <section class="d-flex gap-2">
                <img src="${publicacion.url_imagen}" class="rounded" height=200 >
            <div  class="d-flex flex-column justify-content-between">
                <h5>${publicacion.titulo}</h5>
                <p>${publicacion.descripcion}</p>
                <p>${publicacion.fecha}</p>
                <p>${publicacion.autor}</p>
            </div>
            </section>
        `
    });
    //Se va a crear la lista
    elementoHtml.innerHTML = registros;
}


    document.addEventListener('DOMContentLoaded', async()=>{//Creamos un evento cuando se dispare el contenido de la pagina
        const publicaciones = await obtenerPublicaciones()
        console.log('publicaciones')

    //Modificamos el DOM para poder mostrar las publicaciones
        const main = document.querySelector('#lista-publicaciones')

        mostrarPublicaciones(publicaciones,main);

})