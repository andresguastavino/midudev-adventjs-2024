function doTest(func, params, expected) {
    const actual = func(params);

    let failedTest = typeof(expected) === 'object' ? JSON.stringify(actual) !== JSON.stringify(expected) : actual !== expected;
    if (failedTest) {
        console.log('Actual doesn\'t equal expected. Expected: ',expected,'. Actual: ',actual);
    }
}

module.exports = { doTest };