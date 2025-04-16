for (let i = 0; i <= 5; i++) {
  let arr = ["A", "B", "C", "D", "E", "F", "G"];
  for (let j = 0; j <= i; j++) {
    process.stdout.write(arr[j] + " ");
  }
  console.log();
}
