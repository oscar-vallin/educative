let array = [1,2,3,4,5,6,7,8,9,10];  
let size = 3;
const result = [];
let final = 0;
let aux;
let count = 0;
while(final !== array[array.length-1]){
    aux = 0;
    for(let i = count; i < size; i++){
        if(array[i] > aux){
            aux = array[i]
        }
    }
    final = array[size-1];
    size++;
    count++
    result.push(aux)
}

console.log(result);