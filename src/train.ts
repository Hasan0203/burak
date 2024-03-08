
// J-TASK
function longWord(sent: string): string {
   
    const words = sent.split(" ");
    let longestWord = "";

    for (const word of words) {
      
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(longWord("I come from Uzbekistan"));



/**
 Traditional FD (Frontend Development) => BSSR (Admin)=> EJS framework orqali 
 Modern FD (Frontend Development) => SPA (Users' app) => REACT library
 */
