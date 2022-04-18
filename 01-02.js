const arrLesson = [{
    name: 'Alex',
    age: 33,
    carma: 100
}, {
    name: 'Igor',
    age: 43,
    carma: 100
}, {
    name: 'Marry',
    age: 31,
    carma: 150
}];

// const filter = (arr, boolFn) => {
//     const result = [];
//     for (let item of arr) {
//         if (boolFn(item)) {
//             result.push(item);
//         }
//     }
//     return result;
// }
//
// console.log(filter(arrLesson, x => x.carma < 120));

// const findArr = (arr, fn) => {
//     for (let item of arr) {
//         if (fn(item)) {
//             return item;
//         }
//     }
// }
//
// console.log(findArr(arrLesson, x => x.name === 'Alex'));

// const indexOf = (arr, item) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (item === arr[i]) {
//             return i;
//         }
//     }
//     return -1;
// }
//
// console.log(indexOf([1, 2, 4, 6, 7], 2));

const spliceArr = (arr, indexStart, amount) => {
    if (amount === 0) {
        return arr;
    } else {
        const resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i !== indexStart) {
                resultArr.push(arr[i])
            } else {
                i += (amount - 1);
            }
        }
        return resultArr;
    }
}

console.log(spliceArr([0, 1, 2, 3, 4, 5], 0, 0));