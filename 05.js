//05

let income = 60000;
let cost = 0;

if(income < 50000){
    console.log(cost);
} else if(income > 50000 && income <= 100000){

    cost = (income - 50000)*0.1
    console.log(cost);
} else if( income > 100000){

    cost = (income - 100000)*.15;
    console.log(cost);
}