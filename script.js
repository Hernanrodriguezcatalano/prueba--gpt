// Obtén una referencia a los botones y el formulario
const formulario = document.getElementById("myForm");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");

// Función para llenar el formulario con los valores de botones
function llenarFormulario(nombre, email) {
    nombreInput.value = nombre;
    emailInput.value = email;
}

// Agrega un evento de clic a cada botón
for (let i = 1; i <= 32; i++) {
    const boton = document.getElementById("boton" + i);
    if (boton) {
        boton.addEventListener("click", function() {
            llenarFormulario("Botón " + i, i + "@ejemplo.com");
        });
    }
}