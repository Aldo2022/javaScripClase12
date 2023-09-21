//Referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")

    formGuardar.addEventListener('submit',async(e)=>{
        e.preventDefault();//Evita que se recargue la pagina cuando se envia el formulario

    //Se capturan los datos del formulario
        const titulo = document.querySelector('#titulo-post').value;
        const descripcion = document.querySelector('#descripcion-post').value;

    //Enviar al servidor los datos
        const response = await fetch('nueva-publicacion',{
            method: 'post', // Método HTTP utilizado para la solicitud (en este caso, POST).
            headers: {'Content-Type':'application/json'},// Cabeceras de la solicitud que indican que se envía un JSON.
            body: JSON.stringify({titulo,descripcion})
    // Convierte los datos en formato JSON y los envía como cuerpo de la solicitud.
        }) 

        const data = await response.json();// Espera a que la respuesta del servidor se convierta en JSON.

        alert(data.msg);
        console.log(titulo);
        console.log(descripcion);
    })