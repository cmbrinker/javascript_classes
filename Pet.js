class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  get activity() {
    var time = new Date();
    var hours = time.getHours();
    if(hours >= 8 && hours <= 20) {
      return "playing";
    } else {
      return "sleeping";
    }
  }
  get owner() {
    return this._owner;
  }
  set owner(owner) {
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }
  speak() {
    console.log(this.sound);
  }
}

class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalized;
  }
  get phone () {
    return this._phone;
  }
}

var ernie = new Pet('dog', 1, 'pug', 'yip yip');
var vera = new Pet('dog', 8, 'border collie', 'woof woof');
var scofield = new Pet('dog',6, 'doberman', 'yap yap');
var edel = new Pet('dog', 7, 'german shorthaired pointer', 'bark bark');

ernie.speak();
vera.speak();
console.log(ernie.activity);
ernie.owner = new Owner('Chris', '455 Kelton St. Boston, MA');
ernie.owner.phone = '(555) 555-5555';
console.log(ernie.owner.phone);
