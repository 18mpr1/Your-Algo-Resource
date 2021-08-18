// Quick Sort
// Matthew Rieckenberg
// August 2021

// from the Bubble Sort template
import {swap} from "./helpers";

// This is not yet quicksort!!!!!!!!!
const QuickSort = (array, position, arraySteps, colorSteps) => {
    console.log("Quick Sort");
    let colorKey = colorSteps[colorSteps.length - 1].slice();

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                array = swap(array, j, j + 1);
            }
            arraySteps.push(array.slice());
            colorKey[j] = 1;
            colorKey[j + 1] = 1;
            colorSteps.push(colorKey.slice());
            colorKey[j] = 0;
            colorKey[j + 1] = 0;
        }
        colorKey[arraySteps.length - 1 - i] = 2;
        arraySteps.push(array.slice());
        colorSteps.push(colorKey.slice());
    }
    colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
    return;
};

export default QuickSort;