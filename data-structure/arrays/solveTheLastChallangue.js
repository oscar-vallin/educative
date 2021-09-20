
const solveTheLastChallengue = (array, size) => {
    let result = [];

    if(array.length === 0) return 0;

    if(size > array.length) return 0;

    let window = [];

    for(let i = 0; i < size; i++){
        while(window.length > 0 && array[i] >= array[window[window.length-1]]){
            window.pop();
        };
        window.push(i);
    }

    result.push(array[window[0]]);
    
    for(let i = size; i < array.length; i++){
        while(window.length > 0 && array[i] >= array[window[window.length-1]]){
            window.pop();
        };

        if(window.length > 0 && (window[0] <= i - size)){
            window.shift()
        }

        window.push(i);
        result.push(array[window[0]])
    }
    return result;
}



let array = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];  

const response = solveTheLastChallengue(array, 3);
console.log(response)

