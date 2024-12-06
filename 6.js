/**
 * We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, 
 * represented by an asterisk *, is inside the box.
 * 
 * The box has a present (*) and counts as "inside the box" if:
 * 
 * It is completely surrounded by # on the box's edges
 * The * is not on the box's edges
 * Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.
 */

/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const boxWidth = box[0].length
  const boxHeight = box.length
  
  let containsGift = false
  for (let i = 1; i < boxWidth - 1; i++) {
    for (let j = 1; j < boxHeight - 1; j++) {
      if (box[j][i] === '*' && !containsGift) {
        containsGift = true;
      } 
    }
  }

  return containsGift;
}

const res = inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true
console.log(res)

const res1 = inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true
console.log(res1)

const res2 = inBox([
  "*####",
  "#   #",
  "#  #*",
  "####"
]) // ➞ false
console.log(res2)

const res3 = inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
console.log(res3)

const res4 = inBox([
  "####",
  "#  #",
  "##*#"
]) // ➞ false
console.log(res4)

const res5 = inBox([
  "#####",
  "#   #",
  "##*##"
]) // ➞ false
console.log(res5)