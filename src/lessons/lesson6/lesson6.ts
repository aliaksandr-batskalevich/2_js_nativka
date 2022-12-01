console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// class Clock {
//     time: string
//     // @ts-ignore
//     stopID: NodeJS.Timeout
//     constructor() {
//         this.time = 'get time, please!'
//     }
//     getTime() {
//         this.time = new Date().toLocaleTimeString();
//         console.log(this.time);
//     }
//     'tik-tak' () {
//         this.stopID = setInterval(() => {
//             this.getTime()
//         }, 1000);
//     }
//     stop() {
//         clearInterval(this.stopID);
//     }
// }
//
// let now = new Clock();
// now["tik-tak"]();
// setTimeout(() => {
//     now.stop();
// }, 5000)

// class Animal {
//     name: string
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// class Rabbit extends Animal {
//     created: number
//
//     constructor(name: string) {
//         super(name);
//         this.created = Date.now();
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);

class Rabbit extends Object {
    name: string

    constructor(name: string) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.



class Student {
    name: string
    lastName: string
    numOfGroup: number
    progress: number

    constructor(name: string, lastName: string, numOfGroup: number, progress: number) {
        this.name = name;
        this.lastName = lastName;
        this.numOfGroup = numOfGroup;
        this.progress = progress;
    }

    // @ts-ignore
    static sortByProgress(studentA, studentB) {
        return studentA.progress - studentB.progress;
    }

    // @ts-ignore
    static filter45(student) {
        return student.progress === 4 || student.progress === 5;
    }

    // @ts-ignore
    static getNameAndGroup(student) {
        return `${student.lastName}, ${student.numOfGroup}`;
    }
}
let students = [
    new Student('Alex', 'Batskalevich', 1, 5),
    new Student('Marry', 'Batskalevich', 2, 5),
    new Student('Roman', 'K', 2, 4),
    new Student('Tania', 'K', 1, 3),
]

let stSortProgress = students.sort(Student.sortByProgress);
// console.log(stSortProgress);
let st45 = students.filter(Student.filter45).map(Student.getNameAndGroup);
// console.log(st45);

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

class TimeNow {
    hour: number | undefined
    minutes: number | undefined
    seconds: number | undefined

    constructor() {
        while (!this.hour) {
            let hourInput = prompt('Set hour');
            if (Number(hourInput) >= 0 && Number(hourInput) <= 24) this.hour = Number(hourInput);
        }

        while (!this.minutes) {
            let minutesInput = prompt('Set minutes');
            if (Number(minutesInput) >= 0 && Number(minutesInput) <= 60) this.minutes = Number(minutesInput);
        }

        while (!this.seconds) {
            let secondsInput = prompt('Set seconds');
            if (Number(secondsInput) >= 0 && Number(secondsInput) <= 60) this.seconds = Number(secondsInput);
        }
    }
    hourUp() {
        if (this.hour && this.hour + 1 < 24) {
            this.hour++;
        } else {
            this.hour = 0;
        }
    }
    getTime() {
        if (this.hour && this.minutes && this.seconds) {
            return `${this.hour < 10 ? `0${this.hour}` : this.hour}:${this.minutes < 10 ? `0${this.minutes}` : this.minutes}:${this.seconds < 10 ? `0${this.seconds}` : this.seconds}`
        }
    }
}
// let now = new TimeNow();
// console.log(now.getTime());

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

class Buyer {
    lastName: string | undefined
    name: string | undefined
    address: string | undefined
    number: string | undefined

    constructor(lastName: string | undefined, name: string | undefined, address: string | undefined, number: string | undefined) {
        this.lastName = lastName;
        this.name = name;
        this.address = address;
        this.number = number;
    }

    changeName(newName: string) {
        this.name = newName;
    }
    changeLastName(newLastName: string) {
        this.lastName = newLastName;
    }
    changeAddress(newAddress: string) {
        this.address = newAddress;
    }
    changeNumber(newNumber: string) {
        this.number = newNumber;
    }

    getName() {
        return this.name;
    }
    getLastName() {
        return this.lastName;
    }
    getAddress() {
        return this.address;
    }
    getNumber() {
        return this.number;
    }

    static createNewBuyer() {

    }

    // @ts-ignore
    static sortByLastName(buyerA, buyerB) {
        return buyerA.lastName < buyerB.lastName ? -1 : 1
    }

    static filterByNumber(number: number) {
        // @ts-ignore
        return (buyer) => buyer.number.split(String(number)).length > 1
    }

}

let buyersArr = [
    new Buyer('Batskalevich', 'Aliaksandr', 'Brest', '1230'),
    new Buyer('Klimovich', 'Roman', 'Brest', '7856'),
    new Buyer('Batskalevich', 'Marry', 'Brest', '1234'),
]

console.log(buyersArr);

buyersArr = buyersArr.sort(Buyer.sortByLastName);
console.log(buyersArr);

let buyersArrFilter = buyersArr.filter(Buyer.filterByNumber(123));
console.log(buyersArrFilter);

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

class Car {
    name: string
    numOfCylinders: number
    power: number

    constructor(name: string, numOfCilinders: number, power: number) {
        this.name = name;
        this.numOfCylinders = numOfCilinders;
        this.power = power;
    }

    render() {
        console.log(`Print ${this.name} - ${this.numOfCylinders} - ${this.power}`);
    }

    reName(newName: string) {
        this.name = newName;
    }
}

class Truck extends Car {
    loadCapacity: number

    constructor(name: string, numOfCylinders: number, power: number, loadCapacity: number) {
        super(name, numOfCylinders, power);
        this.loadCapacity = loadCapacity;
    }

    render() {
        console.log(`Print ${this.name} - ${this.numOfCylinders} - ${this.power} - ${this.loadCapacity}`);
    }

    reLoad (newLoad: number) {
        this.loadCapacity = newLoad;
    }
}


let carsArr = [
    new Car('Volvo XC90', 5, 185),
    new Car('Toyota Camry', 4, 135),
    new Truck('iveco', 4, 100, 2),
];

carsArr[0].reName(carsArr[0].name + ' MY!');
carsArr[0].render();
carsArr[2].reName('My Iveco');
// @ts-ignore
carsArr[2].reLoad(5);
carsArr[2].render();
console.log(carsArr);




// just a plug
export default () => {
};