const vehicule = {
  hasEngine: true,
  start() {
    console.log(this.hasEngine);
    console.log("le véhicule est en marche");
  },
};

const car = {
  brand: "renault",
};

car.__proto__ = vehicule;
car.hasEngine = false;

// console.log(car);
// console.log(car.hasEngine);

for (let key in car) {
  console.log(car.hasOwnProperty(key));
  console.log(key);
}
