function generateArray(size, min = 0, max = 1000) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function calculateAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

function measureTime(fn, arr, ...args) {
    const start = performance.now();
    const result = fn(arr, ...args);
    const end = performance.now();
    const time = end - start;
    return { result, time };
}

function main() {
    const size = 100;
    const max = 100;
    const array = generateArray(size, 0, max);

    console.log("Original Array:", array);

    const { result: quickSorted, time: quickSortTime } = measureTime(quickSort, [...array]);
    console.log("Quick Sort:", quickSorted);
    console.log(`Quick Sort Execution Time: ${quickSortTime.toFixed(4)} ms`);

    const { result: bubbleSorted, time: bubbleSortTime } = measureTime(bubbleSort, [...array]);
    console.log("Bubble Sort:", bubbleSorted);
    console.log(`Bubble Sort Execution Time: ${bubbleSortTime.toFixed(4)} ms`);

    console.log(`Max Value: ${findMax(array)}`);
    console.log(`Min Value: ${findMin(array)}`);
    console.log(`Average Value: ${calculateAverage(array).toFixed(2)}`);

    const target = array[Math.floor(Math.random() * array.length)];
    console.log(`Searching for ${target}...`);

    const linearIndex = linearSearch(array, target);
    console.log(`Linear Search found at index: ${linearIndex}`);

    const binaryIndex = binarySearch(quickSorted, target);
    console.log(`Binary Search found at index: ${binaryIndex}`);
}

main();