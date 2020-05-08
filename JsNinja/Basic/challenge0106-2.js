var valueInit = Number(prompt("Digite o valor inicial"));
var valueFinal = Number(prompt("Digite o valor final"));
var valurincremet = Number(prompt("Digite o valor de incremento"));
var res = 0;
for(x = valueInit;x <= valueFinal; x += valurincremet) {
 result = Math.log(x);
 console.log(result);
}