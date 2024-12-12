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

function moveTrainInvoker(params) {
  return moveTrain(params.board, params.mov);
}

const test = require('./test.js');
const { doTest } = test;

doTest(moveTrainInvoker, { board: ['·····', '*····', '@····', 'o····', 'o····'], mov: 'U' }, 'eat');
doTest(moveTrainInvoker, { board: ['·····', '*····', '@····', 'o····', 'o····'], mov: 'D' }, 'crash');
doTest(moveTrainInvoker, { board: ['·····', '*····', '@····', 'o····', 'o····'], mov: 'L' }, 'crash');
doTest(moveTrainInvoker, { board: ['·····', '*····', '@····', 'o····', 'o····'], mov: 'R' }, 'none');
doTest(moveTrainInvoker, { board: ["·····","··*··","··.··","··o··","··@··"], mov: 'D' }, 'crash');
doTest(moveTrainInvoker, { board: ["·····","··*··","··@··","··o··","··o··"], mov: 'D' }, 'crash');
doTest(moveTrainInvoker, { board: ["··@··","··o··","·*o··","··o··","··o··"], mov: 'U' }, 'crash');
doTest(moveTrainInvoker, { board: ["·····","··@··","··*··","·····","·····"], mov: 'D' }, 'eat');