let string = "kaanak";
let i = 0;
let j = string.length - 1;
let isPalimdrom = true;

while (i < j) {
  if (string[i] !== string[j]) {
    console.log("string is not palimdrom");
    isPalimdrom = false;
    break;
  }
  i++;
  j--;
}
if (isPalimdrom) {
  console.log("string is  palimdrom");
}
