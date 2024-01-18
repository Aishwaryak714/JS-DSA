// Fibonacci Series -> 0,1,1,2,3,5,8,13,21....
//               i= 2,3,4,5
// f(0) = 0, f(1)= 1
// f(n) = f(n-1) + f(n-2), for n>1

var fib = function (n) 
{
    const arr = [0,1];
    for (let i= 2; i<=n;i++)
    {
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[n];
};

fib(5);
