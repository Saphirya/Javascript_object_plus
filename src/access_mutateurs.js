const user = {
  firstname: "Tintin",
  lastname: "Milou",
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

console.log(user.fullname());
