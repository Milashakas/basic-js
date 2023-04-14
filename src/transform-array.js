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
function transform(arr) {

  if (arr.length==0) {
    return []
  }else{
 let din='--discard-next';
 let  dip='--discard-prev';
 let dn='--double-next';
 let dp='--double-prev';
let result;
 if(arr.includes(din)){
  for (let i=0;i<=arr.length-1;i++){
if (!i==(arr.indexOf(din)+1) || !i==(arr.indexOf(din))){
result.push(arr[i]);
  }
}
 }
if (arr.includes(dip)){
  for (let b=0;b<=arr.length-1;b++){
  if (!b==(arr.indexOf(dip)-1) || !b==(arr.indexOf(din))){
    result.push(arr[b]);
}
  }
}
  else if(arr.includes(dn)){
    for (let f=0;f<=arr.length-1;f++){
  if(f==(arr.indexOf(din)+1)){
result.push(arr[f]*2);
  } else if (!f==(arr.indexOf(din))) {
result.push(arr[f])
  }
}
  }
  else if (arr.includes(dp)) {
    for (let q=0;q<=arr.length-1;q++){
      if(q==(arr.indexOf(din)-1)){
    result.push(arr[q]*2);
      } else if (!q==(arr.indexOf(din))) {
    result.push(arr[q])
      }
    }

}
return result
}
}


module.exports = {
  transform
};
