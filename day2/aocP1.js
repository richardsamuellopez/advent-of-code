// Requiring fs module in which 
// readFile function is defined. 
const fs = require('fs');
let validCount = 0;

let x = "mfvxmmm";
let xArray =[...x].filter(y => {return y==="m"}).length;
// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
fs.readFile('passwords', 'utf-8', (err, data) => { 
    if (err) throw err; 
    data.split("\n").forEach(password => {
        const dashPos = password.indexOf("-");
        const semiPos = password.indexOf(":");
        const low = password.substring(0, dashPos);
        const high = password.substring(dashPos+1, semiPos-2);
        const constraint = password.substring(semiPos-1, semiPos);
        const passwordString = password.substring(semiPos+2);
        const isPosOne = passwordString.substring(low-1, low) === constraint;
        const isPosTwo = passwordString.substring(high-1, high) === constraint;
        validCount += ((isPosOne && !isPosTwo) || (!isPosOne && isPosTwo));
    })
    console.log('Valid password count: ', validCount);
})
