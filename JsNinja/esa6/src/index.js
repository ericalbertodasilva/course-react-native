class ListGuests {
    constructor() {
        this.guests = [];
    }

    add(name, age, cpf) {
        this.guests.push({ name: name, age: age, cpf: cpf });
    }

    list() {
        console.log(this.guests);
    }
}

var listGuests = new ListGuests();

document.getElementById("add").onclick = function() {
    var name = document.getElementById("name").value;
    listGuests.add(name, 37, "123456789");
};

document.getElementById("list").onclick = function() {
    listGuests.list();
};

import sum from "./math";
const result = sum(1,2)
console.log(result)

import { myPromesesOld } from "./async";
console.log("Start")
myPromesesOld().then(res=>{
    console.log("Exec1",res);
})
console.log("End")

console.log("Start")
async function myPromeses(){
    const res = await myPromesesOld()
    console.log("Exec2",res)
}
myPromeses()

console.log("End")
  