const user = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Nick', 'John']
};

const students = [
    {
        id: '123',
        name: 'Alex',
        address: {
            city: {title: 'Brest'},
            numOfHouse: 32
        },
        rating: 135,
        isActive: true,
        skills: ['react', 'js']
    },
    {
        id: '1234',
        name: 'Marry',
        address: {
            city: {title: 'Brest'},
            numOfHouse: 32
        },
        rating: 180,
        isActive: true,
        skills: ['react', 'js', 'ts']
    },
    {
        id: '12345',
        name: 'Andrej',
        address: {
            city: {title: 'Minsk'},
            numOfHouse: 105
        },
        rating: 200,
        isActive: false,
        skills: ['react', 'js', 'ts', 'java']
    }
];

// 1
let copyUser = {...user};

// console.log(user === copyUser);
// console.log(user.friends === copyUser.friends);

// 2
let deepCopyUser = {...user, friends: [...user.friends]};

// console.log(user === deepCopyUser);
// console.log(user.friends === deepCopyUser.friends);

// 3
let copyStudents = [...students];

// console.log(students === copyStudents);
// console.log(students[0] === copyStudents[0]);

// 4
let deepCopyStudents = students.map(s => ({...s, address: {...s.address, city: {...s.address.city}}, skills: [...s.skills]}));

// console.log(students === deepCopyStudents);
// console.log(students[0] === deepCopyStudents[0]);
// console.log(students[0].address.city === deepCopyStudents[0].address.city);
// console.log(students[0].skills === deepCopyStudents[0].skills);

// 5
let deepCopyStudentsSortByName = [...deepCopyStudents].sort((a, b) => a.name < b.name ? -1 : 1);

// console.log(deepCopyStudentsSortByName === deepCopyStudents);
// console.log(deepCopyStudents[2] === deepCopyStudentsSortByName[1]);

// 5a
let sortByRating = [...deepCopyStudents].sort((a,b) => b.rating-a.rating);

// console.log(sortByRating === deepCopyStudents);
// console.log(deepCopyStudents[2] === sortByRating[0]);

// 6
let bestStudents = deepCopyStudents.filter(s => s.rating > 150);

// console.log(bestStudents === deepCopyStudents);
// console.log(bestStudents.length === 2);

// 6a
let bestStudentsBySplice = [...deepCopyStudents].sort((a, b) => b.rating - a.rating).splice(0, 2);

// console.log(deepCopyStudents.length === 3);
// console.log(bestStudentsBySplice.length === 2);

// 6b
let newDeepCopyStudents = [...deepCopyStudents, ...bestStudentsBySplice];

// console.log(newDeepCopyStudents.length === 5);
// console.log(newDeepCopyStudents[4].name === 'Marry');

// 7
let activeStudents = deepCopyStudents.filter(s => s.isActive);

// console.log(activeStudents === deepCopyStudents);
// console.log(activeStudents.length === 2);

// 8
let arrNamesOfStudents = deepCopyStudents.map(s => s.name);

// console.log(arrNamesOfStudents.length === 3);
// console.log(arrNamesOfStudents[0] === 'Alex');

// 8a
let namesOfStudentsToString = arrNamesOfStudents.join();

// console.log(namesOfStudentsToString === 'Alex,Marry,Andrej');

// 9
let newLifeOfStudent = deepCopyStudents.map(s => ({...s, isMarried: true}));

// console.log(newLifeOfStudent[0].isMarried === true);
// console.log(newLifeOfStudent.length === 3);

// 10
let studentsAfterSummer = deepCopyStudents.map(s => s.name === 'Marry' ? {...s, isActive: false} : s);

// console.log(studentsAfterSummer[1].isActive === false);

// 11
let alex = deepCopyStudents.find(s => s.name === 'Alex');

// console.log(typeof alex === 'object');
// console.log(alex.name === 'Alex');

// 12
let bestStudent = deepCopyStudents.reduce((acc, s) => acc.rating < s.rating ? s : acc);

// console.log(bestStudent);


// 13
let sumRating = deepCopyStudents.reduce((acc, s) => acc + s.rating, 0);

// console.log(typeof sumRating === 'number');
// console.log(sumRating);

// 14
const addFriends = (students) => students.map((st, indexOfSt, arrOfSt) => ({...st, friends: arrOfSt.map(s => s.name).filter(f => f !== st.name)}));

let studentsWithFriends = addFriends(deepCopyStudents);

console.log(studentsWithFriends === deepCopyStudents);
console.log(studentsWithFriends[0].friends[0] === 'Marry');
console.log(studentsWithFriends[0].friends.length === 2);

