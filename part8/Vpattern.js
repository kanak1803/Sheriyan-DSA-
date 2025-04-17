for (let row = 0; row <= 5; row++) {
  for (let col = 0; col <= 5 * 2; col++) {
    if (row == col || row + col == 5 * 2) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
