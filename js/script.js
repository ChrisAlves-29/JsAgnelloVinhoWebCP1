// Questão 1:
let variavelUndefined; // valor undefined por padrão
let variavelVazia = ""; // valor vazio
let variavelValor = "Vinho"; // valor com conteúdo
console.log(variavelUndefined); // undefined
console.log(variavelVazia); // ""
console.log(variavelValor); // "Vinho"



// questão 2:
let a = 5;
let b = 10;

console.log(a != b); // true
console.log(a == 5); // true
console.log(a >= 3); // true


// Questão 3:
let peso = 75;
let altura = 1.75;
let imc = peso / (altura * altura);

switch (true) {
  case (imc < 18.5):
    console.log("Abaixo do peso");
    break;
  case (imc >= 18.5 && imc <= 24.9):
    console.log("Peso ideal");
    break;
  case (imc > 24.9):
    console.log("Acima do peso");
    break;
}


// Questão 4:
for (let i = 1; i <= 50; i++) {
    console.log(`O valor é: ${i}`);
  }
  

// Questão 5:
let usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Falha na autenticação!");
}


// Questão 6:
let notas = [7, 8, 5, 6, 9, 7, 6];
let soma = notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / notas.length;

if (media >= 6) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}


// Questão 7:




// Questão 8:


// Questão 9:


