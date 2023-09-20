//21

function generate() {
    const oddNumbers = [1, 3, 5, 7, 9]; 
    const result = [];

    for (let i = 0; i < oddNumbers.length; i++) {
        for (let j = 0; j < oddNumbers.length; j++) {
            for (let k = 0; k < oddNumbers.length; k++) {
                for (let l = 0; l < oddNumbers.length; l++) {
                    const number = oddNumbers[i] * 1000 + oddNumbers[j] * 100 + oddNumbers[k] * 10 + oddNumbers[l];
                    result.push(number);
                }
            }
        }
    }

    return result;
}

const finall = generate();

console.log(finall);