alert('Vamos começar a jogar!');
console.log(tentativaNumero);
let tentativas = 0;

// math.random() * max + 1)
let numeroMaximo = parseInt(prompt('Digite um numero Maximo'));
let numeroAleatorio = parseInt(Math.random() * numeroMaximo + 1);

console.log("O numero maximo é " + numeroMaximo)
// resultado
console.log('O numero é: ' + numeroAleatorio)

do {
    // nova tentativa - é preciso colocar para que não caia sempre em um laço de repetição
    var tentativaNumero = parseInt(prompt(`Tente adivinhar o numero de 1 a ${numeroMaximo}`));

    console.log(tentativaNumero);
    if(tentativaNumero == parseInt(numeroAleatorio)){
        alert('Parabéns você acertou');
    } else {
        
        alert(`Errado o número correto não é ${tentativa_if}`);

        if(tentativaNumero < numeroAleatorio){

            alert('O número secreto é maior que ' + tentativaNumero);
        } else {

            alert('O número secreto é menor que ' + tentativaNumero);
        }
    }
    // tentativas = tentativas + 1;
    tentativas++;
// enquanto numero aleatorio for diferente de tentativa do numero secreto, ele vai continuar rodando o código para mim
} while (numeroAleatorio != tentativaNumero);

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Você teve ${tentativas} ${palavraTentativa} antes de acertar`);
