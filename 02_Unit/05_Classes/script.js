//01_CLASS DECLARATION AND SOME WORKING FUNCTIONS (ENCAPSULATION)

class Rectangle {
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;

    console.log("A new Rectangle created");
  }
  getArea() {
    return this.width * this.height;
  }

  aboutMe() {
    return `I'm a rectangle and my width is ${this.width}.
    My height is ${this.height}.
    My color is ${this.color}`;
  }
}

const newRectangle = new Rectangle(10, 500, "blue");

console.log(newRectangle.getArea());
console.log(newRectangle.aboutMe());

//02_ENCAPSULATION (ACCESS BY GETTER & SETTERS)

//GETTER

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width; //b'cos square width = height
  }
  getArea() {
    return this.width * this.height;
  }

  get area() {
    return this.width * this.height; //this is the get method
  }
}

const newSquare = new Square(15);

console.log(newSquare.getArea()); //225

console.log(newSquare.area); //225  b'cos we use GETTERS

//SETTER

class Circle {
  constructor(_radius) {
    this.radius = _radius; //privet variable
  }
  get area() {
    return Math.PI * this.radius ** 2; //this is the get method
  }
  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI); //this is the set method
  }
}

const newCircle = new Circle(10);

console.log(newCircle.area); //314.159

newCircle.area = 314.159;
console.log(newCircle.radius); //9.9999

//03_STATIC_CLASS

class Cube {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  getArea_cube() {
    return this.width * this.height;
  }

  static calArea_cube(a, b) {
    return a * b;
  }
}

const newCube = new Cube(7);

console.log(newCube.getArea_cube()); //49

console.log(Cube.calArea_cube(4, 4)); //16 (static class access using class name Cube.)
// static function can access direct using class name

//04_INHERITED CLASS

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;

    console.log("New person created.");
  }
}

class Programer extends Person {
  constructor(_name, _age, _language) {
    super(_name, _age); //inheriting parent class properties
    this.language = _language;
    console.log("New programmer created.");
  }

  code() {
    return `${this.name} is a Programmer and ${this.age} years old.\nShe can code in ${this.language}.`;
  }
}

const John = new Person("John", 45);
const Jane = new Programer("Jane", 34, "JavaScript");
console.log(Jane.code());
// console.log(John.code()); Cannot access code function from John Person class b'cos no code() function in Person class

//05_POLYMORPHISM
//Static Polymorphism Not natively supported in JavaScript

//Dynamic Polymorphism(Method Overriding) full supported like below

class Animal {
  constructor() {
    console.log("An animal is created.");
  }
  makeSound() {
    console.log("Animals generally make sounds.");
  }
}

class Dog extends Animal {
  constructor() {
    super(); //inheriting parent class properties
    console.log("A Dog is Created.");
  }
  makeSound() {
    console.log("Dogs normally bark!");
  }
}

class Cat extends Animal {
  constructor() {
    super();
    console.log("A Cat is created.");
  }

  makeSound() {
    console.log("Cats Mewo!...Mewo!!");
  }
}

const someAnimal = new Animal();
someAnimal.makeSound();

const Tommy = new Dog();
Tommy.makeSound();

const Lassy = new Cat();
Lassy.makeSound();
