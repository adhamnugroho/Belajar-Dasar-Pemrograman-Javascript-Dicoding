const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 *
 */
