function pentagonalNumber(n){
    if (isNaN(n)) {
        throw "Parameter is not a number!";
    }
    return (3 * Math.pow(n,2) - n  ) / 2;
}

// console.log(pentagonalNumber(1)); // 1
// console.log(pentagonalNumber(2)); // 5
// console.log(pentagonalNumber(5)); // 35
// console.log(pentagonalNumber(9)); // 117