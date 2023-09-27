    //Referencia al elemento de formulario html
    const formEditar = document.querySelector("#form-editar")//querySelector captura un nodo html  ("#form-guardar")

    //Se obtiene la Publicacion para Editarlo
    const obtenerPublicacion = async(id) => {//declaro la funcion con el parametro id
        const response = await fetch(`/api/publicacion/${id}`);//se realiza la solicitud y se guarda en la variable
        const data = await response.json();//se guarda en formato json
        return data;
    }
    
    //Se obtiene el id de la publicacion a editar
    const id = formEditar.dataset.id

    // Cuando se carga el contenido del html y recursos estáticos, se solicita la publicación y se muestran en el formulario
    document.addEventListener('DOMContentLoaded', async () => {
        
        //Se obtiene la publicacion
        const publicacion = await obtenerPublicacion(id)
        
        //Referencia a los elementos del formulario
        const titulo = document.querySelector('#titulo-post')
        const descripcion = document.querySelector('#descripcion-post')
        const fecha = document.querySelector('#fecha')
        const autor = document.querySelector('#autor')
        const url_imagen = document.querySelector('#url-img')
        const imgPreview = document.querySelector('#img-preview')

        // Los Valores obtenidos se asignan a los campos del formulario
        titulo.value = publicacion.titulo;
        descripcion.value = publicacion.descripcion;
        fecha.value = new Date(publicacion.fecha).toISOString().split('T')[0];/* */   autor.value = publicacion.autor;
        url_imagen.value = publicacion.url_imagen;
        imgPreview.src = publicacion.url_imagen;

    })

    //Evento para guardar los cambios
    formEditar.addEventListener('submit',async (e) => {
        e.preventDefault();//Evita que se recargue la pagina cuando se envia el formulario

        //Se capturan los datos del formulario
        const titulo = document.querySelector('#titulo-post').value;
        const descripcion = document.querySelector('#descripcion-post').value;
        const fecha = document.querySelector('#fecha').value;
        const autor = document.querySelector('#autor').value;
        const url_imagen = document.querySelector('#url-img').value;
        

        //Enviar al servidor los datos
        const response = await fetch(`/api/publicacion/${id}`,{
            method: 'put', // Método HTTP utilizado para la solicitud (en este caso, POST).
            headers: {'Content-Type':'application/json'},// Cabeceras de la solicitud que indican que se envía un JSON.
            body: JSON.stringify({titulo,descripcion,fecha,autor,url_imagen})// llegan los datos en formato js y se Convierte los datos en formato JSON y los envía como cuerpo de la solicitud.
        }) 

        const data = await response.json();//Cuando el fetch devuelve una respuesta, entonces los datos json pasan a datos de js

        alert(data.msg);//luego mostramos lo q devuelve
        location.href = "/"//Te manda al menu principal
    })