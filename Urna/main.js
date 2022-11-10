var listaNumero = document.querySelectorAll('.num__style');
var primeiroNumero = document.querySelector('.num1__resultado')


listaNumero[0].addEventListener('click', atribuindoValor1)

function atribuindoValor1() {
    primeiroNumero.textContent = '1';
}
