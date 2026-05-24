// Smart Home Security
let doorLocked = true;
let alarmOn = true;
// 1. Check if the door is locked.
if (doorLocked === true){
    console.log(" The door is locked");
}else {
    console.log (" the door is not locked");
}
// 2. Check if the alarm is active.
if(alarmOn === true){
    console.log("The alarm is active");
}else{
    console.log("The alarm is not active ");
}
// 3. Check if the house is secure.
if (doorLocked && alarmOn){
    console.log("The house is secured");
}else {
    console.log("The house is not secured");
}
