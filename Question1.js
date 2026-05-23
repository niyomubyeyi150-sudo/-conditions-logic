//  ATM Withdrawal
let balance= 50000;
let withdrawAmount=10000;
//1. check if the balance is enough for withdraw
if (balance>=withdrawAmount){
    console.log("Balance is enough for withdraw,withdrawAmount:", + withdrawAmount);
}else{
    console.log("Balance is not enough");   
}
//2.Check if the balance is exactly Zero(0)
if (balance===0){
    console.log("Balance is exactly 0");
}else {
    console.log("Balance is not 0. Current balance:", + balance);
}
//3.Check if the withdrawAmount is not greater than the balance
if(withdrawAmount > balance){
    balance -= withdrawAmount;
    console.log("withdrawAmount is greater than balance");
}else{
    console.log("withdraw successful");
}