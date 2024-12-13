/**
 * The elves at the North Pole have created a special robot 🤖 that helps Santa Claus distribute gifts inside a 
 * large warehouse. The robot moves on a 2D plane and we start from the origin (0, 0).
 * 
 * We want to know if, after executing a series of movements, the robot returns to exactly where it started.
 * 
 * The robot's basic commands are:
 *    L: Move to the lef
 *    R: Move to the righ
 *    U: Move upward
 *    D: Move downwards
 * 
 * But it also has certain modifiers for the movements:
 *    !: The next movement is inverted (e.g., R!L is considered as RR)
 *    *: The movement is done with double intensity (e.g., *R means RR)
 *    ?: The next movement is done only if it hasn't been done before (e.g., R?R means R)
 *  
 * Note: When the movement is inverted with ! the inverted movement is counted and not the original one. For example, !U?U inverts the U movement, so it counts as having done the D movement but not the U. Thus, !U?U translates to D?U, and therefore, the final U movement is done.
 * 
 * You must return:
 *    true: if the robot returns exactly to where it starte
 *    [x, y]: if the robot does not return to where it started, return the position where it stopped
 */

/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  const matrix = [ 0, 0 ];
  const movsArr = moves.split('');
  const movToIndex = { 'R': 0, 'L': 0, 'U': 1, 'D': 1 };
  const movToValue = { 'R': 1, 'L': -1, 'U': 1, 'D': -1 };
  const movToOpposite = { 'R': 'L', 'L': 'R', 'U': 'D', 'D': 'U' };

  let i = 0;
  while (i < movsArr.length) {
    switch (movsArr[i]) {
      case '!':
        movsArr[i + 1] = movToOpposite[movsArr[i + 1]];
        i++;
        break;
      case '*':
        movsArr.splice(i + 1, 0, movsArr[i + 1]);
        i++;
        break;
      case '?':
        i += movsArr.slice(0, i).includes(movsArr[i + 1]) ? 2 : 1;
        break;
    }
    matrix[movToIndex[movsArr[i]]] += movToValue[movsArr[i]];
    i++;
  }

  return matrix[0] === matrix[1] && matrix[0] === 0 ? true : matrix;
}

function isRobotBackInvoker(params) {
  return isRobotBack(params.moves);
}

const test = require('./test.js');
const { doTest } = test;

// doTest(isRobotBackInvoker, { moves: 'R' }, [1, 0]);
// doTest(isRobotBackInvoker, { moves: 'RL' }, true);
// doTest(isRobotBackInvoker, { moves: 'RLUD' }, true);
// doTest(isRobotBackInvoker, { moves: '*RU' }, [2, 1]);
// doTest(isRobotBackInvoker, { moves: 'R*U' }, [1, 2]);
// doTest(isRobotBackInvoker, { moves: 'LLL!R' }, [-4, 0]);
// doTest(isRobotBackInvoker, { moves: 'R?R' }, [1, 0]);
// doTest(isRobotBackInvoker, { moves: 'U?D' }, true);
// doTest(isRobotBackInvoker, { moves: 'R!L' }, [2, 0]);
// doTest(isRobotBackInvoker, { moves: 'U!D' }, [0, 2]);
// doTest(isRobotBackInvoker, { moves: 'R?L' }, true);
// doTest(isRobotBackInvoker, { moves: 'U?U' }, [0, 1]);
// doTest(isRobotBackInvoker, { moves: '*U?U' }, [0, 2]);
doTest(isRobotBackInvoker, { moves: 'U?D?U' }, true);