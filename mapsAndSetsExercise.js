// What does the following code return?
new Set([1,1,2,2,3,4]) //set(4) {1,2,3,4}

// What does the following code return?
[...new Set("referee")].join("") // ref

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// m(2) {[1,2,3] => true, [1,2,3] => false}

// ## **hasDuplicate**

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size < arr.length; //my solution
// solution
const hasDuplicate2 = arr => new Set(arr).size !== arr.length;


// ## **vowelCount**

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
   const newArr = str.toLowerCase().split("").filter(ele => 'aeiou'.includes(ele));
   const newMap = new Map();
   for(let ele of newArr) {
    if(!newMap.has(ele)){
       newMap.set(ele,1) ;
    }else{
        // newMap.get(ele)++;
        newMap.set(ele,newMap.get(ele)+1);
    }
   }
   return newMap;
}
