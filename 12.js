/**
 * You are in a very special market where Christmas trees 🎄 are sold. 
 * Each one comes decorated with a series of very peculiar ornaments, 
 * and the price of the tree is determined by the ornaments it has.
 *  *: Snowflake - Value: 
 *  o: Christmas Ball - Value: 
 *  ^: Decorative Tree - Value: 1
 *  #: Shiny Garland - Value: 5
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
  // Code here
  return 0;
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
