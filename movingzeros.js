"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = void 0;
var zeroIndex = [];
function getZeroIndex(list) {
    let length = list.length;
    for (let i = 0; i < length; i++) {
        if (list[i] === 0) {
            zeroIndex.push(i);
        }
    }
}
const moveZeros = (list) => {
    getZeroIndex(list);
    let length = zeroIndex.length;
    let newList = [];
    let listLen = list.length;
    for (let i = 0; i < listLen; i++) {
        if (list[i] === 0) { }
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
