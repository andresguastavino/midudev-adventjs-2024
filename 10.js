/**
 * The elf programmers are creating a small magical assembler to control the machines in Santa Claus's workshop.
 * 
 * To assist them, we will implement a simple interpreter that supports the following magical instructions:
 *    MOV x y: Copies the value x (which can be a number or the content of a register) into register y
 *    INC x: Increments the content of register x by 1
 *    DEC x: Decrements the content of register x by 1
 *    JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the 
 *      program from there.
 * 
 * Expected behavior:
 *    If an attempt is made to access, increment, or decrement a register that has not been initialized, 
 *      the default value 0 will be used.
 *    The jump with JMP is absolute and goes to the exact index indicated by y.
 *    Upon completion, the program should return the content of register A. If A did not have a defined value, 
 *      it returns undefined.
 */

/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const regs = {};  
  let instrArray = [];
  let i = 0;

  while (i < instructions.length) {
    instrArray = instructions[i].split(' ');
    switch (instrArray[0]) {
      case 'INC':
        regs[instrArray[1]] = (regs[instrArray[1]] || 0) + 1;
        break;
      case 'DEC':
        regs[instrArray[1]] = (regs[instrArray[1]] || 0) - 1;
        break;
      case 'JMP':
        i = regs[instrArray[1]] === 0 || regs[instrArray[1]] === undefined ? Number(instrArray[2]) - 1 : i;
        break;
      case 'MOV':
        regs[instrArray[2]] = isNaN(Number(instrArray[1])) ? regs[instrArray[1]] : Number(instrArray[1]);
        break;
    }
    i++;
  }

  return regs['A'];
}


function doTest(instructions, expected) {
  const actual = compile(instructions);
  if (actual !== expected) {
    console.log('Actual doesn\'t equal expected. Expected: ',expected,'. Actual: ',actual)
  }
}

doTest([
  'MOV 0 A',
  'JMP A 0'
], 0);

doTest([
  'DEC A' // increments the value of register 'A'
], -1);

doTest([
  'MOV -1 C', // copies -1 to register 'C',
  'INC C', // increments the value of register 'C'
  'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
  'MOV C A', // copies register 'C' to register 'A',
  'INC A' // increments the value of register 'A'
], 2);

doTest([
  "MOV 2 X",
  "DEC X",
  "DEC X",
  "JMP X 1",
  "MOV X A"
], -2);

doTest([
  "MOV 3 C",
  "DEC C",
  "DEC C",
  "DEC C",
  "JMP C 3",
  "MOV C A"
], -1);