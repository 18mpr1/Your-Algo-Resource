// Quick Sort
// Matthew Rieckenberg
// August 2021

// from the Bubble Sort template
import {swap} from "./helpers";

// Helper function for QuickSort(...);
function partition(items, left, right) {
    let pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}


function QuickSort(items, left, right) {
    console.log("Quick Sort");
    // Model this function on BubbleSort(...);
}

export default QuickSort;