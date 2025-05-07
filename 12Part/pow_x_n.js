var myPow = function(x, n) {
    if(n ===0) return 1

    let ans =  temp(x,n)
    return (n < 0) ? 1/ans : ans
};

var temp = function(x,n){
    if(n === 0 ) return 1
    let ans = temp(x,parseInt(n/2))
    if(n % 2 === 0) return ans * ans
    return ans * ans * x

}