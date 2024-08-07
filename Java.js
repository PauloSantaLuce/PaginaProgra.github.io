const form = document.getElementById("myForm")
//llamamos a que formato editaremos
form.addEventListener("submit", function(event){
    event.preventDefault();
//Nombramos los 3 elementos, el espacio del nombre, del correo y del boton.
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === " "||email === "" ||message ===""){
        alert("Por favor completa todos los campos")
    }else{
        alert("Formulario enviado exitosamente");
        form.requestFullscreen();
    }
})
