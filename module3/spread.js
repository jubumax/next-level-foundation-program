// [3-3]

// ---------------------------------------------------- [Spread Operator - three Dot]

// let newArr = [...oldArr]
// let newObj = {...oldObj}

let cart = ["fruits", "rice"];
cart.push("egg");

let cart2 = [...cart, "egg"];

console.log(cart, cart2);

console.log("\n");

const personalInfo = {
    name: "Samad",
    age: 22,
};

const contactInfo = {
    email: "samad@samad.com",
    phone: "01755500000",
};

const fullProfile = {
    ...personalInfo,
    ...contactInfo,
    zip: "6000",
};

console.log(fullProfile);