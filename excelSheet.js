// Write a function

// titleToNumber(title) or title_to_number(title) or titleToNb title ...

// (depending on the language)

// that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

// Examples:

// titleTonumber('A') === 1
// titleTonumber('Z') === 26
// titleTonumber('AA') === 27


// Solution
function titleToNumber(title) {
    let result = 0;
    for (let i = 0; i < title.length; i++) {
        const charValue = title.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + charValue;
    }
    return result;
}