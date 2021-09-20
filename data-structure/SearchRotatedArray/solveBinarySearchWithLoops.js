
const solveBinarySearchWithLoop = (array, key) =>{
    
    if(array.length <= 1) return 1;
    let newArray = arraySort(array);
    
    let middle = Math.round(newArray.length-1)/2;
    let start = 0;
    let final = array.length-1;

    while(final >= start){
        if(newArray[middle] === key) return `the number ${newArray[middle]} was found`;

        if(newArray[middle] > key){
            final = middle-1;
            middle = Math.round((start+final) / 2);
        }

        if(newArray[middle] < key){
            start = middle+1;
            middle = Math.round((start+final) / 2);
        }
    }
    return `the number was not found`
};

const arraySort = (array) => {

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length-1-i; j++){
            if(array[j] > array[j+1]){
                let aux = array[j+1];
                array[j+1] = array[j];
                array[j] = aux;
            }
        }
    }

    return array;
}
const key = 9;
let v1 = [6, 7, 1, 2, 3, 4, 5];

const result = solveBinarySearchWithLoop(v1, key);
console.log(result);