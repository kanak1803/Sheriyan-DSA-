

function improveGCD(a,b){
    if(b ==0 ) return a

    return improveGCD(b,a%b)
}

console.log(improveGCD(16,14))