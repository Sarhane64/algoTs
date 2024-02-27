class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  tellMyName() {
    console.log(`I am ${this.name}`);
  }

  tellMyAge() {
    console.log(`I am ${this.age} years old`);
  }
}

const test1 = new Person("Jean-terre", 25);
test1.tellMyName();
test1.tellMyAge();

const test2 = new Person("Marie-madeleine", 156);
test2.tellMyName();
test2.tellMyAge();
