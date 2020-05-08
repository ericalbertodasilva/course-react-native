function sumNumbers(arrayOfNumbers){
    let total = 0;

    arrayOfNumbers.forEach(number => { 
        total = total + Number(number);
    });

    return total;
}


var v1 = Number(prompt("Digite o primeiro valor"));
var v2 = Number(prompt("Digite o segundo valor"));
alert("Resultado: " + sumNumbers([v1, v2]));