// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaración de la variable amigo como arreglo
let amigos = [];

//Función para agregar un amigo al arreglo y que sea diferente a vacío
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
        console.log(amigos);

    if(!nombreAmigo){
        alert('Debes ingresar un nombre');
        return;
    }
  amigos.push(nombreAmigo);
  inputAmigo.value = '';
  inputAmigo.focus();
  console.log(amigos);
}
