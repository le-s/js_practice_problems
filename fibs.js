function fib(n){
  if (n < 0) {
    throw new Error('N cannot be negative')
  } else if (n === 0 || n === 1) {
    return n;
  } 
  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 1; i < n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}
// Memoization method
// function fib(n) {
//   // Compute the nth Fibonacci number
//   if (n === 0) return 0;
//   if (n === 1) return 1;
  
//   if (memo.hasOwnProperty(n)) {
//     return memo[n];
//   }
  
//   let result = fib((n - 1), memo) + fib((n - 2), memo);
  
//   memo[n] = result;

//   return result;
// }

// n = 3
// fib(2) + fib(1)
// fib(1) + fib(0) + 1
// 1 + 0 + 1