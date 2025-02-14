const prompt= require('prompt-sync')()

let numero1 = prompt("digite um número ")
let numero2 = prompt("digite outro ")

const soma = (n1,n2) => n1 + n2 + "Camargo"

console.log("total = " + soma(parseInt(numero1),parseInt(numero2)))