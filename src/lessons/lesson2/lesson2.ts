import {log} from "util";

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (first: number) => (second: number) => first + second;

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0;

    function counter() {
        return ++count;
    }

    return counter;
}

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounterTwo(start: number) {
    let count = start;

    function counter() {
        return count++;
    }

    return counter;
}


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(num: number) {
    if (num <= 0) return num;
    let mainArr: Array<number> = [];

    function work(...arg: Array<number>) {
        mainArr = [...mainArr, ...arg];
        if (mainArr.length >= num) {
            mainArr.length = num;
            return mainArr.reduce((acc, el) => acc + el);
        } else {
            return work
        }
    }

    return work;
}

// @ts-ignore
console.log(superSum(6)(3, 4, 5, 6)(20, 30));

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// 1st TASK
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

// function sumTo(num: number) {
//     let answer: number = 0;
//     for (let i = num; i > 0; i--) {
//         answer += i;
//     }
//     return answer;
// }

function sumTo(num: number): number {
    if (num === 1) return num;
    return num + sumTo(num - 1);
}

function sumToWithProgress(num: number): number {
    if (num === 1) return num
    let inc = num - 1
    return num + inc + sumToWithProgress(num - 1);
}

// 2nd TASK

function factorial(num: number): number {
    if (num === 1) return num;
    return num * factorial(num - 1);
}

// 3rd TASK

function fib(n: number, acc: Array<number> = [0, 1]): number {
    if (n === 1) return 1;
    if (n === acc.length - 1) {
        return acc[n];
    }
    acc.push(acc[acc.length - 1] + acc[acc.length - 2])
    return fib(n, acc);
}

function fib2(n: number): number {
    let fibArr: Array<number> = [0, 1];
    if (n === 1) return fibArr[n];
    for (let i = 2; i <= n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
    return fibArr[n];
}

function fib3(n: number): number {
    if (n <= 1) return n;
    return fib3(n - 1) + fib3(n - 2);
}

// 4th TASK
type ListType = {
    value: number
    next: ListType | null
}

let list: ListType = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list: ListType): string {
    if (!list.next) {
        return `${list.value}`;
    } else {
        return `${list.value} ${printList(list.next)}`;
    }
}

function printList1(list: ListType): void {
    alert(list.value);
    if (list.next) {
        printList1(list.next);
    } else {
        alert('It is all!!')
    }
}


function printList2(list: ListType): string {
    let values: Array<string> = [];
    let deep = 1;
    let object = list;
    for (let i = 0; i < deep; i++) {
        values.push(String(object.value));
        if (object.next) {
            deep++;
            object = object.next;
        }
    }
    return values.join(' ');
}

function printList3(list: ListType) {
    let tmp = list;
    while (tmp) {
        alert(tmp.value);
        // @ts-ignore
        tmp = tmp.next;
    }
}

function printListReverse(list: ListType): void {
    let valuesArr: Array<number> = [];

    function printListIn(list: ListType) {
        valuesArr.push(list.value);
        if (list.next) printListIn(list.next);
    }

    printListIn(list);
    valuesArr.reverse();
    for (let i of valuesArr) {
        alert(i);
    }
}

function printListReverse1(list: ListType): void {
    if (list.next) {
        printListReverse1(list.next)
    }
    alert(list.value);
}

function printListReverse2(list: ListType): void {
    let tmp: ListType | null = list;
    let arr: Array<number> = [];
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    arr.reverse();
    for (let i of arr) {
        alert(i);
    }
}


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

function customFlat(arr: Array<any>): Array<number> {

    function worker(insideArr: Array<any>) {
        for (let el of insideArr) {
            !Array.isArray(el)
                ? answer.push(el)
                : worker(el)
        }
    }

    let answer: Array<number> = [];
    for (let el of arr) {
        !Array.isArray(el)
            ? answer.push(el)
            : worker(el)
    }

    return answer;
}

function customFlat1(arr: Array<any>, acc: Array<number> = []) {
    for (let el of arr) {
       !Array.isArray(el)
           ? acc.push(el)
           : customFlat1(el, acc)
    }
    return acc;
}

console.log(customFlat1([1, 2, 3, [4, 5, [6,7],[8],[[9]], 10], 11, 12]))

// just a plug
export default () => {
};