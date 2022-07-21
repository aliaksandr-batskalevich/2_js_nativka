const arr = [
    {id: 1, name: 'Alex1'},
    {id: 2, name: 'Alex2'},
    {id: 3, name: 'Alex3'},
    {id: 4, name: 'Alex4'},
    {id: 5, name: 'Alex5'}
];

let asArr = {}

// for (let i = 0; i < arr.length; i++) {
//     asArr[`id ${arr[i].id}`] = arr[i];
// }

arr.forEach( el => {asArr[`id ${el.id}`] = el})

console.log(asArr);
console.log(arr.reduce((acc, el) => {
    acc[`id ${el.id}`] = el;
    delete acc[`id ${el.id}`].id;
    return acc;
}, {}))