/**
 * Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. 
 * Each boot is described by two values:
 *  - type indicates if it's a left boot (I) or a right boot (R)
 *  - size indicates the size of the boot
 * 
 * Your task is to help the elves pair all the boots of the same size having a left and a right one. 
 * To do this, you should return a list of the available boots after pairing them.
 * 
 * Note: You can have more than one pair of boots of the same size!
 */

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  const orgShoes = shoes.reduce(
    (acc, shoe) => {
      if (!acc[shoe.size]) acc[shoe.size] = []
      acc[shoe.size].push(shoe.type)
      return acc
    }, {}
  )

  return Object.keys(orgShoes).reduce(
    (acc, number) => {
      const typesStr = orgShoes[number].join('')
      const leftCount = (typesStr.match(new RegExp('I', "g")) || []).length;
      const rightCount = (typesStr.match(new RegExp('R', "g")) || []).length;
      for (let i = 0; i < Math.min(leftCount, rightCount); i++) {
        acc.push(parseInt(number))
      }
      return acc
    }
  , [])
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
console.log(organizeShoes(shoes2))
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))
// []