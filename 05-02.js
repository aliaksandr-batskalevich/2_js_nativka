let arrOfNums = [5, 66, 33, 999, 745, 1];
let arrOfString = ['a', 'm', 'w', 'b', 'b'];

const customSortFirst = (arr) => {
    let arrToReturn = [];
    while (arr.length > 1) {
        let numToSort = arr[0];
        let indexOfNum = 0;
        for (let i = 1; i < arr.length; i++) {
            if (numToSort > arr[i]) {
                numToSort = arr[i];
                indexOfNum = i;
            }
        }
        arrToReturn.push(numToSort);
        arr.splice(indexOfNum, 1);
    }
    arrToReturn.push(arr[0]);
    return arrToReturn;
};

const customSortSecond = (arr) => {
    for (let j = 0; j < arr.length - 1; j++) {
        let isSort = true;
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] > arr[i + 1]) {
                isSort = false;

                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
        if (isSort) break
    }
    return arr;
}

console.log(customSortFirst(arrOfNums));
console.log(customSortSecond(arrOfString));