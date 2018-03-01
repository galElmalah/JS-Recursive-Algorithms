// factorial

function fact(n) {
  if (n==0){
    return 1;
  }
  return n*fact(n-1);
}

console.log("--Factorial--");
console.log(fact(5));

//Memoization implementation 
function memo(f){
  let cache = {};
  return n => {
    if (n in cache){
      return cache[n];
    }
    else{
      cache[n] = f(n);
      return cache[n];
    }
  }
}

// fib recursion
let Nthfib = (n) => {
  if(n==1 || n==2){
    return 1;
  }
  return Nthfib(n-2) + Nthfib(n-1);
}
Nthfib = memo(Nthfib);
console.log("-- the Nth fib number--");
console.log(Nthfib(10));

// binary search algorithm
const binarySearch = (arr, val) => {
  let mid = Math.floor(arr.length/2);
  console.log(arr, arr[mid]);
  if(arr[mid] == val){
    return true;
  }
  if(mid==0){
    return false;
  }
  if(arr[mid] > val){
    // Go to the right side of the array and search there
    return binarySearch(arr.slice(0,mid), val)
  }
  return binarySearch(arr.slice(mid), val)
}
console.log("--Binary search--");
console.log(binarySearch([1,2,3,4,5,6,7,13,56,102],102));

const merge = (arr1, arr2) => {
  let merged =[];
  let arr1_index = 0;
  let arr2_index = 0;
  while(arr1_index < arr1.length && arr2_index < arr2.length){
    if(arr1[arr1_index] < arr2[arr2_index]){
      merged.push(arr1[arr1_index]);
      arr1_index++;
    } else {
      merged.push(arr2[arr2_index]);
      arr2_index++;  
    }
  }
  if(arr1_index == arr1.length){
    merged = merged.concat(arr2.slice(arr2_index));
  } else {
    merged = merged.concat(arr1.slice(arr1_index));    
  }

  return merged;
}

const mergeSort = arr => {
  if(arr.length==1) return arr;
  const mid = parseInt(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log("--Merge sort--");
console.log(mergeSort([3,2,1,3,4,5,6,7,7,7,3,32,3,4,234,234,23,23,32,5,2,12,132]));
