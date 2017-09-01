// myEach

Array.prototype.myEach = function (func) {

  for(let i = 0; i < this.length; i++){
    func(this[i]);

  }
};
[1,2,3,4,5].myEach((num) => console.log(num));

// myMap

Array.prototype.myMap = function (func) {
  let result = [];

  this.myEach((num)=>{

    result.push(func(num));
  });
  return result;
};
console.log([1,2,3,4,5].myMap(num => num + 1 ));

// myReduce

Array.prototype.myReduce = function (func, acc) {
  if(acc == null) {
    acc = this.shift();
  }
  this.myEach((num) => {
    acc = func(acc, num);
  });
  return acc;
};


// without initialValue
console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
})); // => 6

// with initialValue
console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25)); // => 31
