
let list = 3;


const countSheep = function (input) {

    if (input === 0) {
        console.log('All sheeps have jumped over the fence')
        return input;
    }
    console.log(`${input} : Another Sheep jumps over the fence`)

    return countSheep(input - 1);

}

console.log(countSheep(list))