console.log("test")
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Aquí llamando al dom de cada input, tienes que validar el contenido de cada input. Te dejaré el ejemplo del primer input:
    var inputNombre = document.getElementById('inputNombre');
    if (inputNombre.value.trim() === "") {
        alert("Campo de nombre requerido"); // esta linea hará que aparezca un texto en pantalla para decir que el campo es requerido
        event.preventDefault(); // esta linea hace que NO se haga el envio del formulario, ya que existen campos incompletos.
        return; // esto hace que la función llegue hasta aquí y no continue su ejecución.
    }
    // acá deberías hacer algo parecido para todos los demas.
    var inputCorreo = document.getElementById('inputCorreo');
    if (inputCorreo.value.trim() === "") {
        alert("Campo de correo requerido");
        event.preventDefault();
        return;
    }
    console.log("Todos los campos validados están OK! continuando submit");
});

function validationName(element) {
    const input = element.value;
    if (input.length < 4)
        alert("Nombre muy corto");
    // aquí debes agregar alguna lógica para validar el name o algo realmente lo que quieras.
    }

function validationEmail(element) {
    const input = element.value;
    // aquí debes agregar alguna lógica para validar el email o algo realmente lo que quieras.
}