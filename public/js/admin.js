//Referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")//querySelector captura un nodo html  ("#form-guardar")

    formGuardar.addEventListener('submit',async(e)=>{
        e.preventDefault();//Evita que se recargue la pagina cuando se envia el formulario

    //Se capturan los datos del formulario
        const titulo = document.querySelector('#titulo-post').value;
        const descripcion = document.querySelector('#descripcion-post').value;
        const fecha = document.querySelector('#fecha').value;
        const autor = document.querySelector('#autor').value;
        const url_imagen = document.querySelector('#url-img').value;
        

    //Enviar al servidor los datos
        const response = await fetch('publicacion',{
            method: 'post', // Método HTTP utilizado para la solicitud (en este caso, POST).
            headers: {'Content-Type':'application/json'},// Cabeceras de la solicitud que indican que se envía un JSON.
            body: JSON.stringify({titulo,descripcion,fecha,autor,url_imagen})// llegan los datos en formato js y se Convierte los datos en formato JSON y los envía como cuerpo de la solicitud.
        }) 

        const data = await response.json();//Cuando el fetch devuelve una respuesta, entonces los datos json pasan a datos de js

        alert(data.msg);//luego mostramos lo q devuelve
       location.href = "/"//Te manda al menu principal
    })