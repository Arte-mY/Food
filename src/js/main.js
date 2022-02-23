'use strict';
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//   console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);


// ----------------------------------------------------------
// lesson 46
//1.
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }

// showThis(4, 5);


//2.

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout(){
//       console.log(this);

//     }
//     shout();
//   }
// };
// obj.sum();

//3.
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//       console.log("Hello" + this.name);
//     };
// }
// // let ivan = new User('Ivan', 23);

//4 
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['smith']);

// function count(num) {
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 5.
// 1) Оычная функция: this = window, но усли use strict - undefined 
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка  this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', (e) => {
//   e.target.style.backgroundColor = 'red';
// });

// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => {
//       console.log(this);
//     };

//     say();
//   }
// };

// obj.sayNumber();

// const doble = (a, b) => a * 2;
// console.log(doble());






// lesson 47 clases ES6

// class Rectangle {
// constructor(height, width) {
// this.height = height;
// this.width = width;
// }

// calcArea() {
//   return this.height * this.width;
// }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps() {
//     console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//   }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// // const square = new Rectangle(10, 10),
// //       long = new Rectangle(20, 100);



// // console.log(long.calcArea());
// // console.log(square.calcArea());


// const log = function(a, b, ...rest) {
//   console.log(a, b, rest);
// };

// log('basic', 'rest', 'operator', 'usage');

// function calcOrDuble(number, basis = 2) {
//   console.log(number * basis);
// }

// calcOrDuble(3);