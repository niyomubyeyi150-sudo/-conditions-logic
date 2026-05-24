// Fuel Station

let fuelAvailable = 100;
let fuelNeeded = 40;
// 1. Check if enough fuel exists.
if (fuelAvailable >= fuelNeeded){
    console.log("Enough fuel exist");
}else {
    console.log("Enough fuel does not exist");
}
// 2. Check if fuel is empty.
if (fuelAvailable === 0){
    console.log(  "fuel is empty");
}else{
    console.log("fuel is not empty");
}
// 3. Check if fuel needed is NOT greater than available fuel.
if (!(fuelNeeded >fuelAvailable )){
    console.log("fuel needed is not greater than available fuel");
}else{
    console.log("fuel needed is greater than available fuel");
}