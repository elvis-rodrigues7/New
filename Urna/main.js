function inserir(valor) {
    var primeiroTermo = document.querySelector('#campo1').value;
    var segundoTermo = document.querySelector('#campo2').value;

    if (primeiroTermo == "") {
        document.querySelector('#campo1').value = valor;
    }

    else if (segundoTermo == "") {
        document.querySelector('#campo2').value = valor;
    }
}

function branco(){
    document.querySelector('#campo1').value = "0";
    document.querySelector('#campo2').value = "0";
}

function corrigir(){
    document.querySelector('#campo1').value = "";
    document.querySelector('#campo2').value = "";
}

function votar() {
    var primeiroTermo = parseInt(document.querySelector('#campo1').value)
    var segundoTermo = parseInt(document.querySelector('#campo2').value)
    var candidato = (primeiroTermo * 10) + segundoTermo;
    if (sessionStorage.getItem(candidato) !== null) {
        votos = parseInt(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votos);
        fim()
        setTimeout(recomeço, 2000)
    } else {
        sessionStorage.setItem(candidato, 1);
        fim()
        setTimeout(recomeço, 2000)
    }
    document.querySelector('#campo1').value = "";
    document.querySelector('#campo2').value = "";
}

function fim(){
    var presidenteInvisivel = document.querySelector('.visu__presi')
    var primeiroTermoInvisivel = document.querySelector('.num1__resultado')
    var segundoTermoInvisivel = document.querySelector('.num2__resultado')
    var fimVisivel = document.querySelector('.voto__confirmado')

    presidenteInvisivel.classList.add("inv")
    primeiroTermoInvisivel.classList.add("inv")
    segundoTermoInvisivel.classList.add("inv")
    fimVisivel.classList.remove("inv")
}

function recomeço() {
    var presidenteInvisivel = document.querySelector('.visu__presi')
    var primeiroTermoInvisivel = document.querySelector('.num1__resultado')
    var segundoTermoInvisivel = document.querySelector('.num2__resultado')
    var fimVisivel = document.querySelector('.voto__confirmado')

    presidenteInvisivel.classList.remove("inv")
    primeiroTermoInvisivel.classList.remove("inv")
    segundoTermoInvisivel.classList.remove("inv")
    fimVisivel.classList.add("inv")
}