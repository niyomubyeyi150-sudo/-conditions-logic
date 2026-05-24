// Phone Battery
let battery = 15;
// 1. Check if the battery is below 20.
if (battery < 20 ){
    console.log("Battery is low please charge");
}
// 2. Check if the battery is exactly 100.
 if (battery === 100){
    console.log("Full battery");
}
// 3. Check if the battery is NOT 0.
 else if (battery !== 0){
    console.log("Phone is on  ");
}else {
    console.log("Shutdown");
}
