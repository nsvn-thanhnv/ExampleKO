class CarReservation {
    constructor(name, initialCar, date) {
        this.name = ko.observable(name);
        this.car = ko.observable(initialCar);
        this.date = ko.observable(date);

        this.fomatPrice = ko.computed(() => {
            var price = this.car().price;

            return price ? "$" + price.toFixed(2) : "0";
        });
    }

}

class ReservationsViewModel {

    availableCar = [
        { carName: "BMW", price: 10000 },
        { carName: "Mercerde", price: 20000 },
        { carName: "Audi", price: 30000 }
    ];

    customer = ko.observableArray([
        new CarReservation("Thanh", this.availableCar[0], moment()),
        new CarReservation("Thanh1", this.availableCar[0], moment()),
        new CarReservation("Thanh2", this.availableCar[0], moment())
    ]);

    addCustomer() {
        this.customer.push(new CarReservation("", this.availableCar[0], moment()));
    }

    removeCustomer(car) { this.customer.remove(car) }

    totalMoney = ko.computed(() => {
        var total = 0;

        for (let i = 0; i < this.customer().length; i++) {
            total += this.customer()[i].car().price;
        }

        return total;
    });

    totalCustomer = ko.computed(() => {
        var nameCus = "";

        for (let i = 0; i < this.customer().length; i++) {
            nameCus += this.customer()[i].name() + "; ";
        }

        return nameCus;
    });
}

var tmp = new ReservationsViewModel();
ko.applyBindings(tmp, document.body);