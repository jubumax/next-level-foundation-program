// [3-5]

// ---------------------------------------------------- [Using 'for...each', 'map']

// forEach()

let fruits = ["Apple", "Banana", "Mango", "jackfruit"];

let newFruits = fruits.forEach((f, idx) => {
    console.log(`${idx + 1} -> ${f}`);
    //   return `${idx + 1} -> ${f}`;             // 'forEach' can't return ***
});

console.log(newFruits);                         // Output 'undefined' dibe karon forEach value store/return kore nah. So use 'map()' !

console.log("\n");

// map()

let newFruits2 = fruits.map((f, idx) => {
    // console.log(`${idx + 1} -> ${f}`);
    return `${idx + 1} -> ${f}`;
});
console.log(newFruits2);

console.log("\n");

let newFruits3 = fruits.map((f) => f.toLowerCase());

console.log(newFruits3, "\n", fruits);

console.log("\n");

let customFruits = fruits.filter((f) => f.length > 5);

console.log(customFruits);