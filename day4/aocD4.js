// Requiring fs module in which 
// readFile function is defined. 
const fs = require('fs');
let validCount = 0;

// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
fs.readFile('batch', 'utf-8', (err, data) => { 
    if (err) throw err; 
    data.split("\n\n").forEach(passport => {
        // console.log('passport: ', passport);
        let passportCheck = 0;
        const byr = passport.search('byr')>-1; //(Birth Year)
        const iyr = passport.search('iyr')>-1; //(Issue Year)
        const eyr = passport.search('eyr')>-1; //(Expiration Year)
        const hgt = passport.search('hgt')>-1; //(Height)
        const hcl = passport.search('hcl')>-1; //(Hair Color)
        const ecl = passport.search('ecl')>-1; //(Eye Color)
        const pid = passport.search('pid')>-1; //(Passport ID)
        const cid = passport.search('cid')>-1; //(Country ID)
       
        validCount += ( byr && iyr && eyr && hgt && hcl && ecl && pid ) ? 1 : 0;
    })
    console.log('Valid passport count: ', validCount);
})
