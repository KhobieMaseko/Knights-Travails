
class KnightTravails {
  constructor() {
    // All possible moves a knight can make (dx, dy)
    this.moves = [
      [2, 1], [1, 2], [-1, 2], [-2, 1],
      [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
  }

  /**
   * Checks if a position is valid (within 0-7 chessboard)
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @returns {boolean} True if position is valid
   */
  isValidPosition(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  /**
   * Finds shortest path between two positions
   * @param {number[]} start - Starting position [x, y]
   * @param {number[]} end - Ending position [x, y]
   * @returns {number[][]} Array of positions in the path
   */
  knightMoves(start, end) {
    // Queue for BFS: stores [position, path]
    const queue = [[start, [start]]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
      const [currentPos, path] = queue.shift();

      // Check if we've reached the destination
      if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
        return path;
      }

      // Generate all possible moves
      for (const [dx, dy] of this.moves) {
        const newX = currentPos[0] + dx;
        const newY = currentPos[1] + dy;
        const newPos = [newX, newY];

        if (this.isValidPosition(newX, newY) && !visited.has(newPos.toString())) {
          visited.add(newPos.toString());
          queue.push([newPos, [...path, newPos]]);
        }
      }
    }

    return []; // Should never happen for valid positions
  }

  /**
   * Prints the path in a user-friendly format
   * @param {number[]} start - Starting position
   * @param {number[]} end - Ending position
   */
  printPath(start, end) {
    const path = this.knightMoves(start, end);
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach(pos => console.log(pos));
    return path;
  }
}

// Example usage:
const kt = new KnightTravails();
kt.printPath([0, 0], [3, 3]);
// Example output:
// You made it in 2 moves! Here's your path:
// [0, 0]
// [1, 2]
// [3, 3]

module.exports = KnightTravails;
