// class Person {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   tellMyName() {
//     console.log(`I am ${this.name}`);
//   }

//   tellMyAge() {
//     console.log(`I am ${this.age} years old`);
//   }
// }

// const test1 = new Person("Jean-terre", 25);
// test1.tellMyName();
// test1.tellMyAge();

// const test2 = new Person("Marie-madeleine", 156);
// test2.tellMyName();
// test2.tellMyAge();

class bankCustomer {
  private name: string;
  private pin: number;

  constructor(name: string, pin: number) {
    this.name = name;
    this.pin = pin;
  }

  getName(): string {
    return this.name;
  }

  verifyPinInput(): boolean {
    if (this.pin === 1234) {
      return true;
    } else {
      return false;
    }
  }
}

const customer = new bankCustomer("John Doe", 1234);
const customer2 = new bankCustomer("Jane Doe", 5678);

console.log(customer.verifyPinInput());
console.log(customer2.verifyPinInput());
