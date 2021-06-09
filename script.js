const translate = (str) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const closingPunctuation = ["!", ".", "?", "!!!", "...",]

    // commented out below to meet conflicting build spec & extended challenges case-sensitivity
    // str = str.toLowerCase();
    let newStr = "";
    let punctuationIndex;

    // punctuation check function -- moves punctuation to last index
    let closingPuncuationCheck = (str) => {
        let split = str.split("");
        console.log(split);
        for (let char of str){
            if (closingPunctuation.includes(char)){
                let punctuationIndex = split.indexOf(char);
                split.push(split.splice(punctuationIndex, 1)[0]);
                const backToString = split.join("");
                let newStr = backToString;
                console.log(newStr);
                return newStr;
                break;
            };
        };   
    }
    
    // non vowels will equal -1
    if (vowels.indexOf(str[0]) > -1){
        newStr = `${str}way`;
        console.log(newStr)
        // WHY WONT THIS WORK??
        closingPuncuationCheck(newStr);

        console.log(newStr)
        return newStr;
    } else if (vowels.indexOf(str[0]) == -1){
        for (let char of str){
            if (vowels.includes(char)){
                vowelIndex = str.indexOf(char);
                break;
            };
        };
        console.log(vowelIndex);
        return `${str.slice(vowelIndex) + str.slice(0, vowelIndex)}ay`;
        
    }

    
    
}

// console.log(translate("al?lo"));

module.exports = {
    translate
}