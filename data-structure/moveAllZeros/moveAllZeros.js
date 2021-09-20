
function moveAllZeros(arr){
    let aux = [];
    let count = 0;
    let i = 0;

    while(aux.length !== arr.length){
       if(arr[count] === 0 && count < arr.length){
           aux.push(0);
           count++;
       }else if(count >= arr.length){
           if(arr[i] !== 0){
            aux.push(arr[i]);
           }
           i++
        if(arr.length === aux.length) A = aux
       }else{
        count++;
       }
    }
}
const v2 = [1,10,-1,11,5,0,-7,0,25,-35]
const result = moveAllZeros(v2);
console.log(result);