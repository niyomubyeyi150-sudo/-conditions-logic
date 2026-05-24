//  Bus Seat Booking
let availableSeats =20;
let requestedSeats = 5;
if (requestedSeats <= availableSeats){
    console.log("enough seats exist")
}else if ( availableSeats === 0){
    console.log("The bus is full");
} else if (!(requestedSeats > availableSeats)){
    console.log (" Requested seats are NOT more than available seats");
}