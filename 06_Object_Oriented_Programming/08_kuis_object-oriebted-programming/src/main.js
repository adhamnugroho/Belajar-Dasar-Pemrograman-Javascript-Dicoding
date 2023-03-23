/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Tulis kode di bawah ini

// Nomor 1
class Animal {
  #isMammal;

  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.#isMammal = isMammal;
  }

  getIsMammal() {
    console.log(`${this.#isMammal}`);
  }
}

// Nomor 2

class Rabbit extends Animal {
  constructor(name, age, isMammal = true) {
    super(name, age, isMammal);
  }

  eat() {
    console.log(`${this.name} sedang makan!`);
  }
}

// Nomor 3

class Eagle extends Animal {
  constructor(name, age, isMammal = false) {
    super(name, age, isMammal);
  }

  fly() {
    console.log(`${this.name} sedang terbang!`);
  }
}

// Nomor 4

const myrabbit = new Rabbit("Labi", 2);
myrabbit.eat();
myrabbit.getIsMammal();

// Nomor 5

const myEagle1 = new Eagle("Elo", 4);
myEagle1.fly();
myEagle1.getIsMammal();
