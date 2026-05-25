//  Library Borrowing
let booksBorrowed = 2;
let maxBooks = 5;
// 1. Check if books borrowed are less than max allowed.
if (booksBorrowed < maxBooks){
    console.log("Books borrowed are less than max allowed");
}else {
    console.log("Books borrowed are not less than max allowed"); 
}
// 2. Check if the borrowing limit is reached.
if (booksBorrowed === maxBooks){
    console.log(" The borrowing limit is reached");
}else {
     console.log(" The borrowing limit is not reached");
}
// 3. Check if another book can be borrowed
if (booksBorrowed < maxBooks){
    console.log("Another book can be borrowed");
}else {
    console.log("Another book cannot be borrowed"); 
}