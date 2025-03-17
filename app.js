// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaración de la variable amigos como arreglo
let amigos = [];

//Función para agregar un amigo al arreglo y que sea diferente a vacío
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert('Debes ingresar un nombre');
        return;
    }

        amigos.push(nombreAmigo);
        inputAmigo.value = '';
        inputAmigo.focus();
        mostrarAmigos();
}
//Función para mostrar los nombres de los amigos ingresados
function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}
//Función para sortear al amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debes agregar amigos antes de sortear');
        return;
    }
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        
        let limpiarLista = document.getElementById("listaAmigos");
        limpiarLista.innerHTML = '';
        amigos = [];
}
//Esta es la funcion que reinicia un nuevo sorteo
function reiniciarSorteo() {
    valor=confirm('¿Estás seguro de que deseas reiniciar el sorteo?: Y/N');
    if(valor==true){
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = '';
        let limpiarLista = document.getElementById("listaAmigos");
        limpiarLista.innerHTML = '';
        amigos = [];
        alert('Se ha reiniciado el sorteo');  
    }
    else{
        alert('Hasta la próxima Amigo!');
    }   

}
agregarAmigo();
