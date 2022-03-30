//filterOutOdds
// create filterOutOdds variable with parameter as rest operator
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

    // return parameter.filter in arrow function 
    // if num of nums has a remainder of 0, return the num in an array


//findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

const findMin = (...nums) => Math.min(...nums);


// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the 
// keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}); 


// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

//create doubleAndReturnArgs function, which accepts firstArray and ...more args

function doubleAndReturnArgs(firstArr, ...nums) {
    const doubleArr = Array.from(...nums, num => num * 2);
    const collection = [...firstArr, ...doubleArr];
    return collection;
}

const doubleAndReturnArgs2 = (arr, ...args) => [...arr, ...args.map(v => v *2)]
// return elements of firstArray 
// return elements of ...more doubled


// Slice and Dice
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.


// ** remove a random element in the items array
// and return a new array without that item. */

function removeRandom(items) {
// create removeRandom function with items parameter
// create index variable: Math.floor(Math.random() of length of items array)
// return sliced array: [slice rest array at (index 0, index variable), slice rest array at (index + 1)]
}

const removeRandom2 = items => {let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)] }



/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {

    const newArray = [...array1, ...array2];
    return newArray;
}

const extend2 = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

//create obj2 variable and add key and assign value to key; {obj[key] = val};
// return concat of spread obj and spread obj2

function addKeyVal(obj, key, val) {

}

const addKeyVal2 = (obj, key, val) => {const obj2 = (obj[key] = val);
    return {...obj, ...obj2};
};


/** Return a new object with a key removed. */

function removeKey(obj, key) {
// create removeKey function with obj, key
// create new variable: destructure the key property, and collect the rest of the properties in newObj
// return newObj
}

const removeKey2 = (obj, key) => {const { [key]:val, ...newObj } = obj;
    return newObj;
};


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
// create combine function with obj1 and obj2
// create variable combineObjs with spread operator: obj1, obj2
// return combineObjs
}

const combine2 = (obj1, obj2) => {const combineObjs = {...obj1, ...obj2};
    return combineObjs;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    // create update function with obj, key, val
    // return {obj with rest operator and modified key and value}

}

const update2 = (obj, key, val) => {let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}