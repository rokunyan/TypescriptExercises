"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateISBN = void 0;
var integers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const isbnExamples = ["1112223339",
    "111222333",
    "1112223339X",
    "1234554321",
    "1234512345",
    "048665088X",
    "X123456788"
];
const validateISBN = (input) => {
    if (input.length != 10 || !isValidChar(input)) {
        return false;
    }
    else {
        let sum = 0;
        for (let i = 0; i < 10; i++) {
            if (i == 9 && input.charAt(9) == 'X') {
                sum += (10 * 10);
            }
            else
                sum += (input.charAt(i) * (i + 1));
        }
        if ((sum % 11) == 0) {
            return true;
        }
        else
            return false;
    }
};
exports.validateISBN = validateISBN;
function isValidChar(input) {
    for (let i = 0; i < 9; i++) {
        if (!integers.includes(input.charAt(i))) {
            return false;
        }
    }
    return true;
}
isbnExamples.forEach((element) => {
    let isValid = (0, exports.validateISBN)(element);
    console.log(`${element} -> ${isValid}`);
});
