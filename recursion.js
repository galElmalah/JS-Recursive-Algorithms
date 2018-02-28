// factorial

function fact(n) {
  if (n==0){
    return 1;
  }
  return n*fact(n-1);
}

console.log("--Factorial--");
console.log(fact(5));


function memo(f){
  let cache = {};
  return n => {
    if (n in cache){
      console.log("fetching from cache");
      return cache[n];
    }
    else{
      cache[n] = f(n);
      console.log("calc");
      return cache[n];
    }
  }

}
function Nthfib(n){
  if(n==1 || n==2){
    return 1;
  }
  return Nthfib(n-2) + Nthfib(n-1);
}
let fib = memo(Nthfib);
console.log("-- the Nth fib number--");
console.log(fib(30));
