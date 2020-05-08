function fatorial(number){
    if (number == 0) {
        return 1;
    }
    else {
        return (number * fatorial(number - 1));
    }
}

console.log(fatorial(1));
console.log(fatorial(20));