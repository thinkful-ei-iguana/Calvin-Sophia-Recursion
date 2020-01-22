// to run code use terminal and input the following line
// node src/recursion-drills.js
let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

// const walkMaze = function(
//   maze,
//   row,
//   column,
//   direction = "up",
//   path,
//   position = 0
// ) {
//   if (column < 0 || row < 0) {
//     return;
//   }
//   // wall is a variable that indicates the array width/length so the borders are known
//   if (column >= maze[0].length || row >= maze.length) {
//     return;
//   }
//   // mark an index of the area when visiting
//   path[position] = direction;
//   position++;
//   if (maze[row][column] === "e") {
//     PrintPath(maze, row, column, direction, path, position - 1);
//     console.log("Success! " + path);
//     return;
//   }
//   // track path gone in
//   // if a non valid end point is reached, position is decremented and try a new branch
//   if (maze[row][column] === " ") {
//     maze[row][column] = "x";
//     walkMaze(maze, row - 1, column, "up", path, position);
//     walkMaze(maze, row, column + 1, "right", path, position);
//     walkMaze(maze, row + 1, column, "down", path, position);
//     walkMaze(maze, row, column - 1, "left", path, position);
//   }
//   position--;
// };
// walkMaze(maze, 0, 0, "up", [], 0);
// const PrintPath = function(path, startPos, endPos) {
//   console.log("Found path to the exit: ");
//   console.log(path);
// };

const mazeAll = function(maze, position = 0, row, col, direction = "S", path) {
  if (col < 0 || row < 0) {
    return;
  }
  if (col >= maze[0].length || row >= maze.length) {
    return;
  }

  path[position] = direction;
  position++;

  if (maze[row][col] === "e") {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (maze[row][col] === " ") {
    // The current cell is free. Mark it as visited
    maze[row][col] = "s";
    // Invoke recursion to explore all possible directions
    mazeAll(maze, position, row, col - 1, "L", path); // left
    mazeAll(maze, position, row - 1, col, "U", path); // up
    mazeAll(maze, position, row, col + 1, "R", path); // right
    mazeAll(maze, position, row + 1, col, "D", path); // down
    // Mark back the current cell as free
    maze[row][col] = " ";
  }
  // Remove the last direction from the path
  position--;
};

const PrintPath = function(path, startPos, endPos) {
  console.log("Found path to the exit: ");
  console.log(path);
};

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

// function anagrams(prefix, str){
//   if(str.length <= 1){
//       console.log(`The anagram is ${prefix}${str}`);
//   } else {
//       for(let i=0; i<str.length; i++){
//           let currentLetter = str.substring(i, i+1);
//           let previousLetters = str.substring(0,i);
//           let afterLetters = str.substring(i+1);
//           anagrams(prefix+currentLetter, previousLetters+afterLetters);
//       }
//   }
// }
// function printAnagram(word){
//   //console.log(`The word for which we will find an anagram is ${word}`);
//   anagrams(' ', word);

// }

// let organization = {
// 	"Zuckerberg": {
// 		"Schroepfer": {
// 			"Bosworth": {
// 				"Steve":{},
// 				"Kyle":{},
// 				"Andra":{}
// 			},
// 			"Zhao": {
// 				"Richie":{},
// 				"Sofia":{},
// 				"Jen":{}
// 			},
// 			"Badros": {
// 				"John":{},
// 				"Mike":{},
// 				"Pat":{}
// 			},
// 			"Parikh": {
// 				"Zach":{},
// 				"Ryan":{},
// 				"Tes":{}
// 			}
// 		},
// 		"Schrage": {
// 			"VanDyck": {
// 				"Sabrina":{},
// 				"Michelle":{},
// 				"Josh":{}
// 			},
// 			"Swain": {
// 				"Blanch":{},
// 				"Tom":{},
// 				"Joe":{}
// 			},
// 			"Frankovsky": {
// 				"Jasee":{},
// 				"Brian":{},
// 				"Margaret":{}
// 			}
// 		},
// 		"Sandberg": {
// 			"Goler": {
// 				"Eddie":{},
// 				"Julie":{},
// 				"Annie":{}
// 			},
// 			"Hernandez": {
// 				"Rowi":{},
// 				"Inga":{},
// 				"Morgan":{}
// 			},
// 			"Moissinac": {
// 				"Amy":{},
// 				"Chuck":{},
// 				"Vinni":{}
// 			},
// 			"Kelley": {
// 				"Eric":{},
// 				"Ana":{},
// 				"Wes":{}
// 			}
// }}};
// */
// function traverseA(data, depth = 0) {
// 	let indent = " ".repeat(depth * 4);
// 	Object.keys(data).forEach(key => {
// 		console.log(indent + key);
// 		traverseA(data[key], depth + 1)
// 	});
// }
// //another version of the solution
// function traverseB(node, indent=0) {
// 	for (var key in node) {
// 		console.log(" ".repeat(indent), key);
// 		traverseB(node[key], indent + 4);
// 	}
// }

//Write a recursive function that prints out the binary representation of a given number.
// input: 5
//output: 101

// function binaryRep(input){
//   if(input<=0){
//       return '';
//   }
//   let binary = Math.floor(input%2);
//   return binaryRep(Math.floor(input/2)) + binary

// }

// function main(){
//   let base = 10;
//   let exponent = 2;
//   let exponentNeg = -2;
//   let str = 'tauhida'
//   let triNum = 5;
//   let myString = '03/14/2019';
//   let seperator = '/';

//   let myMaze = [
//       [' ', ' ', ' ', '*', ' ', ' ', ' '],
//       ['*', '*', ' ', '*', ' ', '*', ' '],
//       [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//       [' ', '*', '*', '*', '*', '*', ' '],
//       [' ', ' ', ' ', ' ', ' ', ' ', 'e']
//   ];
//   let mySmallMaze = [
//       [' ', ' ', ' '],
//       [' ', '*', ' '],
//       [' ', ' ', 'e']
//   ];
//   let path = [];
//   let word = 'east'

//   let organization = {
//   "Zuckerberg": {
//     "Schroepfer": {
//       "Bosworth": {
//         "Steve":{},
//         "Kyle":{},
//         "Andra":{}
//       },
//       "Zhao": {
//         "Richie":{},
//         "Sofia":{},
//         "Jen":{}
//       },
//       "Badros": {
//         "John":{},
//         "Mike":{},
//         "Pat":{}
//       },
//       "Parikh": {
//         "Zach":{},
//         "Ryan":{},
//         "Tes":{}
//       }
//     },
//     "Schrage": {
//       "VanDyck": {
//         "Sabrina":{},
//         "Michelle":{},
//         "Josh":{}
//       },
//       "Swain": {
//         "Blanch":{},
//         "Tom":{},
//         "Joe":{}
//       },
//       "Frankovsky": {
//         "Jasee":{},
//         "Brian":{},
//         "Margaret":{}
//       }
//     },
//     "Sandberg": {
//       "Goler": {
//         "Eddie":{},
//         "Julie":{},
//         "Annie":{}
//       },
//       "Hernandez": {
//         "Rowi":{},
//         "Inga":{},
//         "Morgan":{}
//       },
//       "Moissinac": {
//         "Amy":{},
//         "Chuck":{},
//         "Vinni":{}
//       },
//       "Kelley": {
//         "Eric":{},
//         "Ana":{},
//         "Wes":{}
//       }
// }}};
//   let num = 25;

//   let fibSeq = 7;
//   let arr = [];

//   let factNum = 4;

//   countSheep(3);
//   console.log(powerCalculatorRec(base, exponent));
//   console.log(powerCalculatorRec(base, exponentNeg));
//   console.log(reverseString(str));
//   console.log(triangle(triNum))

//   console.log(split(myString, seperator))

//   for (let i=1; i<=fibSeq; i++){
//       arr.push(fibonacci(i))
//     }
//   console.log(arr);

//   console.log(factorial(factNum))

//   maze(myMaze,0,0, 0, 'S', path);
//   mazeAll(myMaze,0,0, 0, 'S', path);

//   printAnagram(word);

//   traverseA(organization);

//   console.log(binaryRep(num))

// }

// main();
