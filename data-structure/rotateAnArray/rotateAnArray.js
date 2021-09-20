
const rotateAnArray = (array,nrotate) => {
    
    if(nrotate === 0) return 0;

    const newArray = [];
    let aux;
    if(nrotate < 0){
        aux = nrotate * -1;
        for(let j = 0; j < array.length; j++){
            newArray.push(array[aux]);
            aux++;
            if(aux === array.length){
                aux = 0;
            }
        }
    }else{
        let aux2;
        aux2 = array.length;
        aux2 = aux2 - nrotate;
        for(let i = 0; i < array.length; i++){
            newArray.push(array[aux2]);
            aux2++;
            if(aux2 === array.length){
                aux2 = 0;
            }
        }
    }

    return newArray;
}

const n = -1;
const n2 = 2;
const v1 = [1,10,20,0,59,86,32,11,9,40];
const v2 = [1,2,3,4,5];

const result = rotateAnArray(v2,n2);
console.log(result);