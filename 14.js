/**
 * Reindeer need to move to occupy the stables, but there cannot be more than one reindeer per stable. 
 * Additionally, to keep the reindeer comfortable, we must minimize the total distance they travel to get settled.
 * 
 * We have two parameters:
 *    reindeer: An array of integers representing the positions of the reindeer
 *    stables: An array of integers representing the positions of the stables.
 * 
 * Each reindeer must be moved from its current position to a stable. However, it is important to note 
 * that there can only be one reindeer per stable.
 * 
 * Your task is to calculate the minimum number of moves needed for all the reindeer to end up in a stable.
 * 
 * Note: Keep in mind that the stables array will always be the same size as the reindeer array and that the 
 * stables will always be unique.
 */

/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  let a, b;
  let i = 0, sum = 0, count = reindeer.length;

  while (i < count) {
    a = reindeer.splice(reindeer.indexOf(Math.min(...reindeer)), 1)[0];
    b = stables.splice(stables.indexOf(Math.min(...stables)), 1)[0];

    sum += Math.abs(a - b);

    i++;   
  }

  return sum;
}

function minMovesToStablesInvoker(params) {
  return minMovesToStables(params.reindeer, params.stables);
}

const test = require('./test.js');
const { doTest } = test;

doTest(minMovesToStablesInvoker, { reindeer: [2, 6, 9], stables: [3, 8, 5] }, 3);
doTest(minMovesToStablesInvoker, { reindeer: [1, 1, 3], stables: [1, 8, 4] }, 8);