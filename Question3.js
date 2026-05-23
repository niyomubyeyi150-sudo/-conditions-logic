// Online Food Delivery
let orderAmount = 25000;
let isPremiumUser =false;
// 1. Check if the order amount is greater than 20000.
if (orderAmount > 20000){
    console.log("orderAmount is greater than 20000");
}else{
    console.log("orederAmount is less than 20000");
}
// 2. Check if the customer is premium.
if (isPremiumUser == true){
    console.log ("the customer is premium");
}else{
    console.log("customer is not premium");
}
// 3. Check if free delivery applies.
if (orderAmount > 20000 || isPremiumUser== true ){
    console.log("Free delivery is applies");
}