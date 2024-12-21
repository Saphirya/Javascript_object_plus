// const tesla = {
//   brand: "tesla",
//   roues: 4,
//   hasEngine: true,
// };

// const renault = {
//   brand: "renault",
//   roues: 4,
//   hasEngine: true,
// };

function Car(brand) {
  this.brand = brand;
  this.roues = 4;
  this.hasEngine = true;
  this.start = function () {
    console.log("le véhicule est en marche");
  };
}

const tesla = new Car("tesla");
const renault = new Car("renault");

console.log(tesla);
console.log(renault);

tesla.start();
