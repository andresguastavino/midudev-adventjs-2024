const test = require('./test.js');

/**
 * Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are duplicated and must 
 * be removed to avoid confusion. Additionally, the gifts must be sorted in ascending order before being delivered to the 
 * elves.
 * 
 * Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list 
 * without duplicates, sorted in ascending order.
 */

function prepareGifts(gifts) {
  return gifts.filter((gift, index) => !gifts.slice(0, index).includes(gift))
    .sort((a, b) => a - b)
}

function prepareGiftsInvoker(params) {
  return prepareGifts(params.gifts)
}

const { doTest } = test;

doTest(prepareGiftsInvoker, { gifts: [3, 1, 2, 3, 4, 2, 5] }, [1, 2, 3, 4, 5]);
doTest(prepareGiftsInvoker, { gifts: [6, 5, 5, 5, 5] }, [5, 6]);
doTest(prepareGiftsInvoker, { gifts: [] }, []);