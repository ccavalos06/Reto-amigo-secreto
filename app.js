// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[]

function agregarAmigo(){
    let nombreInput = document.getElementById("amigo");
    let nombre = nombreInput.value;

    if (!nombre){
        alert("Debes ingresar un nombre");
        return;
    }
    amigos.push(nombre);
    nombreInput.value = "";
    nombreInput.focus();
    mostrarAmigos()
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i=0; i<amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if(amigos.length === 0){
       alert("No hay amigos para sortear");
       return; 
    }
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}
