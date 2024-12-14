/**
 * You are in a very special market where Christmas trees 🎄 are sold. 
 * Each one comes decorated with a series of very peculiar ornaments, 
 * and the price of the tree is determined by the ornaments it has.
 *  *: Snowflake - Value: 1
 *  o: Christmas Ball - Value: 5
 *  ^: Decorative Tree - Value: 10
 *  #: Shiny Garland - Value: 50
 *  @: Polar Star - Value: 100
 * 
 * Normally, you would sum up all the values of the ornaments and that's it…
 * 
 * But, watch out! If an ornament is immediately to the left of another of greater value, instead of adding, 
 * its value is subtracted.
 */

/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const vals = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 };
  
  if (ornaments.match(/[^*o^#@]+/) !== null) {
    return undefined;
  }

  return ornaments.split('').map((o, i, arr) => {
    return vals[o] > vals[arr[i - 1]] ? vals[o] - 2 * vals[arr[i - 1]] : vals[arr[i]];
  }).reduce((a, b) => a + b, 0);
}

function calculatePriceInvoker(params) {
  return calculatePrice(params.ornaments);
}

const test = require('./test.js');
const { doTest } = test;

doTest(calculatePriceInvoker, { ornaments: '***'}, 3);
doTest(calculatePriceInvoker, { ornaments: '*o'}, 4);
doTest(calculatePriceInvoker, { ornaments: 'o*'}, 6);
doTest(calculatePriceInvoker, { ornaments: '*o*'}, 5);
doTest(calculatePriceInvoker, { ornaments: '**o*'}, 6);
doTest(calculatePriceInvoker, { ornaments: 'o***'}, 8);
doTest(calculatePriceInvoker, { ornaments: '*o@'}, 94);
doTest(calculatePriceInvoker, { ornaments: '*#'}, 49);
doTest(calculatePriceInvoker, { ornaments: '@@@'}, 300);
doTest(calculatePriceInvoker, { ornaments: '#@'}, 50);
doTest(calculatePriceInvoker, { ornaments: '#@Z'}, undefined);
