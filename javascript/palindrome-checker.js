// write a function that checks if a string is a palinrome

palindromeChecker = function(string) {
    let leftIndex = 0; 
    let rightIndex = string.length - 1; 

    while (leftIndex < string.length / 2) {
        if (string[leftIndex] !== string[rightIndex]) {
            return false; 
        }
        leftIndex++; 
        rightIndex--; 
    }
    return true;
}

string1 = "racecar";
string2 = "alexander";
string3 = "hobo";
string4 = "abba";

console.log(palindromeChecker(string1));
console.log(palindromeChecker(string2));
console.log(palindromeChecker(string3));
console.log(palindromeChecker(string4));