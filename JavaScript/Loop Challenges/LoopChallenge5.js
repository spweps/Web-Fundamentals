function factorialTo(n){
    let sum=1;
    for (let i=1; i<=n; i++){
        sum *= i;
    }
    return sum;
}
console.log(factorialTo(12))