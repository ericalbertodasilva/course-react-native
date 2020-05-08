function sumNumbers(arrayOfNumbers){
    let total = 0;

    arrayOfNumbers.forEach(number => { 
        total = total + Number(number);
    });

    return total;
}

var x = prompt("Digite um numero");
var y = prompt("Digite outro numero");

var result = sumNumbers([x,y]);

alert("O resultado da soma é: " + result);
if (result > 10) {
    alert("Esta calculadora é limitada, você atingiu o valor máximo de cálculo.");
}