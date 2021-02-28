import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// const Car = function () {};  // constructor
function Car(){     // druga forma zapisu constructor'a
    console.log(this);
    this.name = name;
}


const maluch = new Car();
console.log(maluch);

maluch.name = 'polonez';

console.log(maluch.name);

