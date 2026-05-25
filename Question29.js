//  Online Donation Platform
let donationAmount = 15000;
let isVerified = true;
// 1. Check if the donation is above 10000.
if (donationAmount > 10000){
    console.log("The donation is above 10000");
}else{
   console.log("The donation is below 10000"); 
}// 2. Check if the user is verified.
if(isVerified === true){
    console.log("The user is verified");
}else{
     console.log("The user is not verified");
}
// 3. Check if donation qualifies for recognition.
if (donationAmount > 10000 && isVerified === true){
    console.log("Donation Qualifies for recognition");
}else{
    console.log("Donation Qualifies for recognition"); 
}