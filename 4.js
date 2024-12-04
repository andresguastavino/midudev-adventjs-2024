/**
 * It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a 
 * function that receives the height of the tree (a positive integer between 1 and 100) and a special character to 
 * decorate it.
 * 
 * The function should return a string that represents the Christmas tree, constructed as follows:
 * 
 * The tree is made up of triangles of special characters.
 * The spaces on the sides of the tree are represented with underscores _.
 * All trees have a trunk of two lines, represented by the # character.
 * The tree should always have the same length on each side.
 * You must ensure the tree has the correct shape using line breaks \n for each line.
 */

function createXmasTree(height, ornament) {
  let underscore = '_';

  let tree = '';
  for (let i = 0; i < height; i++) {
    tree += underscore.repeat(height - i - 1)
    tree += ornament.repeat(i)
    tree += ornament
    tree += ornament.repeat(i)
    tree += underscore.repeat(height - i - 1)
    tree += '\n'
  }

  for (let i = 0; i < 2; i++) {
    tree += underscore.repeat(height - 1)
    tree += '#'
    tree += underscore.repeat(height - 1)
    tree += i == 0 ? '\n' : ''
  }

  return tree
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/