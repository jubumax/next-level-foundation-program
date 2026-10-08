// [3-7]

// ---------------------------------------------------- [Using 'reduce()']

let products = [
    { title: "Mouse", price: 500, inStock: true },
    { title: "Keyboard", price: 1200, inStock: false },
    { title: "Monitor", price: 8000, inStock: true },
    { title: "Headphone", price: 1500, inStock: true },
];

let totalPrice = products.reduce((acc, current) => {
    return (acc += current.price);
}, 0);

console.log(totalPrice);

// ---------------------------------------------------- [Using 'sort()']

// let sorted = [10, 30, 600, 35, 900, 20].sort((a, b) => a - b);           // ascending
// let sorted = [10, 30, 600, 35, 900, 20].sort((a, b) => b - a);           // descending

let sorted = products.sort((a, b) => b.price - a.price);                    // price onujayi sajano holo. Jehetu b-a, tai eta descending order hobe
console.log(sorted);

// ---------------------------------------------------- [Chaining]

// let estPrice = products.filter((p) => p.inStock == true).reduce((acc, cur)=>{return acc += curr},0);

let estPrice = products
    .filter((p) => p.inStock == true)
    .reduce((acc, cur) => {
        return (acc += cur.price);
    }, 0);

console.log(estPrice);