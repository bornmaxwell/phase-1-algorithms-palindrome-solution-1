

// Function to reverse a string
function reverseString(word) {
  return word.split('').reverse().join('');
}

// Function to check if a string is a palindrome
function isPalindrome(word) {
  // Reverse the input string
  const reversedWord = reverseString(word);
  
  // Compare the reversed string to the original and return the result
  return word === reversedWord;
}

// Export the function for testing
module.exports = isPalindrome;

/* 
  Pseudocode:
  1. Reverse the input string using a helper function:
      - Split the string into an array of characters.
      - Reverse the array.
      - Join the reversed array back into a string.
  2. Compare the reversed string with the original string:
      - If they are identical, return true.
      - Otherwise, return false.
*/

/* 
  Written Explanation:
  The `isPalindrome` function determines if a string reads the same forwards and backwards. 
  By reversing the string and comparing it to the original, we can check for this property.
  The helper function `reverseString` handles the string reversal process.
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}
