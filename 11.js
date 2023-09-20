//11

let N = 16;
let count = 0;
let sum = 0

for(let i = 1 ; i <= N ; i++){
    if(N % i === 0){
        count += 1;
        sum += i;
        console.log(i);
    }
}
console.log('count = ' , count);
console.log('sum = ' , sum);
