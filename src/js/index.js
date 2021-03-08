import '../scss/main.scss';


// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// const Car = function () {};  // constructor
function Car(name) {     // druga forma zapisu constructor'a
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

function Player() {

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
Citizen.prototype.age = 21;
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
console.log(arr instanceof Object); // arr jest instancja object
console.log(Object.getPrototypeOf(arr));
console.log(Object.getPrototypeOf(zenek));
console.log(arr.__proto__.constructor);
console.log(zenek.__proto__.constructor);

// proto sluzy do dziedziczenia metod i innych w obiektach ponizszych.
// najpierw szuka na samym dole, w instancji np "zenek' i ozniej co raz wyzej
// a takich zagniezdzen obiektow moze byc sporo


// ******************************************************************************************************************
// ******************************************************************************************************************
// ***************************************************    CLASSES   *************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************


class Family {
    constructor(name) {
        this.name = name;
    }

    addMember() {

    }
}

const nowakowie = new Family("Nowakowie");
console.log(nowakowie);

const Family2 = function (name) {
    this.name = name;
}
Family2.prototype.addMember = function () {

};
const kowalscy = new Family2("Kowalscy");
console.log(kowalscy);

class Family3 {
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
    }

    addMember(newMeber) {
        this.names.push(newMeber)
        this.members++;
        console.log(`został dodany nowy członek rodziny: welcome -> ${newMeber} <- Rodzina liczy teraz ${this.members} członkow.`)
    }

    static makeFamily(...members) {
        return members;
    }
}

const kwiatkowscy = new Family3(3, "kuba", "kasia", "danusia");
console.log(kwiatkowscy);
kwiatkowscy.addMember("agata");
console.log(kwiatkowscy);
Family3.makeFamily("senior", "junior");
console.log(Family3);

class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    breathe() {
        console.log("zwierze oddycha");
    }
}

const zwierze = new Animal(12, 'ziomek');
console.log(`zmienna zwierzę zawiera referencję do obiektu: ${zwierze.age} i jest jego instancją`);
console.log('zmienna zwierzę zawiera referencję do obiektu:' + zwierze + 'i jest jego instancją');
console.log(zwierze);
console.log(`${Animal}`);
console.log("cos " + zwierze);

class Mammal extends Animal {
    constructor(age, name, hairs) {
        super(age, name);
        this.hairs = hairs;
    }

    drinkMilk() {
        console.log('glup glup, aaaaaaaaaale gopre');
    }
}

const ssak = new Mammal(3, 'ziomek2', 'blond');
console.log(ssak);
ssak.breathe();
ssak.drinkMilk();

class Human extends Mammal {
    constructor(age, name, hairs, language) {
        super(age, name, hairs);
        this.language = language;
    }
    speak() {
        console.log(`%c kurfaaaaaaaa, ruchaaaaaać`, "color: red");
    }
}

const ludz = new Human(39, 'kuba', 'grodzowe', 'polski');
console.log(ludz);
ludz.drinkMilk();
ludz.speak()

class Human2 extends Mammal {

}
const ludz2 = new Human2(35, 'Agata', 'blont');
console.log(ludz2);
ludz2.breathe();
ludz2.drinkMilk();

// ******************************************************************************************************************
// ******************************************************************************************************************
// *************************************************** this   *******************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************


const szarik = {
    children: ['fafiik', 'zaaba'],
    showChildren2: function (){
        const that = this; // przypisanie obiektu do this
        this.children.forEach(function (child, index){
            console.log(that.children[index]); // uzycie that powoduje podlozenie obiektu w tym wypadku szarik jako this
        })
    },
}

szarik.showChildren2();
