//random arrays for testing 
function createRandomArray(numberOfElements){
  const arr = [];
  for(let i= 0;i<numberOfElements;i++){
    arr.push(Math.random()*100000)
  }
  return arr;
}

// factorial
function fact(n) {
  if (n == 0) {
    return 1;
  }
  return n * fact(n - 1);
}
function factTailOptimize(n,i=1){
  if(n==0||n==1){
    return i;
  }
  return factTailOptimize(n-1,n*i);
}

console.log("--Factorial tail optimization--");
console.log(factTailOptimize(5));
console.log("--Factorial--");
console.log(fact(5));

function memoFib(n, memo){
  if(n == 1 || n == 0)
    return 1;
  if (n in memo)
    return memo[n];
  memo[n] = memoFib(n-1, memo) + memoFib(n-2, memo);
  return memo[n];
}
m ={};
console.log('-- just dynamic fib--');
console.log(memoFib(5,m));

//Memoization implementation 
function memo(f) {
  let cache = {};
  return n => {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = f(n);
      return cache[n];
    }
  }
}

// fib recursion
let Nthfib = (n) => {
  if (n == 1 || n == 2) {
    return 1;
  }
  return Nthfib(n - 2) + Nthfib(n - 1);
}
Nthfib = memo(Nthfib);
console.log("--the Nth fib number using general memo--");
console.log(Nthfib(10));

// binary search algorithm
const binarySearch = (arr, val) => {
  let mid = Math.floor(arr.length / 2);
  console.log(arr, arr[mid]);
  if (arr[mid] == val) {
    return true;
  }
  if (mid == 0) {
    return false;
  }
  if (arr[mid] > val) {
    // Go to the right side of the array and search there
    return binarySearch(arr.splice(0, mid), val)
  }
  return binarySearch(arr.splice(mid), val)
}
console.log("--Binary search--");
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 13, 56, 102], 102));

const merge = (arr1, arr2) => {
  let merged = [];
  let arr1_index = 0;
  let arr2_index = 0;
  while (arr1_index < arr1.length && arr2_index < arr2.length) {
    if (arr1[arr1_index] < arr2[arr2_index]) {
      merged.push(arr1[arr1_index]);
      arr1_index++;
    } else {
      merged.push(arr2[arr2_index]);
      arr2_index++;
    }
  }
  if (arr1_index == arr1.length) {
    merged = merged.concat(arr2.slice(arr2_index));
  } else {
    merged = merged.concat(arr1.slice(arr1_index));
  }

  return merged;
}

const mergeSort = arr => {
  if (arr.length == 1) return arr;
  const mid = parseInt(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log("--Merge sort--");
console.log(mergeSort([3, 2, 1, 3, 4, 5, 6, 7, 7, 7, 3, 32, 3, 4, 234, 234, 23, 23, 32, 5, 2, 12, 132]));
console.log([1, 2].concat([3, 4]));


const quickSort = arr => {
  if (arr.length == 0) return arr;
  let pivot = [arr[Math.floor(Math.random() * arr.length)]];
  let smaller = [];
  let bigger = [];
  let flag = false;
  let sortedByPivot = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot[0]) {
      smaller.push(arr[i]);
      continue;
    } else if (arr[i] > pivot[0]) {
      bigger.push(arr[i]);
      continue;
    } else {
      if (flag)
        pivot.push(arr[i]);
      flag = true;
    }
  }
  return sortedByPivot.concat(quickSort(smaller), pivot, quickSort(bigger));
}
console.log("--Quick sort--");
console.log(quickSort(createRandomArray(10)));