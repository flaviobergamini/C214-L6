const calculadora = require('./calculadora');

var soma = calculadora.soma(2, 3);
var subt = calculadora.subtrai(3, 7);
var mult = calculadora.multiplica(5, 5);
var divi = calculadora.divide(3, 4);
var divz = calculadora.divide(2, 0);
var pote = calculadora.aoQuadrado(4);

console.log("Adição:", soma);
console.log("Subtração:", subt);
console.log("Multiplicação:", mult);
console.log("Divisão:", divi);
console.log("Divisão por zero:", divz);
console.log("Potência:", pote)