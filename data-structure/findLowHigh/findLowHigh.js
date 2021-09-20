

let findIndexLow = function(array, key){

    let aux;
    for(let i = 0; i < array.length; i++){
        if(array[i] === key) return i;
    }
    return -1
};
let findIndexHigh = function(array, key){
    let aux;

    for(let i = array.length-1; i >= 0; i--){
        if(array[i] === key) return i;
    }
    return -1
}
const v1 =[ 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
const numberOne = 5;
const numberTwo = 2;
const numberThree = 8;

let resultFindIndexLow = findIndexLow(v1, numberOne);
console.log(resultFindIndexLow)
resultFindIndexHigh = findIndexHigh(v1,numberOne);
console.log(resultFindIndexHigh);
resultFindIndexLow = findIndexLow(v1, numberTwo);
console.log(resultFindIndexLow)
resultFindIndexHigh = findIndexHigh(v1,numberTwo);
console.log(resultFindIndexHigh);
resultFindIndexLow = findIndexLow(v1, numberThree);
console.log(resultFindIndexLow)
resultFindIndexHigh = findIndexHigh(v1,numberThree);
console.log(resultFindIndexHigh);