"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEquivalent = void 0;
var vowels = ['a', 'e', 'i', 'o', 'u'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var integers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const isEquivalent = (input) => {
    let newString = input.toLowerCase();
    if (integers.includes(input)) {
        return input;
    }
    else {
        let index = alphabet.indexOf(newString);
        let next = "";
        if (index == (alphabet.length - 1)) {
            next = "a";
        }
        else
            next = alphabet[index + 1];
        if (vowels.includes(next)) {
            return next.toUpperCase();
        }
        return next;
    }
};
exports.isEquivalent = isEquivalent;
function changeItUp(input) {
    let length = input.length;
    let newString = "";
    for (let i = 0; i < length; i++) {
        newString += (0, exports.isEquivalent)(input.charAt(i));
    }
    return newString;
}
console.log(changeItUp("Cat30"));
