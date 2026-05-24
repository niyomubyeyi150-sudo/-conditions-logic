// Flight Check-in
let passportValid = true;
let ticketPaid = false;
// 1. Check if the passport is valid.
if (passportValid === true){
    console.log("your passport is Valid");
}else {
    console.log ("your passport is not valid");
}
// 2. Check if the ticket is paid.
if (ticketPaid === true){
    console.log(" you have paid the ticket");
}else{
    console.log("you have not paid the ticket");
}
// 3. Check if the passenger can board.
if (passportValid && ticketPaid){
    console.log("passenger can board");
} else {
    console.log ("passenger cannot board");
}