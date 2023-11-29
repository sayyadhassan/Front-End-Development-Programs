console.log("         for-loop");
for(let idx=0;idx<5;idx++){
    console.log("Idx");        // Out put will be in this format -> 5 Idx
}

// want to jump 2 times at particular itteration
for(let index=0;index<6;index+=1){
    console.log("Index ",index);
}

console.log("       while-loop");
let steps = 0;
while(steps<6){
    console.log("Steps ",steps);
    steps++;
}

console.log("     do-while-loop");
let step = 9;
do{
    console.log("Step ",step);
    steps +=1;
}while(step<6);