//  Movie Streaming Access
let subscriptionActive = true;
let internetConnected = true;
// 1. Check if the subscription is active.
if (subscriptionActive === true){
    console.log("The subscription is active");
}else{
    console.log(" The subscription is not active");
}
// 2. Check if the internet exists.
if (internetConnected === true){
    console.log("The internet exist");
}else{
    console.log("The internet not exist");
}
// 3. Check if streaming can start.
if (subscriptionActive && internetConnected){
    console.log("Streaming can start");
}else {
    console.log("Streaming cannot start");
}