
const array = [-4,2,-5,3,6];
let aux = 0;
for(let i = 2; i <= 4; i++) if(array[i] > aux) aux = array[i];

console.log(aux);