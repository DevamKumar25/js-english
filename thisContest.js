const person = {
  name: "Devam",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};


person.greet();

const greetFunction = person.greet;
greetFunction();  // undefined

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

//bind, call and apply
// bind() creates a new function that, when called, has its this keyword set to the provided value. It does not immediately invoke the function; instead, it returns a new function with the specified this context.

//Definition: call() invokes the function immediately with a specified this value and comma-separated arguments.
//Usage: Used when you want to invoke a function immediately and explicitly set the value of this.

//person.greet.call({ name: "Alice" }); 




//apply() Method
// Definition: apply() is similar to call(), but instead of passing arguments as comma-separated values, you pass them as an array.

//Usage: Useful when you want to invoke a function with an array of arguments

const person1 = {
  name: "Devam",
  introduce(language, country) {
    console.log(`Hi, I am ${this.name}. I speak ${language} and I am from ${country}.`);
  },
};

person1.introduce.apply({ name: "Bob" }, ["English", "USA"]); 




function sayHello(greeting, emoji) {
  console.log(`${greeting}, I am ${this.name} ${emoji}`);
}

const user = { name: "Charlie" };

// Using call
sayHello.call(user, "Hello", "😊"); 
// Output: Hello, I am Charlie 😊

// Using apply
sayHello.apply(user, ["Hi", "👋"]); 
// Output: Hi, I am Charlie 👋

// Using bind
const sayHelloBound = sayHello.bind(user, "Hey", "🤖");
sayHelloBound(); 
// Output: Hey, I am Charlie 🤖
