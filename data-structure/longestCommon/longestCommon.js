/*write a function that takes two strings, si and s2
and returns the longest common subsequence of s1 and s2

examples:
"ABAZDC", "BACBAD" => "ABAD"
"AGGTAB", "GXTXAYB" => "GTAB"
"aaaa", "aa" => "aa"
*/

const longestCommon = (s1,s2) => {

    let aux = "";
    for(let i = 0; i < s1.length-1; i++){
        for(let j = i; j < s2.length-1; j++){
            if(s1[i] === s2[j+1]){
                aux += s2[j+1];
            }
        }
    }
    return aux;
};

let result;

result = longestCommon("ABAZDC", "BACBAD");
console.log(result);
result = longestCommon("AGGTAB", "GXTXAYB");
console.log(result);
result = longestCommon("aaaa", "aa");
console.log(result)