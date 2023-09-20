//06 

function calculate(number) {
    let sumOfDigits = 0;

    while (num > 0) {
        sumOfDigits += num % 10;
        num = Math.floor(num / 10);
    }


    if (sumOfDigits === 0) {
        return false; 
    }
    
    return number % sumOfDigits === 0;
}

const result = calculate(18);
console.log(result); 