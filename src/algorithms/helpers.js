// Helper functions that can be used by multiple functions

export function swap(array, i, j) {
    let c = array[i];
    array[i] = array[j];
    array[j] = c;
    return array;
}
