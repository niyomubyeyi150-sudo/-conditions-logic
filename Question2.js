// Student Admission
let marks=80;
let hasCertificate= true;

//1. check if marks are 70 or higher
if (marks === 70){
    console.log("Marks are 70 ");
}else if (marks >= 70){
    console.log("Marks are higher");
}else {
    console.log("marks are below");
}
// 2. Check if the student has a certificate.
if (hasCertificate){
    console.log("Student has certificate");
}else {
    console.log ("Student has no certificate");
}
// 3. Check if the student qualifies using marks OR certificate.
if (marks >= 70 && hasCertificate){
    console.log("Student Qualifies");
}else {
    console.log("Student not Qualifies");
}