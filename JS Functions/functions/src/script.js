function sumSequence(n) {
    let sum = 0;
    if (n < 0) {
        return "n should be positive";
    } else {
        for (let e = 0; e < n; e++) {
            sum += 1 / 2 ** (e + 1);
        }
        return sum.toFixed(2);
    }
}

function mergeArrays(...arr) {
    // let arraySpart = arr.flat(Infinity).reduce(function (acc, cur) {
    //     if (acc[cur]) {
    //         return acc;
    //     } else {
    //         return acc + cur;
    //     }
    // }, []);
    // console.log(arraySpart);
    // mergeArrays.pop(arraySpart);
    // console.log(mergeArrays);
    // return mergeArrays;
    return (arraySplit = arr.flat(Infinity));
}

function isPalindrome(str) {
    //♦ First we break our string and we create an array of the letters
    let brokenStr = str.split("");

    //♦ we take out the spaces from the array, if they exist
    let arrayWithoutSpaces;
    if (brokenStr.includes(" ")) {
        arrayWithoutSpaces = brokenStr.filter((el) => el !== " ");
    } else {
        arrayWithoutSpaces = brokenStr;
    }

    //♦ we apply "reduce" on the array of letters, and we create an object. The object's keys are the letters, the object's values signify how many times each letter appears in the string
    let countLettersFinal = arrayWithoutSpaces.reduce((acc, currentValue) => {
        //•if the letter already has a counter, we increase it
        if (acc[currentValue]) {
            acc[currentValue] += 1;
        }
        //•if the letter does not have a counter, we create it
        else {
            acc[currentValue] = 1;
        }
        return acc;
    }, {});

    //♦ There are 2 favorable cases:
    //--either all the letters appear an even number of times
    //--or one of the letter appears an uneven number of times, and the rest of them appear an even number of times

    //♦ We check if we have these 2 cases by working only with the objects' values:
    let valuesToBeChecked = Object.values(countLettersFinal);
    let checkElementsOfArray = valuesToBeChecked.map(function (element) {
        if (element % 2 === 0) {
            return "even";
        } else {
            return "uneven";
        }
    });

    //♦If all character appear an even number of times, we can make a palindrom.
    // If one or more char appear an uneven number of times, we must make more calculations:

    //♦First we check how many 'even' and 'uneven' we have, and we create an array with 2 elements for 'even' and 'uneven':
    let unevenLettersNumber = checkElementsOfArray.reduce(
        (acc, currentValue) => {
            //if the even/uneven letter already has a counter, we increase it
            if (acc[currentValue]) {
                acc[currentValue] += 1;
            }
            //if the even/uneven letter does not have a counter, we create it
            else {
                acc[currentValue] = 1;
            }
            return acc;
        },
        {}
    );

    //♣ We manage the case in which we have one or more 'UNEVEN' number of a specific char in the string
    if (Object.keys(unevenLettersNumber).some((key) => key === "uneven")) {
        //The case in which we have more than one 'UNEVEN' number of a specific char -> the string IS NOT a polindrom
        if (unevenLettersNumber["uneven"] > 1) {
            return false;
        }
        //The case in which we have only one specific char that appears an'UNEVEN' number of times -> the string in a polindrom only if the other chars appear an 'EVEN' number of times. We have to check them all
        else if (unevenLettersNumber["uneven"] == 1) {
            return true;
        }
    }

    //♣ We manage the case in which we only have 'EVEN' number of chars. The string is a palindrom
    else {
        return true;
    }
    // return checkElementsOfArray;
}

function countLetters(str) {
    //We check if a string is passed or not
    if (str) {
        //first we break our string and we create an array of the letters
        let breakStrToArray = str.split("");

        //we take out the spaces from the array
        let arrayWithoutSpaces;
        if (breakStrToArray.includes(" ")) {
            arrayWithoutSpaces = breakStrToArray.filter((el) => el !== " ");
        } else {
            arrayWithoutSpaces = breakStrToArray;
        }

        //we apply "reduce" on the array of letters, and we create an object. The object's keys are the letters, the object's values signify how many times each letter appears in the string
        return (countLettersFinal = arrayWithoutSpaces.reduce(
            (acc, currentValue) => {
                //if the letter already has a counter, we increase it
                if (acc[currentValue]) {
                    acc[currentValue] += 1;
                }
                //if the letter does not have a counter, we create it
                else {
                    acc[currentValue] = 1;
                }
                return acc;
            },
            {}
        ));
    } else return {};
}

function divideArrays(arr, size) {
    let newArray = [];
    if (size > 0 && size < arr.length) {
        for (let m = 0; m < arr.length; m = m + size) {
            let n = m + size;
            newArray.push(arr.slice(m, n));
        }
        return newArray;
    }
    if (size < 0) {
        return [];
    } else {
        return [arr];
    }
}

function encrypt(str, n) {
    //Check if n in negative. If it is we display original string and we stop
    if (n < 0) {
        return str;
    } else {
        //We split the string into an array of letters, so we can manipulate it
        let encryptedCharsUTF16 = str
            .split("")
            .map((char) => char.charCodeAt());
        //We permutate the letters accordingly, considering the n value
        let encryptedCharsReplaced = encryptedCharsUTF16.map(function (char) {
            let diff = char - n;
            //We check to see if the calculation is between 65-90 (for A-z) and 97-122 (for a-z). If it's not, then after the calculus we are not obtaining alphabet letters. We obtain special characters, for either one letter from the original string or more of them, which must be converted in another special manner
            //UPPERCASE LETTER
            if (64 < char && char < 91) {
                //The difference when converting is within the upper case interval
                if (64 < diff && diff < 91) {
                    return diff;
                }
                //If the difference when converting is smaller than 65
                else {
                    return 91 - [n - (char - 65)];
                }

                //LOWERCASE LETTER
            } else if (96 < char && char < 123) {
                if (96 < diff && diff < 123) {
                    return diff;
                }
                //If the difference when converting is smaller than 95
                else {
                    return 123 - [n - (char - 97)];
                }
            } else {
                return "it's not a char";
            }
        });
        //We transform the new letter obtained from ASCII code back to character
        return (backToChar = encryptedCharsReplaced.reduce(function (
            acc,
            currentValue
        ) {
            return acc + String.fromCharCode(currentValue);
        },
        []));
    }
}
