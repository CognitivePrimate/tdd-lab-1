const translate = (str) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const closingPunctuation = ["!", ".", "?", "!!!", "...",];
    const symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "`", "~", "|", "{", "}", "[", "]", "<", ">",];
    let hasPunctuation = false;
    let newStr = "";
    // commented out below to meet conflicting build spec & extended challenges case-sensitivity
    // str = str.toLowerCase();

    // symbol check
    for (let char of str){
        if (symbols.includes(char)){
            return str;
        };
    }
    
    

    // punctuation check function -- moves punctuation to last index
    let closingPuncuationCheck = (str) => {
        let split = str.split("");
        for (let char of str){
            if (closingPunctuation.includes(char)){
                let split = str.split("");
                let punctuationIndex = split.indexOf(char);
                split.push(split.splice(punctuationIndex, 1)[0]);
                const backToString = split.join("");
                let newStr = backToString;
                return newStr;
            }; 
        };   
    }
    
    // non vowels will equal -1
    if (vowels.indexOf(str[0]) > -1){
        newStr = `${str}way`;
        

        for (let char of str){
            if (closingPunctuation.includes(char)){
                newStr = closingPuncuationCheck(newStr);
                continue;
            }
        }

        return newStr;
         
    } else if (vowels.indexOf(str[0]) == -1){
        let noPunct = () => `${str.slice(vowelIndex) + str.slice(0, vowelIndex)}ay`;
        for (let char of str){
            if (vowels.includes(char)){
                vowelIndex = str.indexOf(char);
                break;
            };
        };

        // if punctuation is found in consonant starting string
        for (let char of str){
            if (closingPunctuation.includes(char)){
                hasPunctuation = true;
                str = `${str}`;
                str = noPunct();
                str = closingPuncuationCheck(str)
                break;
            };
        };

        // final result returns when word starts with consonant but result may vary based on punctuation
        return hasPunctuation === true ? str : noPunct();
        
    };
}

console.log(translate("shouldn't"));

module.exports = {
    translate
}