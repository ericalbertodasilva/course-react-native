const guests = {
    name: "Eric",
    age: 32,
    vip: true,
    entryTime: false,
    departureTime: false,
    lenghtOfStay: false,
    payEvent: function (valor) {
        console.log("Pagando evento: " + valor);
    },
    checkIn: function() {
        this.entryTime = new Date();
    },
    checkOut: function() {
        this.departureTime = new Date();
        this.lenghtOfStay = (this.departureTime - this.entryTime) / (1000 * 60);
    }
};

guests.checkIn();
guests.checkOut();
guests.lenghtOfStay;