
/**
 request join
 selfDestroy
 */

 // TASK -K

 function countVowels(str: string): number {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Kevin"));


/**
 Traditional FD (Frontend Development) => BSSR (Admin)=> EJS framework orqali 
 Modern FD (Frontend Development) => SPA (Users' app) => REACT library
 */
