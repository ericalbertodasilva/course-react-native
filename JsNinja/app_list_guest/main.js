let guests = JSON.parse(localStorage.getItem("guests")) || [];

const elList = document.getElementById('list')
const elButton = document.getElementById('button')
const elField = document.getElementById('field')

elButton.onclick = () => {
    let name = elField.value;
    guests.push({ name: name });
    elField.value = "";
    saveGuests()
    listGuests();
};

function saveGuests() {
    localStorage.setItem("guests", JSON.stringify(guests));
  }

function listGuests() {
    elList.innerHTML = "";
    for (const guest of guests){
        let elGuest = document.createElement("li");
        elGuest.setAttribute("id",guest.id)

        let elName = document.createTextNode(guest.name);

        let elDelete = document.createElement("a");
        elDelete.setAttribute("href", "#");
        let elDeleteText = document.createTextNode("Delete");
        
        elDelete.onclick = () => {
            guests = guests.filter(function (item){
                return item.name !== guest.name;
            });
            saveGuests()
            listGuests();
        };

        elDelete.appendChild(elDeleteText);
        elGuest.appendChild(elName);
        elGuest.appendChild(elDelete);
        elList.appendChild(elGuest);
    }
}

listGuests()