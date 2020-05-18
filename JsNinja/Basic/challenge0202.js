
var guests = {};
while (true) {

    var name = prompt("Qual nome do convidado") ;
    var cpf =  prompt("Qual CPF do convidado");
    var age =  prompt("Qual a idade do convidado");
    guests.push({ nome:name, cpf:cpf, idade:age})
    var stop = prompt("Deseja cadastrar outro convidado digite Y");

    if(stop != "Y"){
        console.log(guests);
        break
    };
};
