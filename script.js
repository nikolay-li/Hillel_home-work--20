// ******TASK*******

// Потрібно знайти помилку і виправити її

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     this.name = name;
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White rabbit"); // Error: this is not defined
// alert(rabbit.name);

// *********End*************

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super()
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White rabbit"); // Error: this is not defined
alert(rabbit.name);
