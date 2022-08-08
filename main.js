

class Person {

  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    let para = document.getElementById('para');
    para.innerHTML = `Hi, I'm ${this.name}`;
  }
}

const alexi = new Person('Alexi');

alexi.introduceSelf();

class Animal {

  sleep() {
    let para2 = document.getElementById('para2');
    para2.innerHTML = "I'm sleepyyyyy";
  }

}

const spot = new Animal();

spot.sleep();


class Professor extends Person {

  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    let para3 = document.getElementById('para3');
    let intro = `My name is ${this.name}, and I will be your ${this.teaches} professor.`;
    para3.append(intro);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    let para4 = document.getElementById('para4');
    para4.append(grade);
  }

}

const natalie = new Professor('Natalie', 'Coach');
natalie.introduceSelf();

natalie.grade('my paper');


class Student extends Person {

  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    let para5 = document.getElementById('para5');
    let intro2 = `Hi, I'm ${this.name}, and I'm in year ${this.#year}.`;
    para5.append(intro2);
  }

  canStudyArchery() {
    return this.#year > 1;
  }

}

const summers = new Student('Summers', 2);

summers.introduceSelf();

summers.canStudyArchery();



class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    let result = this.sides * this.sideLength;
    console.log(result);
  }

}



class Square extends Shape {
  
  constructor(name, sides, sideLength) {
    super.name = 'square';
    super.sides = 4;
    super.sideLength = sideLength;
    
  }

  calcArea() {
    let result2 = this.sides * this.sideLength;
    console.log(result2);
  }

}

const square = new Shape(this.name, this.sides, 4);

square.calcPerimeter();
square.calcArea();