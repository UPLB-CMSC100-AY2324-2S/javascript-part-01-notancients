
/*
    Name: validatePassword
    Paremeters: String pass1, String pass2
    Returns: boolean valid
    Description:
        A function that checks if two strings match and if they follow the expected format.
*/
function validatePassword(pass1, pass2) {
    console.log(pass1, pass2)
    let numberFlag = false;
    let upperFlag = false;
    let lowerFlag = false;

    //  Early returns for major criteria if they don't match from the get go
    //  or even if they do match and are not of the desired length
    if (pass1 !== pass2 || pass1.length < 8) {
        return false;
    }

    // Added flags as to not check each character if number, lower, upper
    // every time
    for(let i = 0; i<pass1.length; i++) {
        console.log(`Loop: ${i}`);
        if(!numberFlag) {
            // console.log("Num Flag")
            if(!isNaN(parseInt(pass1[i]))) {
                // console.log(parseInt(pass1[i]));
                // console.log(pass1[i]);
                // console.log("Num to true")
                numberFlag = true;
            }
        }

        // for checking of uppercase and lowercase, need to add number checker
        // since even if a number is case changed it is still equal to its
        // original version
        if(!upperFlag) {
            // console.log("Up Flag")
             if(isNaN(pass1[i]) && pass1[i] === pass1[i].toUpperCase()) {
                // console.log(pass1[i].toUpperCase());
                // console.log(pass1[i]);
                // console.log("Upper to true")
                upperFlag = true;
             }
        }
        if(!lowerFlag) {
            // console.log("Low Flag")
            if(isNaN(pass1[i]) && pass1[i] === pass1[i].toLowerCase()) {
                // console.log(pass1[i].toLowerCase());
                // console.log(pass1[i]);
                // console.log("lower to true")
                lowerFlag = true;
             }
        }
    }
    
    // Only returns true if all three flags are true
    return(numberFlag && upperFlag && lowerFlag);
}

/*
    Name: reversePassword
    Paremeters: String password
    Returns: String reversed
    Description:
        A function that returns a reversed version of the inputed string function.
*/
function reversePassword(password) {
    let reverse = "";
    for(let i = (password.length-1); i>=0; i--) {
        reverse = `${reverse}${password[i]}`;
    }
    return(reverse);
}

/*
    Name: storeToObject
    Paremeters: 
        String name
        String pass1
        String pass2
    Returns: 
        Account json
    Description:
        Return an object with the user's name and password. If the passwords given
        are valid, reverse the password and store it as the new password. Else,
        the value of the newpassword is the first password (pass1).
        
*/
function storeToObject(name, pass1, pass2) {
    let account = {
        "name": name,
        "newpassword":pass1
    }
    if(validatePassword(pass1, pass2)) {
        account.newpassword = reversePassword(pass1);
    }

    return (account);
}


let string1 = "Hello123";
let string2 = "Hello123";
// console.log(validatePassword(string1, string2));

let string3 = "HELLO123";
let string4 = "HELLO123";
// console.log(validatePassword(string3, string4));

let string5 = "hello123";
let string6 = "hello123";
// console.log(validatePassword(string5, string6));

let string7 = "hell23";
let string8 = "hell23";
// console.log(validatePassword(string7, string8));


// Reference:
// https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip
// https://stackoverflow.com/questions/40500933/why-does-the-javascripts-touppercase-function-include-numbers