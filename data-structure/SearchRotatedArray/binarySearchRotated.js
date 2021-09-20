const array1 = [2,5,7,9,11,15,18,33,25,45,77,68,88];
const key1 = 6;
const key2 = 45;

const binarySearchRotated = (low, high,arr,key) => {
    if(arr.length <= 1) return 1;

    if(low > high) return -1;
    
    let middle =  Math.round(( low+high) / 2);
 
    if(arr[middle] === key) return middle;

    if(arr[middle] <= key){
        return binarySearchRotated(middle+1, high, arr, key);
    }
    if(arr[middle] >= key){
        return binarySearchRotated(low, middle-1,arr,key);
    }
};

const result = binarySearchRotated(0,array1.length,array1,key2);

console.log(result);