/*
=== String challenge ====
Palindrome: a word, phrase, or sequence that reads the same backward as forwards, e.g. madam
- Create a repo called a palindrome.
- Open your cloned repo into a VS code
- Create a function called isPalindrome that will take a single parameter and return a string value.
The output should look like: madam is a palindrome if the user passes madam as an argument.
NB: When creating a function, we refer to the variable between the parenthesis as a parameter.
When we call or invoke a function, we refer to it as an argument.
*/

function isPalindrome(madam) {
    if (madam === madam.split('').reverse().join('')) {
        return `${madam} is a palindrome`;
    } else {
        return `${madam} is not a palindrome`;
    }
}
let stringWord = "madam";
let palindrome = isPalindrome(stringWord);
console.log(palindrome);