
 // TASK - R

 function calculate(spl: string): number {
    const numbers = spl.split("+");
    let total = 0;

    for (const plus of numbers) {
        const num = parseInt(plus, 4)
        if (!isNaN(num)) {
            total += num;
        }
    }

    return total;
}
console.log(calculate("1+3"));








