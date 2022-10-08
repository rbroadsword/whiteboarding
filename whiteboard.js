Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"

const stringToUrl = (str) => {
  let result = ""; 
  for(let i = 0; i < str.length; i++){
    if (str[i] === " "){
      result += "%20"; 
    } else {
      result += str[i]; 
    }
  }
  return result; 
}; 

Question #2: Array Deduping
Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi", 7, 53]

Output: [7, 9, "hi", 12, 53]

const deduping = (array) => {
  const myArray = array; 
  return [...new Set(myArray)]; 
}


Question #3: Compressing Strings
Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da"

function compress(string){
  let compressedString  = ""; 
  let stringArray = string.split(""); 
  for (let i = 0; i < stringArray.length; i++){
    let count = 1; 
    let currentLetter = stringArray[i]; 
    while (i < stringArray.length - 1 && stringArray[i] === stringArray[i + 1]){
      count ++; 
      i++; 
    }
    if (count === 1){
      compressedString += currentLetter; 
    } else {
      compressedString += count + currentLetter; 
    }
  }
  return compressedString; 
}

Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

regular expression? map? 
Example
Input: "hello"

Output: false

Input: "copyright"

Output: true

const checkUniqueness = (str = "") => {
  const hash = new Set(); 
  for (let i = 0; i < str.length; i++){
    const ele = str[i]; 
    if(hash.has(ele)){
      return false; 
    } else{
      return true; 
    }
  }
}

Question #5: Array Sorting
Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

Quick sort
Merge sort
Heap sort
Insertion sort
Bubble sort
Selection sort
You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

Example
Input: [9, 2, 7, 12]

Output: [2, 7, 9, 12]

