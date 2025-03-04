// UC 1: Validate mandatory second part (bridgelabz) with @
function isValidEmailUC1(email) {
    let pattern = /^[a-zA-Z0-9]+@bridgelabz$/;
    return pattern.test(email);
}

// Test Cases for UC 1
console.log(isValidEmailUC1("abc@bridgelabz")); 
console.log(isValidEmailUC1("abc@xyz"));         
console.log(isValidEmailUC1("abcxyz@bridgelabz"));

// UC2: Ensure @ and validate mandatory 2nd part (bridgelabz)
function isValidEmailUC2(email) {
    let pattern = /^[a-zA-Z0-9]+@bridgelabz$/;
    return pattern.test(email);
}

// Test Cases for UC2
console.log(isValidEmailUC2("abc@bridgelabz"));     
console.log(isValidEmailUC2("abc.xyz@bridgelabz"));  
console.log(isValidEmailUC2("abc-xyz@bridgelabz"));  
console.log(isValidEmailUC2("abc+xyz@bridgelabz"));  
