
 // TASK - Q

 function hasProperty(object: object, property: string): boolean {
    return property in object;
}

console.log(hasProperty({name: "BMW", model: "M3"}, "model"));
console.log(hasProperty({name: "BMW", model: "M3"}, "year")); 







