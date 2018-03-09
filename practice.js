//random arrays for testing 
function createRandomArray(numberOfElements){
  const arr = [];
  for(let i= 0;i<numberOfElements;i++){
    arr.push(parseInt(Math.random()*100000))
  }
  return arr;
}

function shuffle(arr) {
  let tmp;
  let rand;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor((Math.random() * (arr.length - i) + i));
    tmp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}

function maxSubArray(arr) {
  const len = arr.length;
  let maxSum = 0;
  for (let start = 0; start < len; start++) {
    for (let end = start; end < len; end++) {
      let sum = 0;
      for(let i = start; i <= end ; i++){
        sum+=arr[i];
      }
      maxSum = Math.max(sum,maxSum);
    }
  }
  return maxSum;
}

function maxSubArrayLinear(arr){
  const sub = [Math.max(arr[0],0)];
  for(let i=1;i<arr.length;i++){
    sub[i] = Math.max(sub[i-1]+arr[i], 0);
  }
 
  return Math.max(...sub);
}

function swap(a,b){
  
}


console.log("--Shuffle--");
console.log(shuffle([1, 2, 3, 4]));

console.log("--Max sub-array linear--");
console.log(maxSubArrayLinear(createRandomArray(100000)));