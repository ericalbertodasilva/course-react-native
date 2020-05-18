

function mean(arrayOfNumbers){
    let total = 0;

    arrayOfNumbers.forEach(number => { 
        total = total + number;
    });

    return total / arrayOfNumbers.length;
}

var arrayOfNumbers = [];

while (true) {
    var number = prompt("Digite um numero ou S para sair");
    if(number == 'S'){
        break;
    }

    if ( typeof(number) == number){
        arrayOfNumbers.push(number);
    }

}

console.log(mean(arrayOfNumbers));