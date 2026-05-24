//  Online Gaming Access
let age = 15;
let parentPermission = true;
// 1. Check if your age is 18 or older.
if (age >= 18){
    console.log ("Your age is 18 or order");
}else {
    console.log("your age is not 18 or older");
}
// 2. Check if parental permission exists.
if (parentPermission === true){
    console.log("parental permission exist");
}else{
    console.log("parental permission is not exist");
}
// 3. Check if access should be granted.
if (age >= 18 || parentPermission){
    console.log("access should be granted");
}else {
    console.log("access should not be granted");
}