let number: number = 10;
let letter: string = "this is string";

let id = 1;

function greet(name: string): void {
  console.log(`Hello ${name}`);
}

greet("sophanit");

function cal(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(cal(1, 2));

const arr: number[] | string[] = [1];
arr.push(1);
console.log(arr);

const arr2: (number | string)[] = [1, 2, 3, "abc"];

type Person = {
  name: string;
};

type Student = Person & {
  id: number;
};

type Teacher = Student & {
  age: number;
};

const student: Teacher = {
  id: 22,
  name: "Sophanit",
  age: 22,
};

console.log(student);

const h1 = document.querySelector("h1") as HTMLHeadingElement;

function printData<T>(data: T) {
  console.log(data);
}

printData<string>("Hello, world!");
printData<number>(123);

interface Human {
  name: string;
}

interface Props {
  users: Human;
  age: number;
}

const props: Props = {
  users: {
    name: "Wick",
  },
  age: 22,
};

// class object in TS

class Player {
  public readonly fname: string;
  readonly lname: string;
  // private score: number = 10;

  constructor(fname: string, lname: string) {
    this.fname = fname;
    this.lname = lname;
  }
}

const player1 = new Player("John", "Wick");
console.log(player1);

// another way shorthand

class People {
  constructor(public fname: string, public lname: string) {}

  get getName() {
    return this.fname;
  }

  set setName(newName: string) {
    if (newName) {
      this.fname = newName;
    } else {
      throw new Error("Can not empty");
    }
  }
}

const human = new People("John", "Wick");
human.setName = "William";
console.log(human.getName);

interface Colorful {
  color: string;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

const bike = new Bike("red");
console.log(bike);

// abstract class

abstract class Employee {
  constructor(public fname: string, public lname: string) {}

  abstract getID(): void;
  getName() {
    console.log("Hello");
  }
}

class FullTimeEmployee extends Employee {
  getID(): void {
    console.log("Hello Guys!");
  }

  constructor(public fname: string, public lname: string, private age: number) {
    super(fname, lname);
  }

  get getAge() {
    return this.age;
  }

  getName(): void {
    console.log("haha");
  }
}

const employee = new FullTimeEmployee("Soeuk", "Sophanit", 22);
employee.getName();
console.log(employee);
