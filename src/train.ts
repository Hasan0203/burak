// TASK - H

function getPositive(arr: number[]) {
    let posNum: number[] = arr.filter(num => num > 0);
    
    let natija = posNum.join('');

    return natija; 
}


console.log(getPositive([1, -4, 2]));



