/* Problem Challenge #1 - Permutation in a String (hard)

- Given a string and a pattern, find out if the string contains any permutation of the pattern.

- Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

  1. abc
  2. acb
  3. bac
  4. bca
  5. cab
  6. cba

- If a string has ‘n’ distinct characters, it will have n! permutations.

Input: String="oidbcaf", Pattern="abc"   Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Input: String="odicf", Pattern="dc"      Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Input: String="bcdxabcdy", Pattern="bcdyabcdx"  Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Input: String="aaacb", Pattern="abc"      Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.


Time O(N + M) - where ‘N’ and ‘M’ are the number of characters in the input string and the pattern, respectively.
Space O(M) - since, in the worst case, the whole pattern can have distinct characters that will go into the HashMap.

*/

function find_permutation(str, pattern) {
    let windowStart = 0,
      matches = 0,
      patternFreq = {};
  
    //get pattern chars into a hash map
    for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i];
      patternFreq[char] = patternFreq[char] + 1 || 1;
    }
  
    // Our goal is to match all the characters from 'patternFreq' within the current window
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      let rightChar = str[windowEnd];
      if (rightChar in patternFreq) {
        // Decrement the frequency of matches character
        patternFreq[rightChar] -= 1;
        // when a charKey === 0 we have all the letters for that char and can increment 'matches'
        if (patternFreq[rightChar] === 0) matches += 1;
      }
      // when all matches are made, it will equal the length of the hash
      if (matches === Object.keys(patternFreq).length) return true;
  
      //shrink window
      if (windowEnd >= pattern.length - 1) {
        let leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in patternFreq) {
          if (patternFreq[leftChar] === 0) {
            matches -= 1;
          }
          //add the char count back into map
          patternFreq[leftChar] += 1;
        }
      }
    }
    return false;
  }
  
  // console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`); // true
  // console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`); // false
  // console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`); //true
  // console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`); // true


/* Problem Challenge #1 - Permutation in a String (hard)

- Given a string and a pattern, find out if the string contains any permutation of the pattern.

- Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

  1. abc
  2. acb
  3. bac
  4. bca
  5. cab
  6. cba

- If a string has ‘n’ distinct characters, it will have n! permutations.

Input: String="oidbcaf", Pattern="abc"   Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Input: String="odicf", Pattern="dc"      Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Input: String="bcdxabcdy", Pattern="bcdyabcdx"  Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Input: String="aaacb", Pattern="abc"      Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.


Time O(N + M) - where ‘N’ and ‘M’ are the number of characters in the input string and the pattern, respectively.
Space O(M) - since, in the worst case, the whole pattern can have distinct characters that will go into the HashMap.

*/

function findPermutation(str, pattern) {

  // code your answer 

}


// Time: 
// Space: 
console.log(`Permutation exist: ${findPermutation('oidbcaf', 'abc')}`); // true
console.log(`Permutation exist: ${findPermutation('odicf', 'dc')}`); // false
console.log(`Permutation exist: ${findPermutation('bcdxabcdy', 'bcdyabcdx')}`); // true
console.log(`Permutation exist: ${findPermutation('aaacb', 'abc')}`); // true