function sumNumbers(arrayOfNumbers){
    let total = 0;

    arrayOfNumbers.forEach(number => { 
        total = total + Number(number);
    });

    return total;
}


console.log(sumNumbers([10,20,30]));
console.log(sumNumbers([10,10,45,30,40]));