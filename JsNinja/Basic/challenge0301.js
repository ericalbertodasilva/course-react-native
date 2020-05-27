const guests = {
    name: "Felipe",
    age: 37,
    vip: false,
    checkIn: function (data) {
        console.log("Registro de dada de entrada: " + data);
    },
    checkOut: function (data) {
        console.log("Registro de dada de saída: " + data);
    },
    payEvent: function (valor) {
        console.log("Pagando evento: " + valor);
    },
};

guests.checkIn("06/09/2027");