const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (Array.isArray(array)){
  let result=[];
   for (let i=0;i<=array.length-1;i++){
     if (array[i]=='--double-next') {
       if (array.indexOf('--double-next')!=array.length-1){
       result.push(array[i+1]);
       }
     } else if (array[i]=='--discard-next') {
       if (array[i+2]=='--discard-prev' || array[i+2]=='--double-prev'){
        i++
        i++
       } else {
       i++
       }
     } else if (array[i]=='--discard-prev') {
       if (array.indexOf('--discard-prev')!=0){
       result.pop()
       }
     } else if (array[i]=='--double-prev' ) {
       if (array.indexOf('--double-prev')!=0){
         result.push(result[result.length-1]);
  
       }
     } else {
       result.push(array[i])
     }
   }
   return result
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
 }
  



module.exports = {
  transform
};
