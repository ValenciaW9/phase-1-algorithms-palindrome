function isPalindrome(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

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

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));



//function isPalindrome(string):
// Convert the string to lowercase
//lowercaseString = convertToLowercase(string)

// Initialize pointers at the beginning and end of the string
//eftPointer = 0
//rightPointer = length(lowercaseString) - 1

// Loop until the pointers cross each other
//while leftPointer < rightPointer:
  // If the characters at the pointers are not equal, return false
  //if lowercaseString[leftPointer] is not equal to lowercaseString[rightPointer]:
    //return false

  // Move the pointers towards each other
  //leftPointer = leftPointer + 1
  //rightPointer = rightPointer - 1

// If the loop completes without returning false, return true
//return true


  // If the loop completes without returning false, return true
  //return true;
}


module.exports = isPalindrome;

//Test Cases
console.log(isPalindrom("madam")); // Expectomg : true
console.log(isPalindrom("robot")); //Expecting : false 

/* 
Pseudocoode: In the above pseudocode, we first convert the input string to lowercase using the convertToLowercase function (which is a placeholder for the actual implementation).

Then, we initialize two pointers, leftPointer and rightPointer, pointing to the beginning and end of the string, respectively.

We enter a loop that continues until the pointers cross each other. Inside the loop, we compare the characters at the pointers. If they are not equal, we return false because the string is not a palindrome.

If the characters at the pointers are equal, we move the leftPointer one step to the right and the rightPointer one step to the left.

Once the loop completes without returning false, we can conclude that the string is a palindrome and return true.

/*

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



