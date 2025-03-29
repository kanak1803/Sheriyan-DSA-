let array = [0, 0, 1, 1, 2, 3, 3];

let i = 0;
let j = 1;

while (i < array  - 1) {
  if (array[i] !== array[i + 1]) {
    array[j] = array[i + 1];
    j++;
  }
  i++;
}
console.log(j)
console.log(array);
