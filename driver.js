const KnightTravails = require('./knightsTravails');

const kt = new KnightTravails();

// Test cases
console.log("Test Case 1: [0,0] to [1,2]");
kt.printPath([0, 0], [1, 2]);

console.log("\nTest Case 2: [0,0] to [3,3]");
kt.printPath([0, 0], [3, 3]);

console.log("\nTest Case 3: [3,3] to [0,0]");
kt.printPath([3, 3], [0, 0]);

console.log("\nTest Case 4: [0,0] to [7,7]");
kt.printPath([0, 0], [7, 7]);

console.log("\nTest Case 5: [3,3] to [4,3]");
kt.printPath([3, 3], [4, 3]);
