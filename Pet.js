class Pet {
  constructor(animal, age, breed) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

var ernie = new Pet('dog', 1, 'pug');
var vera = new Pet('dog', 8, 'border collie');
var scofield = new Pet('dog',6, 'doberman');
var edel = new Pet('dog', 7, 'german shorthaired pointer');

console.log(ernie);
