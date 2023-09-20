//15

computerCode = 24
EnglishCode = 2
SportCode = 3

male = 1
female = 0

const people = [
    {name: "Mohsen", dipCode: 0, age: 21, majorCode: 24, genderCode: 1},
    {name: "Hamed", dipCode: 2, age: 27, majorCode: 24, genderCode: 1},
    {name: "Nadiya", dipCode: 2, age: 21, majorCode: 24, genderCode: 0},
    {name: "Gilda", dipCode: 1, age: 16, majorCode: 3, genderCode: 0},
]

let a = 0;
let b = 0;
let c = 0;

people.map((student) =>{
    if(student.genderCode===1 && student.majorCode===24){
        a += 1
    }

    if(student.age < 18){
        b += 1
    }

    if(student.majorCode === 24){
        c += 1

    }
     
})

let percentage = c / people.length * 100 ;
console.log(a);
console.log(b);
console.log(percentage , "%");