const foo = {};

const date = new Date();
console.log(Date.__proto__.__proto__ === foo.__proto__);
console.log(Function.__proto__.__proto__);
