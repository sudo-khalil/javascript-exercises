const palindromes = function (string) {
    string=string.toLowerCase();
    let text=string;
    text=text.split("");
    text=text.filter((value) => ((value!==".")&&(value!==",")&&(value!=="!")&&(value!==" ")))
    let temp=text;
    temp=temp.join("")
    let revText=text;
    revText.reverse();
    revText=revText.join("");
    if (revText===temp) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
