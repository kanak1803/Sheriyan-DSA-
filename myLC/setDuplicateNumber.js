let nums = [1,2,3,4];
let seen = new Set()
let haveDup = false

for (const num of nums) {
    if(seen.has(num)){
        haveDup =true
        break
    }
    seen.add(num)
    
}

console.log(haveDup)