const grade = "A";

switch(grade){
    case "A+" : case "A":  // we can execute same statement for multiple cases
        console.log("Very Good");
        break;
    case "B" :
        console.lot("Good");
        break;
    case "C" :
        console.log("Keep it up");
        break;
    default:
        console.log("Improve youself");            
}