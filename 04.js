//04

let N = 48;
let X = 3;
let P = 0;
let S = 0;
let SinX = 0;
let T = 0;

a
for(let i = 3; i <= N; i+=3){
    P += 1/i;
}
console.log('P= ' , P);

b
for(let i = 0; i <= N ; i++){
    S += X**i;
}
console.log('S= ' , S);

for(let i = X; i <= N ; i++){
    SinX += X**(2*N-1)/(2*N-1)
}
console.log(SinX);

d
for(let i = 1; i <= N ; i++){
    T += i*(i-1);
}
console.log('T= ' , T);