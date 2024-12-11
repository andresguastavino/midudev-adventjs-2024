function doTest(func, params, expected) {
    const actual = func(params);
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.log('Actual doesn\'t equal expected. Expected: ',expected,'. Actual: ',actual);
    }
}

module.exports = { doTest };