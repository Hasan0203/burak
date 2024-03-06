/* Project standards 
    - Logging standards
    - Naming standards 
        function, method, variables => CAMEL case       goHome
        class => PASCAL case                            MemberService
        folder, file => KEBAB case
        css => SNAKE case                               button_style
    - Error handling
*/

/* 
    Traditional API
    Rest API
    GraphQL API
    ...
*/

function getNum(repl: string): string {
    return repl.replace(/\D/g, "");   
}

console.log(getNum("ha02san03"));
