function isPalindrome(string) {
  // Convert the string to lowercase
  const lowercaseString = string.toLowerCase();

  // Initialize pointers at the beginning and end of the string
  let leftPointer = 0;
  let rightPointer = lowercaseString.length - 1;

  // Loop until the pointers cross each other
  while (leftPointer < rightPointer) {
    // If the characters at the pointers are not equal, return false
    if (lowercaseString[leftPointer] !== lowercaseString[rightPointer]) {
      return false;
    }

    // Move the pointers towards each other
    leftPointer++;
    rightPointer--;
  }

  // If the loop completes without returning false, return true
  return true;
}

module.exports = isPalindrome;


//Pseudocode
//function isPalindrome(string):
  // Convert the string to lowercase
  //lowercaseString = convertToLowercase(string)

  // Initialize pointers at the beginning and end of the string
  //leftPointer = 0
  //rightPointer = lowercaseString.length - 1

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
