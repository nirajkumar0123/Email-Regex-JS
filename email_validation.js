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

// UC3: Ensure "." after bridgelabz and validate mandatory 3rd part (co)
function isValidEmailUC3(email) {
    let pattern = /^[a-zA-Z0-9]+@bridgelabz\.co$/;
    return pattern.test(email);
}

// Test Cases for UC3
console.log(isValidEmailUC3("abc@bridgelabz.co"));   
console.log(isValidEmailUC3("abc.xyz@bridgelabz.co"));  
console.log(isValidEmailUC3("abc@bridgelabzcom"));      
console.log(isValidEmailUC3("abc@bridgelabz"));         
console.log(isValidEmailUC3("abc@xyz.co"));            
console.log(isValidEmailUC3("abc@bridgelabz.co.in"));

// UC4: Handle optional part (xyz) with valid special characters (_,+,-,.)
function isValidEmailUC4(email) {
    let pattern = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@bridgelabz\.co$/;
    return pattern.test(email);
}

// Test Cases for UC4
console.log(isValidEmailUC4("abc@bridgelabz.co"));       
console.log(isValidEmailUC4("abc.xyz@bridgelabz.co"));    
console.log(isValidEmailUC4("abc-xyz@bridgelabz.co"));    
console.log(isValidEmailUC4("abc+xyz@bridgelabz.co"));    
console.log(isValidEmailUC4("abc#xyz@bridgelabz.co"));    

