const translate = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    str = str.toLowerCase();
    console.log(str);
    let newStr = "";
    
    // non vowels will equal -1
    if (vowels.indexOf(str[0]) > -1){
        newStr = `${str}way`;
        return newStr.toLowerCase();
    }else if (vowels.indexOf(str[0]) == -1){
        for (let char of str){
            if (vowels.includes(char)){
                vowelIndex = str.indexOf(char);
                break;
            };
        }
        console.log(vowelIndex);
        return `${str.slice(vowelIndex) + str.slice(0, vowelIndex)}ay`;
        
    }

    // REFACTOR WITH SWITCH STATEMENT????
    // if (str[0].includes("o")){
    //     console.log("first letter is vowel");
    // }
    
}


module.exports = {
    translate
}