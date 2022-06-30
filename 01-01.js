const object = {
    name: 'ALex',
    age: 33,
    hasWife: true,
    friends: [
        {name: 'Andrej', age: 26},
        {name: 'Olga', age: 25}
    ]
};


const newObject = object;

newObject.friends[0].name = 'Petr';
console.log(object.friends[0].name);


const spreadCopyObject = {...object}

const hardCopyObject = {
    ...object,
    friends: object.friends.map(friend => ({...friend}))
}

hardCopyObject.friends[0].name = 'Nick';
console.log(object.friends[0].name);
console.log(hardCopyObject.friends[0].name);