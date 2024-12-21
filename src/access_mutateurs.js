const user = {
  firstname: "Tintin",
  lastname: "Milou",
};

Object.defineProperty(user, "fullname", {
  get() {
    return this.firstname + " " + this.lastname;
  },
  set(value) {
    [this.firstname, this.lastname] = value.split(" ");
  },
  enumerable: true,
  configurable: true,
});

const descriptor = Object.getOwnPropertyDescriptor(user, "fullname");
console.log(descriptor);

console.log(user.fullname);
