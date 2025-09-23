// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    // Usamos toUpperCase() para evitar duplicados por diferencias de mayúsculas/minúsculas.
    const nombreMayusculas = nombre.toUpperCase();

    // Verificamos si el nombre ya existe en la lista para evitar duplicados.
    if (amigos.some(amigo => amigo.toUpperCase() === nombreMayusculas)) {
        alert('Este nombre ya ha sido agregado.');
        nombreInput.value = '';
        return;
    }

    // Agregamos el nombre al arreglo y actualizamos la lista en la interfaz.
    amigos.push(nombre);
    mostrarAmigos();
    nombreInput.value = '';
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay participantes registrados.');
        return;
    }

    // Elige un índice aleatorio del arreglo de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtiene el nombre en esa posición
    const nombreGanador = amigos[indiceAleatorio];

    // Muestra el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El nombre seleccionado es: <strong>${nombreGanador}</strong>!`;
}