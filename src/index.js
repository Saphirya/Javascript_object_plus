const obj = {
  key: "value",
};

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

Object.defineProperty(obj, "test", {});

// Object.defineProperty(obj, "key", {
//   writable: true,
// });

const descriptor = Object.getOwnPropertyDescriptor(obj, "test");
console.log(descriptor);

// for (let key in obj) {
//   console.log(key);
// }

obj.key = "value2";

// {
//   "value": "value2",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }
