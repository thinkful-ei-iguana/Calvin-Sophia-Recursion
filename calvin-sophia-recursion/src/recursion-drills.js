// to run code use terminal and input the following line
// node src/recursion-drills.js
let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

const walkMaze = function(
  maze,
  row,
  column,
  direction,
  path = [],
  position = 0
) {
  if (maze[row][column] === "e") {
    return console.log("Exit found" + stepsTaken);
  }
  // wall is a variable that indicates the array width/length so the borders are known
  if (column >= maze[0].length || row >= maze.length) {
    return;
  }
  // mark an index of the area when visiting
  path[position] = direction;
  position++;
  // track path gone in
  // if a non valid end point is reached, position is decremented and try a new branch
  if (maze[row][column] === " ") {
    maze[row][column] = "x";
    walkMaze(right);
    walkMaze(down);
    walkMaze(left);
    walkMaze(up);
  }
  position--;

  // Go North: (x,y) -> (x,y-1)
  // Go East: (x,y) -> (x+1,y)
  // Go South: (x,y) -> (x,y+1)
  // Go West: (x,y) -> (x-1,y)
};
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split).
// Don't use JS array's split function to solve this problem.

//Fibonacci Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13.
//The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// const walkMaze = function(maze, separator = "*") {
//   // separator = positions in maze that are unable to move into
//   // mazeDone is says to return out of the maze and call pathToExit
//   let mazeDone = ["e"];
//   // startingPosition is the rows starting point
//   let startingPosition = maze[0];
//   // currentPosition = current position in the maze
//   let currentPosition = [maze];
//   // open = empty strings that are adjacent
//   let open = !separator && !columnEdges && !rowEdges;
//   // pathToExit is the path from start of maze to the exit
//   let pathToExit = [];

// Go North: (x,y) -> (x,y-1)
// Go East: (x,y) -> (x+1,y)
// Go South: (x,y) -> (x,y+1)
// Go West: (x,y) -> (x-1,y)

//   // right
//   if (currentPosition + 1 === open) {
//     currentPosition++
//   }
//   // down
//   // left
//   // up
//   if (currentPosition + walkMaze(right) === mazeDone) {
//     return mazeDone(pathToExit);
//   } else if (currentPosition + walkMaze(down))

// if loop tries going right first, then down, then left, then up, if stuck retraces steps until first open position.

// stuck (if stuck, reverse order and try first open direction that doesn't include pastPosi).

//currentPosition and pastposition
//separator asterisk
//parameters: position, blocker
//be aware of adjacent squares
//array of adjacent squares
//let adjs = []
// };

// const stringSplit = function(strArr, separator) {
//   if (strArr.length === 1) {
//     console.log("Base case");
//     return strArr[0];
//   }
//   let index = strArr.indexOf(separator);
//   if (index < 0) {
//     return [strArr];
//   }
//   let indexSlice = strArr.slice(0, index);
//   let leftOvers = strArr.slice(index + separator.length);
//   return [indexSlice].concat(stringSplit(leftOvers, separator));
//   const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);
// };

exitMaze();

// parameters begin counting at 0.
// first parameter is which row you are on.
// second parameter is which column you are on.

// const factorial = function (num) {
//   if( num == 0) {
//     return 1
//   }

//   return num * factorial(num - 1);
// }

// console.log(factorial(7));

// const fibo = function (num) {
//   if(num < 2) {
//     return num;
//   }

//   return fibo(num - 1) + fibo(num - 2);
// }

// console.log(fibo(7));

// const stringSplit = function(strArr, separator) {
//   if (strArr.length === 1) {
//     console.log("Base case");
//     return strArr[0];
//   }
//   let index = strArr.indexOf(separator);
//   if (index < 0) {
//     return [strArr];
//   }
//   let indexSlice = strArr.slice(0, index);
//   let leftOvers = strArr.slice(index + separator.length);
//   return [indexSlice].concat(stringSplit(leftOvers, separator));
//   const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);
// };

// const strArr = "02/20/2020";
// console.log(stringSplit(strArr, "/"));
// '02/20/2020'.indexOf('/');
// 2
// '2020'.indexOf('/')
// -1
// string.slice(0, 2)
// 02

// expected Output: ["02", "20", "2020"]

// const sumOf = function(list) {
//   if (list.length === 1) {
//     console.log("All sheep jumped over the fence");
//     return list[0];
//   }
//   console.log("Another sheep jumps over the fence");
//   return list[0] + sumOf(list.slice(1));
// };
// let lst = [1, 2, 3];
// console.log(sumOf(lst));

// const tri = function(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return n + tri(n - 1);
// };

// tri(4);

// const reverseString = function(str) {
//   let newString = "";

//   if (str === "") {
//     return "";
//   }

//   return reverseString(str.slice(1)) + str.charAt(0);
// };

// reverseString("hello world");

//cat
//tac
// let list = 3;

// const countSheep = function(input) {
//   if (input === 0) {
//     console.log("All sheeps have jumped over the fence");
//     return input;
//   }
//   console.log(`${input} : Another Sheep jumps over the fence`);

//   return countSheep(input - 1);
// };

// console.log(countSheep(list));

// function App() {
//   const powerCalculator = function(a, b) {
//     if (b === 1) {
//       return 1;
//     }
//     if (b < 0) {
//       return "Exponent should be a positive value";
//     }
//     // if (b > 1) {
//     //   b--;
//     // }
//     return a * a * powerCalculator(a, b - 1);
//     // return a ** b;
//   };
//   let a = 10;
//   let b = 2;
//   console.log(a);
//   console.log(b);
//   console.log(powerCalculator(a, b));

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
// }

// App();
