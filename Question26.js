// Restaurant Table Reservation
let tablesAvailable = 4;
let customers = 2;
// 1. Check if tables are available.
if(tablesAvailable > 0){
    console.log("Table are available");
}else {
    console.log ("Table are not available");
}
// 2. Check if the restaurant is full.
if (tablesAvailable === 0){
    console.log("restaurant is full");
}else {
    console.log ("restaurant is not full");
}
// 3. Check if reservation can proceed.
if (tablesAvailable >= 1){
    console.log("reservation can proceed");
}else {
    console.log("reservation can not proceed");
}