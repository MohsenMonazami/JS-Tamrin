//22

function generate(){
    const resault = [];

    for(let tens = 0 ; tens <= 9 ; tens +=2){
        for(let ones = 0 ; ones <=9 ; ones++){
            const hundreds = ones;
            const number = hundreds*100 + tens*10 + ones;
            resault.push(number);
        }
    }
    
    return resault;
}

const numbers = generate();
console.log(numbers);