class Employee {

  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;

  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  get salary() {
    return this._salary;
  }
  set salary(value) {
    this._salary = value;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, language) {
    super(name, age, salary);
    this.language = language;
  }

  get salary() {
    return + this._salary * 3;
  }
}

let prg1 = new Programmer("El", 19, 5000, "spanish");
let prg2 = new Programmer("Mike", 20, 4500, "english");
let prg3 = new Programmer("Will", 18, 4000, "french");

console.log(prg1, prg2, prg3);
