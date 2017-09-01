// Array#uniq

Array.prototype.uniq = function () {
  let result = [];
  this.forEach(el => {
    if (result.includes(el)) {
      return;
    } else {
      result.push(el);
    }
  });
  return result;
};

console.log([1,2,3,12,1,2,4,6,7,7,7,7,8].uniq());

// Array#twoSum

Array.prototype.twoSum = function () {
  let result = [];
  for(let i = 0; i < this.length; i++){
    for(let j = 0; j < this.length; j++){
      if (this[i] === this[j] && i !== j) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

console.log([1,2,3,1,-2,5,6,7,4,-4].twoSum());

Array.prototype.transpose = function () {

  let result = Array.from({length : this[0].length}, () => Array.from({length : this.length }));
  
  // let result = [];
  for(let i = 0; i < this.length; i++){
    for(let j = 0; j < this[i].length; j++){
        result[j][i] = this[i][j];
      }
    }

  return result;
};

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
