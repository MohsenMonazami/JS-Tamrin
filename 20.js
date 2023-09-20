//20

function generate() {
    const result = [];

    for (let thousands = 1; thousands <= 9; thousands += 2) {
        for (let hundreds = 0; hundreds <= 8; hundreds += 2) {
            for (let tens = 0; tens <= 9; tens++) {
                for (let ones = 1; ones <= 9; ones += 2) {
                    const number = thousands * 1000 + hundreds * 100 + tens * 10 + ones;
                    result.push(number);
                }
            }
        }
    }

    return result;
}

const numbers = generate();

console.log(numbers);