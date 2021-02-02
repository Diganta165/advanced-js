function sum(first, second){
    let res = first + second;

    if(res>9){
        const mood ="happy";
        console.log(mood);
    }
    return res;
}

const output = sum(3,7);

console.log(output);