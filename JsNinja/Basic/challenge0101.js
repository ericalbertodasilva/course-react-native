function mean(arrayOfNumbers){
    let total = 0;

    arrayOfNumbers.forEach(number => { 
        total = total + number;
    });

    return total / arrayOfNumbers.length;
}


console.log(mean([10,20,30]));
console.log(mean([10,10,45,30,40]));