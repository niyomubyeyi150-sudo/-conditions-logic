// Password Validation
let savedPassword="admin123";
let inputPassword="admin123";
// 1.Check if passwords match.
if (savedPassword === inputPassword){
    console.log("Password match");
}
// 2. Check if password are not equal 
else if (savedPassword !== inputPassword && inputPassword == "admin123"){
    console.log("Password are not equal .inputPasword :" + inputPassword);
}else{
    console.log("invalid password");
}
   



