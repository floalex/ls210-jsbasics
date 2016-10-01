function printOddNumbers(number) {
  for (var i = 1; i <= number; i++)  {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

// function printOddNumbers(number) {
//   for (var i = 1; i<= number; i += 2) {
//     console.log(i);
//   }
// }

// function printOddNumbers(number) {
//   for (var i = 1; i<= number; i += 2) {
//     if (i % 2 === 0) {
//       continue;
//     }

//     console.log(i);
//   }
// }

printOddNumbers(19);