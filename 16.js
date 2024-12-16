/**
 * The elves are working hard to clear paths filled with magical snow ❄️. This snow has a special property: 
 * if two identical and adjacent snow piles are found, they disappear automatically.
 * 
 * Your task is to write a function to help the elves simulate this process. The path is represented by a 
 * string and each snow pile by a character
 * 
 * You need to remove all adjacent snow piles that are the same until no more moves are possible.
 */

/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  let i = 0, prevS = s;

  while(i < s.length) {
    prevS = s;
    s = s.replaceAll(`${s[i]}${s[i]}`, '');
    i += prevS !== s ? 0 : 1;
  }

  return s;
}

function removeSnowInvoker(params) {
  return removeSnow(params.s);
}

const test = require('./test.js');
const { doTest } = test;

doTest(removeSnowInvoker, { s: 'zxxzoz' }, 'oz');
doTest(removeSnowInvoker, { s: 'abcdd' }, 'abc');
doTest(removeSnowInvoker, { s: 'zzz' }, 'z');
doTest(removeSnowInvoker, { s: 'a' }, 'a');
doTest(removeSnowInvoker, { s: 'azxxzy' }, 'ay');