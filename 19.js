//19 ** algoritm doroste vali kar nemikone

let N = 24050 ;

function Calculate(N){

let zeroCount = 0;
let oddCount = 0;
let evenCount = 0;

if( N === 0){
    zeroCount = 1;
}
else {
    while(N > 0){
        const digit = N % 10;
        
        if(digit % 2 === 0){
            evenCount++;
        } else{
            oddCount++;
        }
        if(digit === 0){
            zeroCount++;
        }
    }
}
return{
     oddCount,
     evenCount,
     zeroCount
}
}

console.log(Calculate());