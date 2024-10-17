function buscarNome(rga) {
    const listaAluno = new Map();
    listaAluno.set('2023.1906.003-8', 'Antonio Castro');
    listaAluno.set('2023.1906.003-9', 'João Silva');
    listaAluno.set('2023.1906.004-0', 'Maria Souza');
    listaAluno.set('2023.1906.004-1', 'Pedro Santos');

    return listaAluno.has(rga) ? listaAluno.get(rga) : "";
}

function validarRGA() {
    var rga = document.getElementById("rga").value.trim();
    var nome = document.getElementById("nome");
    var erro = document.getElementById("rgaErro");

    // Ocultar erro inicialmente
    erro.style.display = "none";

    // Validar formato básico do RGA
    var rgaPattern = /^\d{4}\.\d{4}\.\d{3}-\d$/;
    if (!rgaPattern.test(rga)) {
        erro.style.display = "block";
        nome.value = "";
        return;
    }

    var nomeAluno = buscarNome(rga);
    if (nomeAluno !== "") {
        nome.value = nomeAluno;
        erro.style.display = "none";
    } else {
        erro.style.display = "block";
        nome.value = "Não encontrado";
    }
}

function validarSenha() {
    var senha = document.getElementById("senha").value;
    var erro = document.getElementById("senhaErro");

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{6,15}$/;
    if (!regex.test(senha)) {
        erro.style.display = "block";
    } else {
        erro.style.display = "none";
    }
}

function confirmarSenha() {
    var senha = document.getElementById("senha").value;
    var csenha = document.getElementById("csenha").value;
    var erro = document.getElementById("csenhaErro");

    if (senha !== csenha) {
        erro.style.display = "block";
    } else {
        erro.style.display = "none";
    }
}

function validarData() {
    var dataAtv = document.getElementById("dataAtv").value;
    var erro = document.getElementById("dataErro");
    var hoje = new Date();

    if (new Date(dataAtv) <= hoje) {
        erro.style.display = "block";
    } else {
        erro.style.display = "none";
    }
}
