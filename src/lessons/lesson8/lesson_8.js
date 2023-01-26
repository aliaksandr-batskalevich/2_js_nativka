// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]

// const str = 'fgfggg';
// console.log(str[0]);

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4

// eslint-disable-next-line no-extend-native
Number.prototype.minus = function (num) {
    return this - num;
};
// eslint-disable-next-line no-extend-native
Number.prototype.plus = function (num) {
    return this + num;
};
// console.log((2).plus(3).minus(1));

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'

const customConCat = (del, ...rest) => rest.join(del);
// console.log(customConCat('*', '1', 'b', '1c'));

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
    valueNode: 3,
    next: [
        {
            valueNode: 1,
            next: null
        },
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        },
        {
            valueNode: 2,
            next: [
                {
                    valueNode: 1,
                    next: null
                },
                {
                    valueNode: 5,
                    next: null
                }
            ]
        }]
};

const superSumRec = (tree) => {
    if (!tree.next) return tree.valueNode;
    return tree.next.reduce((acc, el) => acc + superSumRec(el), tree.valueNode);
};
const superSumIter = (tree) => {
    let sum = tree.valueNode;
    if (Array.isArray(tree.next)) {
        for (let i = 0; i < tree.next.length; i++) {
            let el = tree.next[i];
            sum += el.valueNode;
            if (Array.isArray(el.next)) {
                let inner = el.next;
                for (let j = 0; j < inner.length; j++) {
                    sum += inner[j].valueNode;
                }
            }
        }
    }
    return sum;
};
// console.log(superSumIter(tree));


// Task 5
// исправить код, что бы работал правильно

// for (var i = 0; i < 10; i++) {
// 	setTimeout(function (value) {
// 		console.log(value);
// 	}, 100, i);
// }

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало
function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

// function Foo(Book, 'Учебник javascript', 'Петр Сергеев')
function Foo(constr, ...rest) {
    return new constr(...rest);
}

var book = Foo(Book, 'js', 'petr');
// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
function sum(...rest) {
    if (rest.length === 2) {
        return rest[0] + rest[1];
    }
    return (num) => sum(...rest, num);
}

// console.log(sum(2, 3));

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8
const corSum = (start) => {
    let sum = start;
    let maker = (x) => {
        if (x) {
            sum += x;
            return maker;
        }
        return sum;
    }
    return maker;
}
// console.log(corSum(0)(3)(1)(5)());

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали
// seven(plus(one())) -> 8
// five(minus(two())) -> 3
const one = (fn) => fn ? fn(1) : 1;
const two = (fn) => fn ? fn(2) : 2;
const five = (fn) => fn ? fn(5) : 5;
const seven = (fn) => fn ? fn(7) : 7;
const plus = (num2) => (num1) => num1 + num2;
const minus = (num2) => (num1) => num1 - num2;
// console.log(seven(plus(one())));
// console.log(five(minus(two())));

// Task 10
// Реализовать функцию сортировки массива пузырьком
const bubbleSort = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 1; i < arr.length - j; i++) {
            if (arr[i - 1] > arr[i]) {
                // action
                arr[i - 1] += arr[i];
                arr[i] = arr[i - 1] - arr[i];
                arr[i - 1] -= arr[i];
            }
        }
    }
    return arr;
};
;
;
// console.log(bubbleSort([3,8,1,0,6,9,-1]))

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
const bracketValidator = (str) => {
    let countObj = {};
    let result = true;

    let rules = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    let opened = Object.keys(rules);
    let closed = Object.values(rules);

    let keys = [...opened, ...closed];
    for (const key of keys) {
        countObj[key] = str.split('').filter(el => el === key).length;
    }

    for (const openKey of opened) {
        result = result && countObj[openKey] === countObj[rules[openKey]];
    }
    return result;
};
// console.log(bracketValidator('()'));

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
const uniqArr = (arr) => [...new Set(arr)];
// console.log(uniqArr([1,1,2,3,4,5,6,3,5]));

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]
const doubleNum = (arr) => arr.map(el => el ? el * 2 : null).filter(el => el);
// console.log(doubleNum([1, 2, null, 7, 8, null, 3]));

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 4},
                {value: 5},
            ]
        },
        {
            value: 3,
            children: [
                {value: 6},
                {value: 7},
            ]
        }
    ]
};
const valuesToArr = (obj, arr = []) => {
    arr.push(obj.value);
    if (obj.children) {
        let innerArr = obj.children.map(ch => valuesToArr(ch)).flat();
        arr = [...arr, ...innerArr];
    }
    return arr.sort((a, b) => a - b);
}
// console.log(valuesToArr(tree2));

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14  // -> 28
const treeSum = (obj) => {
    let sum = 0;
    sum += obj.value;
    if (obj.children) {
        sum += obj.children.reduce((acc, el) => acc + treeSum(el), 0);
    }

    return sum;
};
// console.log(treeSum(tree2));

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

function Bomb(timeSec, value) {
    this.time = timeSec;
    this.value = value;

    setTimeout((value) => {
        alert(value);
    }, this.time * 1000, this.value);
}

// let bomb = new Bomb(10, 'Yo!');


// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
const shakeMaker = str => {
    let strArr = [];
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            strArr.push(str[i]);
        } else {
            strArr.push(strArr[i - 1].trim() === str[i] ? str[i] : ` ${str[i]}`);
        }
    }
    let answer = strArr
        .join('')
        .split(' ')
        .map(el => el.length === 1 ? el : `${el[0]}${el.length}`)
        .join('');
    return answer;
}
// console.log(shakeMaker('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
const isSorted = arr => arr.join('') === arr.sort((a, b) => a - b).join('');
// console.log(isSorted([1,2,3,11,4,5,6,7,77]));

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined
const missing = arr => arr.length
    ? [...Array(arr.length)]
        .fill(Math.min(...arr))
        .map((el, index) => el + index)
        .filter(el => !arr.includes(el))[0]
    : undefined;
// console.log(missing([5, 1, 4, 2]))

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

class LinkedList {
    constructor(...rest) {
        for (const restElement of rest) {
            this[restElement] = restElement;
        }
    }
    add(addNum) {
        this[addNum] = addNum;
    }
    has(hasNum) {
        return hasNum === this[hasNum];
    }
}
let list = new LinkedList(1, 2, 3);
// console.log(list.add(4));
// console.log(list.add(5));
// console.log(list.has(1));
// console.log(list.has(4));
// console.log(list.has(6));

// Task 21
// Что выведет консоль?

// Promise
// 	.resolve()
// 	.then(() => console.log(1))
// 	.then(() => console.log(2))
// 	.then(() => console.log(3));
//
// Promise
// 	.resolve()
// 	.then(() => console.log(4))
// 	.then(() => console.log(5))
// 	.then(() => console.log(6));