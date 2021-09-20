const array1 = [4,5,6,1,2,3];

const binary = (arr, key) => {

    let middle = Math.round(arr.length / 2);
    
      if(arr[middle] === key) return key;
    
      for(let i = middle; i <= arr.length-1; i++){
        if(arr[i] === key) return i 
      }
    
      for(let i = 0; i <= middle; i++){
        if(arr[i] === key) return i
      }

      return -1;
}

const result = binary(array1, 1)
console.log(result)