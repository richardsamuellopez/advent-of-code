// Requiring fs module in which 
// readFile function is defined. 
const fs = require('fs');

// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
fs.readFile('batch', 'utf-8', (err, data) => { 
    if (err) throw err; 
    let validPassports = 0;
    data.split("\n\n").forEach(passport => {
        const passArray = passport.split(/ |\n/) 
        let passObject = passArray.reduce((obj,data)=> {
            let [k, v] = data.split(':')        // split each pair into key/value
            obj[k] = v                          // add the key to the object
            return obj
        }, {})

        const byrPos = passObject.hasOwnProperty('byr');//passport.search('byr'); //(Birth Year)
        const iyrPos = passObject.hasOwnProperty('iyr');//passport.search('iyr'); //(Issue Year)
        const eyrPos = passObject.hasOwnProperty('eyr');//passport.search('eyr'); //(Expiration Year)
        const hgtPos = passObject.hasOwnProperty('hgt');//passport.search('hgt'); //(Height)
        const hclPos = passObject.hasOwnProperty('hcl');//passport.search('hcl'); //(Hair Color)
        const eclPos = passObject.hasOwnProperty('ecl');//passport.search('ecl'); //(Eye Color)
        const pidPos = passObject.hasOwnProperty('pid');//passport.search('pid'); //(Passport ID)
        const cidPos = passObject.hasOwnProperty('cid');//passport.search('cid'); //(Country ID)
        if (byrPos && iyrPos && eyrPos && hgtPos && hclPos && eclPos && pidPos) {
            let byrValue = passObject.byr;
            let iyrValue = passObject.iyr;
            let eyrValue = passObject.eyr;
            let hgtValue = passObject.hgt;
            let hclValue = passObject.hcl;
            let eclValue = passObject.ecl;
            let pidValue = passObject.pid;
            let cidValue = passObject.cid;
            // byr (Birth Year) - four digits; at least 1920 and at most 2002.
            const byrIsValid = byrValue >= 1920 && byrValue <= 2002;
            // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
            const iyrIsValid = iyrValue >= 2010 && passObject.iyr <= 2020;
            // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
            const eyrIsValid = eyrValue >= 2020 && eyrValue <= 2030;
            // hgt (Height) - a number followed by either cm or in:
            let hgtIsValid = false;
            const hgtIsCM = hgtValue.search('cm');
            const hgtIsIN = hgtValue.search('in');
            let cmValue = 0;
            let inValue = 0;
            // If cm, the number must be at least 150 and at most 193.
            if (hgtIsCM >-1 && hgtIsIN == -1) {
                cmValue = hgtValue.split('cm')[0];
                hgtIsValid = cmValue >=150 && cmValue <=193;
            }
            // If in, the number must be at least 59 and at most 76.
            if (hgtIsCM == -1 && hgtIsIN > -1) {
                inValue = hgtValue.split('in')[0];
                hgtIsValid = inValue >=59 && inValue <=76;
            }
            // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
            const hclIsValid = hclValue.split(/#[0-9a-f]{6}/gi).length == 2;
            // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
            const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
            const eclIsValid = validColors.findIndex(x => x === eclValue)>-1;
            // pid (Passport ID) - a nine-digit number, including leading zeroes.
            const pidSplit = pidValue.split(/\d{9}/g);
            const pidIsValid = pidSplit.length == 2 && pidSplit[0] === '' && pidSplit[1] === '';
            // cid (Country ID) - ignored, missing or not.

            validPassports += (byrIsValid && iyrIsValid && eyrIsValid && hgtIsValid && hclIsValid && eclIsValid && pidIsValid) ? 1: 0;
        }
    })
    console.log('Valid passport count: ', validPassports);
})
