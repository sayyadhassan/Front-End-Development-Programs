const age= 50;

// If-else condition
if(age>=18){
    console.log("Your are eligble");
}
else{
    console.log("You are not eligble");
}

// Ternary Operator (?)
const result = age <= 18 ? "You are eligble" : "You are not eligble";
console.log(result);

const marks = 70;
// Nested if-else condition
if(marks>=80){
    console.log("A+")
}
else if(marks>=60){
    console.log("A");
}
else if(marks >= 50){
    console.log("B");
}
else{
    console.log("Low marks");
}