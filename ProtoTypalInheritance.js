function Person(name) {
  this.name = name;
}

//each object has a hidden property to inherit the another object in prototype chain

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let devam = new Person("devam");
devam.greet();
