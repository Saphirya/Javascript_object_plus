// function hello() {}

// hello.foo = () => {
//   console.log("foo");
// };

// hello.foo();

const foo = {
  test: "1",
};
console.log(Object.entries(foo));

Object.freeze(foo);
foo.bar = "2";
