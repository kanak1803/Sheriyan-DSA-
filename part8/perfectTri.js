for (let row = 1; row <= 5; row++) {
  for (let col = 1; col <= 5 - row; col++) {
    process.stdout.write(" ");
  }

  for (let col = 1; col <= row; col++) {
    process.stdout.write("* ");
  }

  console.log();
}
