import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// const Car = function () {};  // constructor
function Car(name){     // druga forma zapisu constructor'a
    console.log(this);
    this.name = name;
}


const maluch = new Car('maluch');
console.log(maluch);
const polonez = new Car('polonez');
polonez.name = 'polonez';
console.log(polonez.name);
console.log(maluch.constructor);

const Person = function (name, age, aka) {
    this.name = name;
    this.age = age;
    this.aka = aka;
    this.children = [];
}

Person.prototype.addChildren = function (name, age, gender) {
    this.children.push(name, age, gender);
}
const kuba = new Person("Kuba", 39, "Władziu");
console.log(kuba);

const agata = new Person("Agata", 35, "Władzia");
console.log(agata);

console.log(` %c${kuba.name} %c& %c${agata.name} %c= ruchuruchu tonight`, "color: red", "", "color: yellow", "");
console.log(` %c${kuba.aka} %c& %c${agata.aka} %c= ruchuruchu tonight`, "color: red", "", "color: yellow", "");

agata.addChildren('Neo', 12, "boy");
agata.addChildren('Oliver', 8, "boy");
agata.addChildren('Kevin', 7, "boy");

console.log(agata);

let childName;
let childAge;
let childGender;

console.log(` Pani ${agata.name} i jej synowie ${agata.children} i oczywiście jej men ${kuba.aka}`);

function Player(){

}
class User {
    
}

Player.prototype.age = 25;
const janek = new Player;
console.log(janek.age);
const marta = new User();
marta.name = "Marta";
marta.age = 23;
console.log(`${marta.name} ${marta.age}`);
console.log(janek.constructor);
console.log(marta.constructor);

const darek = new janek.constructor();
console.log(darek.age);

function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
    // this.changeCitizenship = function (citizenship) {
    //     this.citizenship = citizenship;
    //     console.log(`Zmiania za pomocą metod w instancji na obywatelstwo ${this.citizenship}`);
    // }
}
Citizen.prototype.changeCitizenship = function (citizenship) {
    this.citizenship = citizenship;
    console.log(`Zmiania za pomocą metod w prototypie na obywatelstwo ${this.citizenship}`);
    // dostęp do metody zmien obywatelstwo changeCitizenship mam przez __proto__
}


const zenek = new Citizen("Polska", 'polskie');
console.log(zenek);
zenek.changeCitizenship('włoskie');
const marysia = new Citizen('Francja', "niemieckie");
console.log(marysia);

// my own function dedelte (from array)
const arr = [5, 6, 7, 8];
Array.prototype.delete = function (index) {
    return this.splice(index, 1);
}

arr.__proto__ = undefined;  // constructor prototyp
console.log(arr.__proto__);

console.log(arr.__proto__.__proto__);  // object prototyp
console.log(arr.__proto__.__proto__.__proto__);  // null
console.log(arr instanceof Array); // arr jest instancja array

