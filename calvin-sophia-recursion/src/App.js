import React from "react";

function App() {
  const powerCalculator = function(a, b) {
    if (b === 0) {
      return 1;
    }
    return a ** b;
  };
  let a = 10;
  let b = 2;
  console.log(a);
  console.log(b);
  console.log(powerCalculator(a, b));

  let sheepList = 3;

  const countSheep = function(input) {
    if (input === 0) {
      console.log("All sheeps have jumped over the fence");
      return input;
    }
    console.log(`${input} : Another Sheep jumps over the fence`);

    return countSheep(input - 1);
  };

  console.log(countSheep(sheepList));
}

export default App;
