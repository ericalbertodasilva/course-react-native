function sumNumbers(arrayOfNumbers){
    let total = 0;

    arrayOfNumbers.forEach(number => { 
        total = total + Number(number);
    });

    return total;
}

var x = prompt("Digite um numero");
var y = prompt("Digite outro numero", y);

alert(sumNumbers([x,y]));