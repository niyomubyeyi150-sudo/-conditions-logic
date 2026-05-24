// Online Course Payment
let paymentMade = true;
let coursePrice = 75000;
// 1. Check if payment was made.
if (paymentMade === true){
    console.log("Payment was made");
}else{
    console.log("Payment was not made");
}
// 2. Check if the course price is above 50000.
if (coursePrice > 50000){
    console.log("The course price is above 50000");
}else{
    console.log("The course price is below 50000");
}
// 3. Check if students can access the course.
if(paymentMade && coursePrice > 50000){
    console.log("Student can access the course");
}else {
    console.log("Student cannot access the course");
}
