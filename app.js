const prompt= require('prompt-sync')()

let Exercicio = prompt("Digite o Exercício que deseja efetuar (digite o numero): \n 1 - média de 3 notas \n 2 - Celsius para Farnheit \n 3 - Farnheit para Celsius \n 4 - Cálculo de área \n 5 - Calcular àrea de Circulo \n \n")
if(Exercicio == "1"){
    let Num1 = prompt("\n \n Digite a nota do Primeiro Bimestre: ")
    let Num2 = prompt("\n \n Digite a nota do Segundo Bimestre: ")
    let Num3 = prompt("\n \n Digite a nota do Terceiro Bimestre: ")
    const media = (n1,n2,n3) => (parseInt(n1)+parseInt(n2)+parseInt(n3))/3
    console.log("Média do aluno(a): " + media(Num1,Num2,Num3))
}else if(Exercicio == "2"){
    let Celsius = prompt("\n \n Digite Quantos Graus (ºC) deseja converter: ")
    const media = (n1) => (parseInt(n1)*1.8)+32
    console.log("Valor em Fahrenheit: " + media(Celsius))
}else if(Exercicio == "3"){
    let Farnheit = prompt("\n \n Digite Quantos Graus (ºF) deseja converter: ")
    const media = (n1) => (parseInt(n1)-32)/1.8
    console.log("Valor em Celsius: " + media(Farnheit))
}else if(Exercicio == "4"){
    let Altura = prompt("\n \n Digite a altura do Retângulo: ")
    let Largura = prompt("\n \n Digite a largura do Retângulo: ")
    let Medida = prompt("\n \n Digite a unidade de medida: ")
    const Area = (A,L) => (parseInt(A) * parseInt(L))
    console.log("Area Retangular: " + Area(Altura,Largura) + Medida + "²")
}else if(Exercicio == "5"){
    let Raio = prompt("\n \n Digite o Raio do Círculo: ")
    let PI = 3.14159265359
    const Area = (R) => (parseInt(R) * parseInt(R)) * PI
    console.log("Area Circular: " + Math.round(Area(Raio)))
}