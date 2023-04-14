const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  } else {
  let resmain;
  if (Object.getOwnPropertyNames(date).length>=1){
    throw new Error('Invalid date!')
  }
  try{
  res=date.getMonth();


  if (res==11 || (res>=0 && res<=1)){
  resmain='winter';
  } else if ((res>=2 && res<=4) ){
resmain='spring';
  }else if ((res>=5 && res<=7) ){
    resmain='summer';

  } else {
    resmain='autumn';
  }

  return resmain
} catch (err){
throw new Error('Invalid date!')
}
  
}
}


module.exports = {
  getSeason
};
