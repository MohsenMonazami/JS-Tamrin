//03

let sum = 0;
for(i = 9 ; i <= 900 ; i++){
    if(i % 9 === 0){
        sum += i;
        console.log(i);
    }
}
console.log('sum is: ' , sum);