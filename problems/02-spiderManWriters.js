/***********************************************************************
Welcome to The Article Company! At AC, you have been tasked with a
very important job! Your boss says we need more articles about Spiderman!
But, uh-oh! Some of the writers did not write articles about Spiderman.
You have been given a long string that contains a list of every writer,
and a value that shows if they have written an article about Spiderman.
You must write a function, 'spiderManWriters(string)' and convert its contents
to an object that "ONLY" contains key value pairings of writers who did "NOT"
write about Spiderman.

Assumptions:
You may assume that the order of the key value pairs in the object does NOT matter.

Examples:

str1 = 'Angela T: wrote about Spiderman, Miah B: no Spiderman, Adrian R: wrote about Spiderman'
str2 = 'Tom B: no Spiderman, Justin N: no Spiderman, Emily B: wrote about Spiderman'
***********************************************************************/

    // Your code here
let spiderManWriters = string => {
    let didNotWrite = {};
    let keyValuePairs = string.split(', ');
    let parsedArray = [];
    for (let i = 0; i < keyValuePairs.length; i++) {
        let pair = keyValuePairs[i]
        parsedArray.push(...pair.split(': '));
    }
    for (let j = 0; j < parsedArray.length; j++) {
        if (j % 2 !== 0) {
            if (parsedArray[j] === 'no Spiderman') {
                didNotWrite[parsedArray[j-1]] = parsedArray[j];
            }
        }
    }
    return didNotWrite;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = spiderManWriters;
} catch(e){
    module.exports = null;
}