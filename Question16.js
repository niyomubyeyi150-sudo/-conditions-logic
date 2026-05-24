// E-learning Platform
let completedLessons = 15;
let quizPassed = true;
// 1. Check if completed lessons are above 10.
if (completedLessons > 10){
    console.log ("completed lesson are above 10");
}else {
    console.log( "completed lesson are below 10");
}
// 2. Check if the quiz is passed.
if (quizPassed === true){
    console.log("Quiz is passed");
}else {
    console.log(" Quiz is not passed");
}
// 3. Check if a certificate should be awarded.
if (completedLessons > 10 && quizPassed){
    console.log("A certificate should be awarded");
}else{
    console.log("A certificate should not be awarded");
}