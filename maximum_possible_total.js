function maxTotal(arr) {
    let maxSum = 0;
    if (arr.length !== 10) {
        throw "The length should be equal to 10";
    }
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            throw "Parameter is not a number!";
        }
    }
    for (let i = 0; i < 5; i++) {
        let maxI = findMax(arr);
        maxSum += arr[maxI];
        delete arr[maxI];
    }
    return maxSum;
}

function findMax(arr) {
    let maxV = arr[0];
    let maxI = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxV) {
            maxV = arr[i];
            maxI = i;
        }
    }
    return maxI;
}

// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); // 43
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));   // 100
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));    // 40