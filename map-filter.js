const numbers = [3,4,5,6,7,8];
// const output = [];

// for(let i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

function square(element){
    return element*element;
}
const result = numbers.map(function(element, index, array){
    return element * element;
})
console.log(result);

const result2 = numbers.filter(x => x>5);
console.log(result2);

const isThere = numbers.find(x => x>5);
console.log(isThere);