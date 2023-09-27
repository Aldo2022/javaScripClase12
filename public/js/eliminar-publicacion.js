// Referencia al elemento de formulario HTML
const formEliminar = document.querySelector("#form-eliminar");

// Se obtiene el id de la publicación a eliminar
const id = formEliminar.dataset.id;

// Evento para eliminar la publicación
formEliminar.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que se recargue la página cuando se envía el formulario

    // Confirmar si el usuario realmente quiere eliminar la publicación
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta publicación?");
    
    if (confirmacion) {
        // Enviar al servidor la solicitud de eliminación
        const response = await fetch(`/api/publicacion/${id}`, {
            method: 'DELETE', // Método HTTP utilizado para la solicitud (en este caso, DELETE).
        });

        if (response.ok) {
            // La eliminación fue exitosa
            alert("La publicación ha sido eliminada exitosamente.");
            location.href = "/"; // Redirigir al menú principal u otra página deseada
        } else {
            // Ocurrió un error durante la eliminación
            alert("Error al eliminar la publicación.");
        }
    } else {
        // El usuario canceló la eliminación
        alert("La eliminación ha sido cancelada.");
        location.href = "/admin/publicaciones"; // Redirigir al menú principal u otra página deseada
    }
});
