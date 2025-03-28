let arr = new Array(128).fill(0);
let string = "hello";

for (let i = 0; i < string.length; i++) {
  let chAscii = string.charCodeAt(i);
  arr[chAscii] += 1;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(`${String.fromCharCode(i)} appears at ${arr[i]} times`);
  }
}
