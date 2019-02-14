class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  speak() {
    console.log(this.sound);
  }
}

var ernie = new Pet('dog', 1, 'pug', 'yip yip');
var vera = new Pet('dog', 8, 'border collie', 'woof woof');
var scofield = new Pet('dog',6, 'doberman', 'yap yap');
var edel = new Pet('dog', 7, 'german shorthaired pointer', 'bark bark');

ernie.speak();
vera.speak();
