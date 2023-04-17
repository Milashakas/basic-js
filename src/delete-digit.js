const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arr=String(num).split('');
  let max=0;
  
  for (let i=0;i<=arr.length-1;i++){
   let arr1=[]
    for (let i=0;i<=arr.length-1;i++){
      arr1.push(arr[i])
    }
  
    arr1.splice(i,1);
    let res=arr1.join('')
  if (max==0 || max<(Number(res))){
    max=Number(res);
  } 
    
  }
  return  max
  }
  
  
module.exports = {
  deleteDigit
};
