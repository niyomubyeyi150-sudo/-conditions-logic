// Hospital Emergency

let temperature = 40;
let heartRate = 55;
if ( temperature > 39){
    console.log("High fever detected");
}
 if (heartRate < 60){
    console.log("low heart rate detected");
} if (temperature > 39 && heartRate < 60) {
    console.log("Both conditions are TRUE: This is a critical emergency!");
} else {
    console.log("One or both conditions are FALSE.");
}