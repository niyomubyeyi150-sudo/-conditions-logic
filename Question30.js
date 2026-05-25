//  Smart Parking System
let hoursParked = 7;
let paymentCompleted = false;
// 1. Check if parking exceeded 5 hours.
if (hoursParked > 5){
    console.log("Parking exceeded 5 hours");
}else{
    console.log("Parking is not exceeded 5 hours"); 
}
// 2. Check if payment is completed.
if (paymentCompleted === true){
 console.log("payment is complete");
}else{
    console.log("payment is not complete");
}
// 3. Check if the penalty applies.
if (hoursParked > 5 && paymentCompleted){
    console.log("The penalty applied");
}else{
    console.log("The penalty does not applied");
}