const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let mainresult;
if (!Array.isArray(arr)){
mainresult=false
} else{

    let result=arr.filter(function (b)  {
      if (typeof b === 'string'){
        return true
      } else {
        return false
      }
   });
    
   result=result.map(function (item) {
   let res= item.trim();
   return res[0].toUpperCase()
   });

   mainresult= result.sort().join('');
  }
  return mainresult
   }

module.exports = {
  createDreamTeam
};
