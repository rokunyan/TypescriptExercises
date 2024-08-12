"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = void 0;
const moveZeros = (list) => {
    let length = 0;
    let newList = [];
    let listLen = list.length;
    for (let i = 0; i < listLen; i++) {
        if (list[i] === 0) {
            length++;
        }
        else
            newList.push(list[i]);
    }
    for (let i = 0; i < length; i++) {
        newList.push(0);
    }
    console.log(newList);
};
exports.moveZeros = moveZeros;
(0, exports.moveZeros)([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
