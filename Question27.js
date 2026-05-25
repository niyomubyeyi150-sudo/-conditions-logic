// Water Tank Monitoring
let waterLevel = 15;
// 1. Check if the water level is below 20.
if (waterLevel < 20 ){
    console.log("The water level is below 20");
}else{
    console.log("The water level is above 20");
}
// 2. Check if the tank is full.
if (waterLevel === 100){
    console.log ("The tank is full")
}else {
    console.log("The tank is not full");
}
// 3. Check if the water level is NOT 0.
if (waterLevel !== 0){
    console.log("The water level is not 0");
}else{
    console.log("The water level is 0");
}