//09

function generatePalindromeNumbers() {
    for (let i = 10; i < 100; i++) {
      const tensDigit = Math.floor(i / 10);
      const onesDigit = i % 10;
      const reverse = onesDigit * 10 + tensDigit;

      if (i === reverse) {
        console.log(i);
      }
    }
  }

  generatePalindromeNumbers();