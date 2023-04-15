const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr:[],
  getLength() {
   return this.arr.length
  },
  addLink(value) {
    this.arr.push(`( ${String(value)} )`);
    return this
  },
  removeLink(pos) {

    if (  typeof pos == 'number' && (pos%1)==0 && this.arr.length>=pos &&   pos!=0 && pos>0 ){
      this.arr.splice((pos-1),1);
      return this
    }else {
    this.arr=[]
 throw  new Error("You can't remove incorrect link!");
    }
    
  
},
  reverseChain() {
    if(this.arr.length>=1){
    this.arr.reverse();
    return this
    } else {
      return this
    }
  },
  finishChain() {
    let res=this.arr.join('~~');
    this.arr=[];
    return res
  }
};



module.exports = {
  chainMaker
};
