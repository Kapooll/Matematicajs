function raizQuadrada(){
    let numero = Number(document.getElementById("valor").value);
    document.getElementById("resultado").innerHTML = "Raiz Quadrado: " +  Math.sqrt(numero); 
}

function potencia(){
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "Potencia" + Math.pow(numero1, numero2);
}

function valorAbsoluto(){
    let numero = Number(document.getElementById("valor").value);
    document.getElementById("resultado").innerHTML = "Valor Absoluto" + Math.abs(numero);
}

function arredondar(){
    let numero = Number(document.getElementById("valor").value);
    document.getElementById("resultado").innerHTML = "Round" + Math.round(numero);
    "<br>Floor: " + Math.floor(numero) + "<br>: " + Math.ceil(numero);
}

function adivinhar() {
    let palpite = Number(document.getElementById("palpite").value);
    let numeroSorteado = Math.floor(Math.random() * 100) + 1;
    if (palpite === numeroSorteado) {
        document.getElementById("resultado").innerHTML =
            "Parabéns! Você acertou o número!";
    } else {
        document.getElementById("resultado").innerHTML =
            "Você errou! O número era " + numeroSorteado;
    }
}

function sortear(){
    let numeroAleatorio = Math.floor(Math.random()*100) + 1;
    document.getElementById("resultado").innerHTML = "Numero sorteado: " + numeroAleatorio;
}

function maiormenor(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)
    let n5 = Number(document.getElementById("n5").value)

    let maior = Math.max(n1, n2, n3, n4, n5)
    let menor = Math.min(n1, n2, n3, n4, n5)

    document.getElementById("resultado").innerHTML = "O maior valor = " + maior + "<br>O menor valor = " + menor;
}

function lancarDado() {
    let dado = Math.floor(Math.random() * 6) + 1;

    document.getElementById("resultado").innerHTML =
        "Resultado do dado: " + dado;
}

function lancarDoisDados() {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    let soma = dado1 + dado2;

    document.getElementById("resultado").innerHTML =
        "Dado 1: " + dado1 +
        "<br>Dado 2: " + dado2 +
        "<br>Soma dos dados: " + soma;
}