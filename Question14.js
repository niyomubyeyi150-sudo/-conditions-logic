// Hotel Booking
// 1. Check if rooms are available.
let roomsAvailable = 12;
let roomsRequested = 3;
// 1. Check if rooms are available.
if (roomsAvailable >= roomsRequested){
    console.log("Rooms are available");
}
// 2. Check if the hotel is full.
 if (roomsAvailable === 0){
    console.log("Hotel is full");
}
// 3. Check if requested rooms can be booked.
  if (roomsRequested <= roomsAvailable){
    console.log("requested room can be booked");
}else{
    console.log("rooms are not available");
}
