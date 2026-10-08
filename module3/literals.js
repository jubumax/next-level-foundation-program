// [3-1]

// feel the real power of template literals

// ---------------------------------------------------- [Math expression]

let price = 500;
let quantity = 3;

console.log(
    `Total price: ${price * quantity} taka\npay the price to get it as your own`,
);

console.log("\n");

// ---------------------------------------------------- [function call]

function getDiscount(price) {
    return price * 0.1;
}

console.log(
    `You saved: ${getDiscount(price)} taka\nYour total bill is now ${price * quantity - getDiscount(price)} taka`,
);

// ---------------------------------------------------- [By using ternary]

let stock = 1;

console.log(`Status: ${stock > 0 ? "In Stock" + " " + stock : "Out of stock"}`);