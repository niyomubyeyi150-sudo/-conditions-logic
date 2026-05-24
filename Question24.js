// Weather Alert
let temperature = 8;
let isRaining = true;
//Check if the temperature is below 10.
if (temperature < 10){ 
    console.log (" The temperature is below");
}else{
    console.log("The temperature is above");
}
// 2. Check if it is raining.
if (isRaining === true){
    console.log("It is raining");
} else{
    console.log("It is not raining");
}
// 3. Check if a cold weather alert should be shown.
if (temperature < 10 && isRaining){
    console.log("A cold weather alert should be down");
}else {
  console.log("A cold weather alert should not be down");  
}

