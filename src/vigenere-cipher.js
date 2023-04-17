const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
encrypt(str,code) {
  /*
   let alph=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];
   let arrstr=str.split(' ');
   let arcode=code.split('');
  
  arrstr=arrstr.map(function (item){
    return item.split('')
  })
  
for (let i=0;i<=arrstr.length-1;i++){
   arrstr[i]=arrstr[i].map(function (item){
    if (item!==' ' && item!=='!'){
    return alph.indexOf(item.toUpperCase())
    } else {
      return item
    }
   })
}
   arcode=arcode.map(function (item){
    return alph.indexOf(item.toUpperCase())
   });

  
   let count=0;
   for (let i=0;i<=arrstr.length-1;i++){
     count=0;
for (let b=0;b<=arrstr[i].length-1;b++){
     
     if (count==arcode.length-1){
      count=0
    }
     
    if(arrstr[i][b]!==" " && arrstr[i][b]!=='!'){
    let res=arrstr[i][b]+arcode[count];

    if (res>26){
      res =res-26;
    }
count ++
arrstr[i][b]=res
   }
}
   }

  for (let i=0;i<=arrstr.length-1;i++){
    arrstr[i]=arrstr[i].map(function (item){
      if (item!==' '){
      return alph[item]
      } else {
        return item
      }
    })
  }
   arrstr= arrstr.map(function (item) {
      return item.join('')
    });
  return arrstr.join(' ')
  }
  decrypt(str,code) {
    let alph2=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];
  }
  */
  throw new NotImplementedError('Not implemented');
}
}


module.exports = {
  VigenereCipheringMachine
};
