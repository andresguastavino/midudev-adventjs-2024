/**
 * The Grinch has hacked 🏴‍☠️ Santa Claus's workshop systems and has encoded the names of all the important files. 
 * Now the elves can't find the original files and they need your help to decipher the names.
 * 
 * Each file follows this format:
 *    It starts with a number (can contain any number of digits).
 *    Then has an underscore _.
 *    Continues with a file name and its extension.
 *    Ends with an extra extension at the end (which we don't need).
 * 
 * Keep in mind that the file names may contain letters (a-z, A-Z), numbers (0-9), other underscores (_), and hyphens (-).
 * 
 * Your task is to implement a function that receives a string with the name of an encoded file and 
 * returns only the important part: the file name and its extension.
 */

/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  const parts = (filename.substring(filename.indexOf('_') + 1, filename.length)).split('.');
  return parts[0]+'.'+parts[1];
}

function doTest(filename, expected) {
  const actual = decodeFilename(filename);
  if (actual !== expected) {
    console.log('Actual doesn\'t equal expected. Expected: ',expected,'. Actual: ',actual)
  }
}

doTest('2023122512345678_sleighDesign.png.grinchwa', 'sleighDesign.png');

doTest('42_chimney_dimensions.pdf.hack2023.png.grinchwa', 'chimney_dimensions.pdf');

doTest('987654321_elf-roster.csv.tempfile', 'elf-roster.csv');