function printMultiples(number) {
  for (var i = 100; i >= number; i--) {
    if (i % number === 0 && i % 2 === 1) {
      console.log(i);
    }
  }
}

printMultiples(17);
printMultiples(21);