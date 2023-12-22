/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
 
  let count=0
  let str2=str.toLowerCase();
    for (let i=0; i<str2.length; i++) {
      let currentChar=str2[i];
      
      if (currentChar==='a'||currentChar==='e'||currentChar==='i'||currentChar==='o'||currentChar==='u')
      {
        count++;
      }
      
      
    }
    return count;
}


module.exports = countVowels;