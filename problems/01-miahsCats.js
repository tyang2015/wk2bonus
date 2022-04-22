/***********************************************************************
Write a FAT ARROW function `miahsCats(obj)` that takes an object, containing
extremely important information about Miah's cats as an argument
and returns an integer representing how many keys and values
in the input object containing the string "cute" or "adorable".

****NOTE: You should account for upper and lowercase letters!****
Checkout MDN documentation on how to solve this issue.


Examples:

obj1 = {"Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte"}
miahsCats(obj2) // 2

obj2 = {"CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face"}
miahsCats(obj3) // 3

obj3 = {"Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny"}
miahsCats(obj1) // 3



***********************************************************************/

// Your code here
let miahsCats = (obj)=> {
    let count=0
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    // let words = values.split(' ')
    for (let i=0; i< values.length; i++){
        let words = values[i].split(' ')
        for (let j=0; j< words.length; j++){
            let word = words[j]
            if (word.toLowerCase().includes('adorable') || word.toLowerCase().includes('cute')) {
                count++
            }
        }
        // let word = words[i];
    }

    for (let i=0 ; i< keys.length; i++){
        if (keys[i].toLowerCase().includes('cute') || keys[i].toLowerCase().includes('adorable')){
            count++
        }
    }
    return count
    // for (let key in obj) {}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = miahsCats;
} catch(e) {
    module.exports = null;
}
