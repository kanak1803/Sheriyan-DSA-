for (let row = 1; row <= 5; row++) {
  for (let col = 0; col <= 5; col++) {
    if (row + col == 5 + 1 || row == col) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
