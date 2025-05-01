let a = 20;
let b = 32;

for (let i = 20; i >= 1; i--) {
  if (a % i == 0 && b % i == 0) {
    console.log(i);
    return;
  }
}
console.log("No HCF");
