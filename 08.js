//08

function base3ToBase10(numberInBase3) {
    let base10 = 0;
    let multiplier = 1;

    while (numberInBase3 > 0) {
      const digit = numberInBase3 % 10;
      if (digit < 0 || digit > 2) {
        return "invalid input";
      }
      base10 += digit * multiplier;
      multiplier *= 3;
      numberInBase3 = Math.floor(numberInBase3 / 10);
    }

    return base10;
  }

  console.log(base3ToBase10(10));
  console.log(base3ToBase10(201));
