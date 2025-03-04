// UC 1: Validate mandatory second part (bridgelabz) with @
function isValidEmailUC1(email) {
    let pattern = /^[a-zA-Z0-9]+@bridgelabz$/;
    return pattern.test(email);
}

// Test Cases for UC 1
console.log(isValidEmailUC1("abc@bridgelabz")); 
console.log(isValidEmailUC1("abc@xyz"));         
console.log(isValidEmailUC1("abcxyz@bridgelabz"));