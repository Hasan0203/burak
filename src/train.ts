
 // TASK - N

 function palindromCheck(str: string): boolean {
  const cleanedStr = str.toLowerCase().replace(/\s/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

console.log(palindromCheck("dad"));
console.log(palindromCheck("son")); 
