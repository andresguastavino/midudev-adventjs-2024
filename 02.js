/**
 * Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must 
 * follow specific rules. Your task is to help the elves generate this magical frame.
 * 
 * Rules:
 * 
 * Given an array of names, you must create a rectangular frame that contains all of them.
 * Each name must be on a line, aligned to the left.
 * The frame is built with * and has a border one line thick.
 * The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
 */

function createFrame(names) {
    let longestName = ''
    names.forEach(name => {
        if (name.length > longestName.length) {
            longestName = name
        }
    })

    let top = ''
    for (let i = 0; i < (longestName.length + 4); i++) {
        top += '*'
    }

    let frame = top+'\n'
    names.forEach(name => {
        frame += '* '+name
        for (let i = 0; i < (longestName.length - name.length); i++) {
            frame += ' '
        }
        frame += ' *\n'
    })

    frame += top
    console.log(frame)
}

createFrame(['midu', 'madeval', 'educalvolpz'])

/* Expected result:
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

createFrame(['midu'])

/* Expected result:
********
* midu *
********
*/

createFrame(['a', 'bb', 'ccc'])

/* Expected result:
*******
* a   *
* bb  *
* ccc *
*******
*/

createFrame(['a', 'bb', 'ccc', 'dddd'])

