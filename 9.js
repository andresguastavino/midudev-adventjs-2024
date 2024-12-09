/**
 * The elves are playing with a magical train 🚂 that carries gifts. This train moves on a board represented by an array of strings. 
 * 
 * The train consists of an engine (@), followed by its carriages (o), and must collect magical fruits (*) which serve as fuel. The movement of the train follows these rules:
 * 
 * You will receive two parameters board and mov.
 * 
 * board is an array of strings that represents the board:
 *    @ is the train's engine
 *    o are the train's carriages
 *    * is a magical fruit
 *    · are empty spaces
 * 
 * mov is a string that indicates the next movement of the train from the train's head @:
 *    'L': lef
 *    'R': righ
 *    'U': u
 *    'D': down.
 * 
 * With this information, you must return a string:
 *    'crash': If the train crashes into the edges of the board or itself
 *    'eat': If the train collects a magical fruit (*)
 *    'none': If it moves without crashing or collecting any magical fruit.
 */

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const rowLength = board[0].length;
  const joinedBoard = board.join('');

  const headIndex = joinedBoard.indexOf('@');
  const row = Math.floor(headIndex / rowLength);
  const col = headIndex % rowLength;

  const rowDisplacement = mov === 'U' ? row - 1 : mov === 'D' ? row + 1 : row;
  const colDisplacement = mov === 'L' ? col - 1 : mov === 'R' ? col + 1 : col;

  const newHeadCol = board[rowDisplacement];
  const newHeadPos = newHeadCol !== undefined ? newHeadCol[colDisplacement] : undefined;
  const crash = newHeadPos === undefined || newHeadPos === 'o';
  const fruit = newHeadPos === '*';

  return crash ? 'crash' : fruit ? 'eat' : 'none';
}

const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right

console.log(moveTrain([
  "·····",
  "··*··",
  "··.··",
  "··o··",
  "··@··"
], 'D'))
// ➞ 'crash'
// The train moves to the right and there is empty space on the right

console.log(moveTrain([
  "·····",
  "··*··",
  "··@··",
  "··o··",
  "··o··"
], 'D'))
// ➞ 'crash'
// The train moves to the right and there is empty space on the right

console.log(moveTrain([
  "··@··",
  "··o··",
  "·*o··",
  "··o··",
  "··o··"
], 'U'))
// ➞ 'crash'
// The train moves to the right and there is empty space on the right

console.log(moveTrain([
  "·····",
  "··@··",
  "··*··",
  "·····",
  "·····"
], 'D'))
// ➞ 'eat'
// The train moves to the right and there is empty space on the right
