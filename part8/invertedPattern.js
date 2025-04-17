// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i + 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
