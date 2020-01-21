// to run code use terminal and input the following line
// node src/recursion-drills.js

// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.


const reverseString = function (str) {

  let newString = '';

  if(str === ''){
    return ''
  }

  return reverseString(str.slice(1)) + str.charAt(0);
}

reverseString("hello world")

//cat
//tac
let list = 3;

const countSheep = function(input) {
  if (input === 0) {
    console.log("All sheeps have jumped over the fence");
    return input;
  }
  console.log(`${input} : Another Sheep jumps over the fence`);

  return countSheep(input - 1);
};

console.log(countSheep(list));

function App() {
  const powerCalculator = function(a, b) {
    if (b === 1) {
      return 1;
    }
    if (b < 0) {
      return "Exponent should be a positive value";
    }
    // if (b > 1) {
    //   b--;
    // }
    return a * a * powerCalculator(a, b - 1);
    // return a ** b;
  };
  let a = 10;
  let b = 2;
  console.log(a);
  console.log(b);
  console.log(powerCalculator(a, b));
 


  // let sheepList = 3;

  // const countSheep = function(input) {
  //   if (input === 0) {
  //     console.log("All sheeps have jumped over the fence");
  //     return input;
  //   }
  //   console.log(`${input} : Another Sheep jumps over the fence`);

  //   return countSheep(input - 1);
  // };

  // console.log(countSheep(sheepList));
}

App();
