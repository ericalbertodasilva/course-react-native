function sumNumbers(arrayOfNumbers){
    let total = 0;

    arrayOfNumbers.forEach(number => { 
        total = total + Number(number);
    });

    return total;
}

while (true){
    var x = prompt("Digite um numero");
    var y = prompt("Digite outro numero");

    var result = sumNumbers([x,y]);

    alert("O resultado da soma é: " + result);

    var stop = prompt("Digite n para parar a calculadora");
    
    if(stop == 'n'){
        break;
    }
}