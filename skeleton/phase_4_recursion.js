
  // Range
const range = function range (start, end) {
  // start with start value
  // push value + 1 into result until value is end
  if (end < start) { return []; }
  let result = range(start, end - 1);
  result.push(end);
  return result;
};

console.log(range(5,10));

// SumRec
const sumRec = function sumRec (arr) {
  if(arr.length === 1) { return arr[0]; }
  let result = sumRec(arr.slice(1,arr.length));
  result += arr[0];
  return result;
};

console.log(sumRec([1,2,3,3,6,7,4,6,7,8,5,6,45,5,54]));

// Exponent
const exponent = function exponent (base, exp) {
  if(exp === 0) { return 1; }
  if(exp === 1) { return base; }
  return base * exponent(base, exp - 1);

};

console.log(exponent(2,5));


// Fibonacci
const fib = function fib (n) {
  if(n === 2) { return [0,1]; }
  let result = fib(n-1);
  result.push(result.slice(result.length-1,result.length)[0]
          +result.slice(result.length-2,result.length-1)[0]);
  return result;
};

console.log(fib(8));

// Bsearch
const bsearch = function bsearch(arr, target) {
  let mid_indx = Math.floor(arr.length/2);
  if(target === arr[mid_indx]) {return mid_indx;}
  if (target > arr[mid_indx]) {
    return bsearch(arr.slice(mid_indx,arr.length ),target) + mid_indx;
  } else {
    return bsearch(arr.slice(0,mid_indx),target);
  }
};

console.log(bsearch([1,2,3,4,5,6,7,8,9,10,11],6));
