const arr = [
    {id: 1, name: 'Alex', age: 33},
    {id: 2, name: 'Marry', age: 31},
    {id: 3, name: 'Olga', age: 25}
]

const arr1 = arr.filter(el => el.age>30);
console.log(arr1.length);


const fnFilterAge = (arrIn, age) => {
    let arrOut = [];

    for (let i = 0; i < arrIn.length; i++) {
        if (arrIn[i].age > age) {
            arrOut.push(arrIn[i]);
        }
    }

    return arrOut
};
console.log(fnFilterAge(arr, 30).length);

