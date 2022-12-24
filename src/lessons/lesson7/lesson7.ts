console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
    _name: string
    constructor(name: string) {
        this._name = name;
    }
    walk() {
        return `${this._name} walking`;
    }
    eat() {
        return `${this._name} eating`;
    }
    sleep() {
        return `${this._name} sleeping`;
    }
}

let cat = new Animal('Cat');
// console.log(cat.eat(), cat.sleep(), cat.walk());


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

class Monkey extends Animal {
    constructor(name: string = 'Monkey') {
        super(name);
    }
    roar() {
        return `${this._name} roaring`;
    }
    climb() {
        return `${this._name} climbing`;
    }
}

let monkey = new Monkey();
// console.log(monkey.sleep(), monkey.climb());


//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

class Human extends Monkey {
    constructor(name: string = 'Human') {
        super(name);
    }
    speak() {
        return `${this._name} speaking`;
    }
    think() {
        return `${this._name} thinking`;
    }
}
let human = new Human();
// console.log(human.eat(), human.climb(), human.think());

let animalPrototype = Object.getPrototypeOf(cat);
let monkeyPrototype = Object.getPrototypeOf(monkey);

console.dir(monkeyPrototype);

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind


// just a plug
export default () => {};