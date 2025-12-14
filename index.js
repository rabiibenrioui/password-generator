function GeneratePassword(passwordLength, allowLowercase, allowUppercase, allowNumbers, allowSymbols)
{
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789"
    const symbolChars = "!@#$&*"

    let allowedChars = "";
    let password = "";

    allowedChars += allowLowercase ? lowercaseChars : "";
    allowedChars += allowUppercase ? uppercaseChars : "";
    allowedChars += allowNumbers ? numberChars : "";
    allowedChars += allowSymbols ? symbolChars : "";

    for(let i = 0; i < passwordLength; i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex];
    }

    if(password <= 0)
    {
        password = "(The password should be at least 1 character long)"
    } 
    else if(allowedChars.length === 0)
    {
        password = "(The password should contain at least 1 characteristic)"
    }

    return password;
}

const passwordLength = 10;
const allowLowercase = true;
const allowUppercase = true;
const allowNumbers = true;
const allowSymbols = true;

const password = GeneratePassword(passwordLength, allowLowercase, allowUppercase, allowNumbers, allowSymbols)
console.log("The generated password is: " + password);