/**
 * The grinch 👹 has passed through Santa Claus's workshop! And what a mess he has made. 
 * He has changed the order of some packages, so shipments cannot be made.
 * 
 * Luckily, the elf Pheralb has detected the pattern the grinch followed to jumble them. 
 * He has written the rules that we must follow to reorder the packages. The instructions are as follows:
 *    You will receive a string containing letters and parentheses
 *    Every time you find a pair of parentheses, you need to reverse the content within them
 *    If there are nested parentheses, solve the innermost ones first
 *    Return the resulting string with parentheses removed, but with the content correctly reversed
 */

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let result = packages;
  let substr = [];
  let indexOp = 0;
  let indexEnd = 0;

  while (result.indexOf('(') !== -1) {
    indexOp = result.lastIndexOf('(') + 1;
    indexEnd = result.indexOf(')');
    indexEnd = indexEnd < indexOp ? result.indexOf(')', indexOp) : indexEnd;

    substr = result.substring(indexOp, indexEnd);
    result = result.replace('('+substr+')', substr.split('').reverse().join(''));
  }

  return result;
}

function doTest(input, expected) {
  const actual = fixPackages(input);
  if (actual !== expected) {
    console.log('Actual doesn\'t equal expected. Expected: ',expected,'. Actual: ',actual)
  }
}

doTest('(a)', 'a')

doTest('()', '')

doTest('acbde', 'acbde')

doTest('a(cb)de', 'abcde')
// We reverse "cb" inside the parentheses

doTest('a(bc(def)g)h', 'agdefcbh')
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

doTest('abc(def(gh)i)jk', 'abcighfedjk')
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

doTest('a(b(c))e', 'acbe')
// 1st we reverse "c" → "c", then "bc" → "cb"

doTest('a(bc)de', 'acbde')

doTest('a(bc(def)g)h', 'agdefcbh')

doTest('(abc(def(ghi)))', 'defihgcba')

doTest('h((abc((def(ghi)))))h', 'habcdefihgh')

doTest('a(cd)b(de)f(gh)', 'adcbedfhg')
