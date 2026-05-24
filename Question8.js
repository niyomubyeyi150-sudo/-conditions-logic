//  Electricity Usage

let unitsUsed = 140;
if (unitsUsed > 100){
    console.log("High electricity usage");
}else if (unitsUsed <= 50 && unitsUsed !== 0){ 
    console.log("lower usage of electricity , Electricity is available");
}else{
    console.log("electricity is not available"); 
}