function isPalindrome(word) {
  // Convert the word to lowercase
  word = word.toLowerCase();

  // Reverse the word
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  // Check if the reversed word is equal to the original word
  return word === reversed;
}

module.exports = isPalindrome;

//Test Cases
console.log(isPalindrom("madam")); // Expectomg : true
console.log(isPalindrom("robot")); //Expecting : false 

/* 


//Pseudocoode: Convert the input word to lowercase to ignore case sensitivity.
//Create an empty string called "reversed".
//Loop through the characters of the word in reverse order.
//Add each character to the "reversed" string.
//Compare the "reversed" string with the original word.
//if they are equal, return true, Otherwise, return false,
//The code is clean and readable. Opitimize the present implementation is already optimal, as we only need to loop through the characters once to reverse the string.


I want to write a function that determines if a given string is a palindrome. A palindrome is a word that reads the same forwards and  backwards.
//In weiting your own test cases "madam" and "robot".  In thinking of a few additional test cases to cover different  scenarios:
//Test case 1: "level" (Expecting:true)
//Test case 2: "noon (Expecting: true)
//Test case 3: "hello (Expecting: false)
//Test case 4: "racecar" (Expecting: true)
//Test case 5 "python" (Expecting : false )



//Instructions:
//Write a function  isPalindrome that will receive one argument, 
//a string. Your function should return true if the string is a palindroms. 
//(that is, if it reads the same forwards and backwards, 
//like "mom" or "raceccar"), and return false if it is not a palindrome.



*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

