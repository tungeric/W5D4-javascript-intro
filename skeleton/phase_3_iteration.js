// bubbleSort

Array.prototype.bubbleSort = function () {
  let copy = this;
  let counter = 0;
  while(counter !== copy.length - 1) {

    let i = 0;
    for(i; i < copy.length - 1 - counter; i++){
      if(copy[i] > copy[i+1]) {
        let storage = copy[i];
        copy[i] = copy[i+1];
        copy[i+1] = storage;
      }
    }
    counter += 1;
  }
  return copy;
};
console.log([2,3,5,1,7,0,8].bubbleSort());

// substrings

String.prototype.substrings = function () {
  let i = 0;
  let result = [];
  for(i; i < this.length; i++) {
    for(let j = 1; j <= this.length - i; j++) {
      let sub = this.substr(i,j);
      if(result.includes(sub)===false) {
        result.push(sub);
      }
    }
  }
  return result;
};

console.log("hello".substrings());

// hello => h, he, hel, hell, hello, e, el, ell, ello, l, ll, llo, lo, o
