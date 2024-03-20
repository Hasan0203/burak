
 // TASK - O
 function calculateSumOfNumbers(arr: any[]): number {
    let sum: number = 0;

    for (const item of arr) {
        if (typeof item === 'number') {
            sum += item;
        }
    }

    return sum;
}

console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));





