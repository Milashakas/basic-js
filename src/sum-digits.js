const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  let sum=num;
  if (num<10){
    return num
  }
    let arr;

    function getsum (numb) {
   
        
      arr=String(numb).split('');
      sum=0;
      for (let i=0;i<=arr.length-1;i++){
       sum+=(+(arr[i]))
      }
      if(numb>=10){
        getsum(sum)
      } 
      return sum
    }
  
  getsum(sum)
 

 if(sum%10==0) {
  sum=sum/10
 }
  
  return sum
}

module.exports = {
  getSumOfDigits
};
