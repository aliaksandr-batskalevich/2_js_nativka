import {MouseEvent} from 'react'

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// const pr1 = new Promise((res, rej) => {
//     console.log("Promise is created");
// });


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// Promise.resolve('Promise Data').then(console.log);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
// Promise.reject('Promise Error').catch(console.error);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// new Promise((res, rej) => {
//     setTimeout((text: string) => {
//         res(text);
//     }, 3000, 'Promise Data after 3s')
// }).then(console.log)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

console.log('Task5');

type ResolveType = ((argument?: any) => void) | null
type RejectType = ((argument?: any) => void) | null
type handlePromiseType = {
    promise: null | Promise<any>
    resolve: ResolveType
    reject: RejectType
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}

const handlePromise: handlePromiseType = {
    promise: null,
    resolve: null as ResolveType,
    reject: null as RejectType,
    onSuccess(paramName: string) {
        console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError(paramName: string) {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
};

export const universalFn = (event: MouseEvent<HTMLButtonElement>): void => {

    // @ts-ignore
    if (event.target.id === 'btn-create-promise') {
        handlePromise.promise = new Promise<any>((res, rej) => {
            console.log('Promise is creating!!!');
            handlePromise.resolve = res;
            handlePromise.reject = rej;
        })
            .then(response => handlePromise.onSuccess(response))
            .catch(error => handlePromise.onError(error));
    }
    // @ts-ignore
    if (event.target.id === 'btn-resolve-promise') {
        handlePromise.resolve
        && handlePromise.resolve('RESOLVE');
    }
    // @ts-ignore
    if (event.target.id === 'btn-reject-promise') {
        handlePromise.reject
        && handlePromise.reject('REJECT');
    }
};

export const createPromiseHandler = () => {
    handlePromise.promise = new Promise<any>((res, rej) => {
        console.log('Promise is creating!!!');
        handlePromise.resolve = res;
        handlePromise.reject = rej;
    })
        .then(response => handlePromise.onSuccess(response))
        .catch(error => handlePromise.onError(error));
};
export const resolvePromiseHandler = () => {
    handlePromise.resolve
    && handlePromise.resolve('RESOLVE');
};
export const rejectPromiseHandler = () => {
    handlePromise.reject
    && handlePromise.reject('REJECT');
};


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


new Promise<any>(res => {
    setTimeout(res, 1000, 'My name is ');
})
    .then(result => onSuccess(result))
    .then(result => print(result))

const onSuccess = (arg: string) => {
    return arg + 'Sasha'
};
const print = (arg: string) => {
    console.log(arg)
}

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let pr1 = new Promise(res => {
    setTimeout(res, 2000, {name: "Anna"});
});
let pr2 = new Promise(res => {
    setTimeout(res, 3000, {age: 18});
});
let pr3 = new Promise(res => {
    setTimeout(res, 4000, {city: ''})
});
Promise.all<any>([pr1, pr2, pr3]).then(result => {
    console.log({...result[0], ...result[1], ...result[2]})
})

// just a plug
export default () => {
};