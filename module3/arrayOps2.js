// [3-6]

let fruits = ["Apple", "Banana", "Mango", "jackfruit"];

// ---------------------------------------------------- [Using 'find()' & 'includes()']

let customFruit = fruits.find((f) => f.length > 5);
console.log(customFruit);


let findFr = fruits.includes("Mango");              // return boolean value
console.log(findFr);

console.log("\n");

// ---------------------------------------------------- [Using 'some()' & 'every()']

let students = [
    { name: "Rahim", marks: 85 },
    { name: "Karim", marks: 45 },
    { name: "Fahim", marks: 70 },
];

let studentCheck = students.some((s) => s.marks > 80);              // MUST match atleast one value with condition (For true)

let studentCheck2 = students.every((s) => s.marks > 50);            // MUST match all value with condition (For true)

console.log(studentCheck);
console.log(studentCheck2);