//  Warehouse Inventory
let stock = 200;
let soldItems = 50;
// 1. Check if stock is greater than sold items
if (stock > soldItems){
    console.log("stock is greater than sold items");
}else{
    console.log ("stock is  not greater than sold items");
}
// 2. Check if stock is 0.
if (stock === 0){
    console.log("stock is empty");
}else{
    console.log("stock is not empty");
}
// 3. Check if sold items are NOT more than stock.
if (!(soldItems > stock)){
    console.log("sold items are not greater than stock");
}else{
    console.log("sold items are  greater than stock");
}