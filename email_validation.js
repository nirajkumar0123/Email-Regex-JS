// UC 1: Validate mandatory second part (bridgelabz) with @
function isValidEmailUC1(email) {
    let pattern = /^[a-zA-Z0-9]+@bridgelabz$/;
    return pattern.test(email);
}

// Test Cases for UC 1
console.log(isValidEmailUC1("abc@bridgelabz")); 
console.log(isValidEmailUC1("abc@xyz"));         
console.log(isValidEmailUC1("abcxyz@bridgelabz"));


// UC 2: Ensure "." after bridgelabz and validate mandatory third part (co)
function isValidEmailUC2(email) {
    let pattern = /^[a-zA-Z0-9]+@bridgelabz\.co$/;
    return pattern.test(email);
}

// Test Cases for UC 2
console.log(isValidEmailUC2("abc@bridgelabz.co")); 
console.log(isValidEmailUC2("abc@bridgelabzcom"));
console.log(isValidEmailUC2("abc@xyz.co"));