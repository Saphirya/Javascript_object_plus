// const vehicule = {
//   hasEngine: true,
//   start() {
//     console.log(this.hasEngine);
//     console.log("le véhicule est en marche");
//   },
// };

// function Car(brand) {
//   this.brand = brand;
// }
// Car.prototype = vehicule;

// Car.prototype = vehicule;
// Car.prototype.constructor = Car;
// const mycar = new Car("renault");

// console.log(mycar);

// car.__proto__ = vehicule;
// car.hasEngine = false;

// console.log(car);
// console.log(car.hasEngine);

// for (let key in car) {
//   console.log(car.hasOwnProperty(key));
//   console.log(key);
// }

const vehicule = {
  hasEngine: true,
};

const car = Object.create(vehicule, {
  wheels: {
    value: 4,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(Object.getPrototypeOf(car));
