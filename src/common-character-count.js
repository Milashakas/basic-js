const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let arr1=s1.split('');
  let arr2=s2.split('');
  let count=0;

if(arr1.length>=arr2.length){

    for (let i=0;i<=arr1.length-1;i++){
      if (arr2.includes(arr1[i])) {
        count++
        arr1.splice(i,1);
        arr2.splice(arr2.indexOf(arr1[i]),1);
        i--
      }
    }
  } else {
    for (let i=0;i<=arr2.length-1;i++){
      if (arr1.includes(arr2[i])) {
        count++
       
        arr1.splice(arr1.indexOf(arr2[i]),1);
        arr2.splice(i,1);
        i--
      }
    }
  }

  return count 
}


module.exports = {
  getCommonCharacterCount
};
