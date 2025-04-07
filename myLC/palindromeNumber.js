let x = 121;
let num  = 0

while (x > 0) {
  num = num * 10  + x % 10
  x = Math.floor(x/10)
}

if(num == x) return true
