const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaaaaaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Deep Jol'}
]

const arrName = students.map( s => s.name);
const ids = students.map(s => s.id);
console.log(arrName);
console.log(ids);

const bigger = students.filter(s => s.id>40);
console.log(bigger);