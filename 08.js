/**
 * It's time to select the fastest reindeer for Santa's journeys! 🦌🎄
 * Santa Claus has organized exciting reindeer races to determine which ones are in the best shape.
 * 
 * Your task is to display each reindeer's progress on a snow track in isometric format.
 * 
 * The information you receive:
 * indices: An array of integers representing each reindeer's progress on the track
 * 0: The lane is empty
 * Positive number: The reindeer's current position from the beginning of the track
 * Negative number: The reindeer's current position from the end of the track.
 * length: The length of each lane
 * 
 * Return a string representing the race track:
 * 
 * Each lane has exactly length positions filled with snow (~)
 * Each reindeer is represented with the letter r
 * Lanes are numbered at the end with /1, /2, etc
 * The view is isometric, so the lower lanes are shifted to the right.
 */

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  return indices.map((i, j) => {
    const blankSpacesCount = indices.length - j - 1;
    const trackBeforeCount = i >= 0 ? i : length + i;
    const raindeerCount = i !== 0 ? 1 : 0;
    const trackAfterCount = length - trackBeforeCount - raindeerCount;

    return (' ').repeat(blankSpacesCount) + ('~').repeat(trackBeforeCount) + ('r').repeat(raindeerCount) + ('~').repeat(trackAfterCount) + ' /'+(j+1);
  }).join('\n');
}

function doTest(indices, length, expected) {
  const actual = drawRace(indices, length);
  if (actual !== expected) {
    console.log('Actual doesn\'t equal expected. Expected: ',expected,'. Actual: ',actual)
  }
}

doTest([0, 5, -3], 10, '  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3')
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

doTest([2, -1, 0, 5], 8, '   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4')
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

doTest([3, 7, -2], 12, '  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3')
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/