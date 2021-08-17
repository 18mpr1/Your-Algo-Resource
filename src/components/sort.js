let arraySize = 40;
let min = 1;
let max = 250;

let array = {arraySize};
let sortedArray = {arraySize};

GenerateArray();

function GenerateArray(){
    for (let i = 0; i<arraySize;i++){
        array[i]=generateArrayValue(min,max);
        if (array[i]===array[i-1]){
            array[i]=generateArrayValue(min,max);
        }
    }
}

function generateArrayValue(){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(array);

