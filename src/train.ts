
 // TASK - M

 function getSquareNumbers(numbers: number[]): { number: number; square: number }[] {
   return numbers.map(number => ({ number, square: number * number }));
}


const result = getSquareNumbers([1, 2, 3]);
console.log(result);