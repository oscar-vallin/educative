

const findSmallestNumberInArrays = (a,b,c) => {
    let i = 0;
    let j = 0;
    let k = 0;

    while(a.length >= i && b.length >= j && c.length >= k){

        if(a[i] === b[j] && b[j] === c[k]){
            return a[i]
        };

        if(a[i] <= b[j] && a[i] <= c[k]){
            i++;
        }else if(b[j] <= a[i] && b[j] <= c[k]){
            j++;
        }else{
            k++
        }
    };

    return -1;
}

const v1 = [1, 4, 6, 7, 8, 10, 14]; 
const v2 = [1, 4, 5, 6, 7, 8, 50]; 
const v3 = [0, 6, 7, 8, 10, 25, 30, 40];

const response = findSmallestNumberInArrays(v1,v2,v3);
console.log(response);