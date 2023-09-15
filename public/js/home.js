

//Referencia al elemento de formulario html
const formGuardar = document.querySelector("#btn-guardar")

formGuardar.addEventListener('submit',async(e)=>{
    e.preventDefault();
//Se capturan los datos del formulario
    const inputTitulo = document.querySelector('#titulo-post').Value;
    const inputDetalle = document.querySelector('#detalle-post').Value;

//Enviar al servidor los datos
const rsponse = await fetch('nueva-publicacion',{
    method: 'post',
    headers: {'Content-Type':"application/json"},
    body: JSON.stringify({

        titulo: inputTitulo,
        detalle: inputDetalle
    })
})    
const data = await response.json();   


    console.log(inputTitulo);
    console.log(inputDetalle);
})