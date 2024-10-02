function mudarCor() {
	var div = document.getElementById("quadrado");
	div.style["background-color"] = "red";
}

function restaurarCor() {
    var div = document.getElementById("quadrado");
    div.style["background-color"] = "blue";
}

window.onload = function coumprimentar() {
    var nome = prompt("Qual é o seu nome?");

    if (nome != null && nome != "") {
        alert("Olá, " + nome + "! Seja bem vindo!");
    }
}