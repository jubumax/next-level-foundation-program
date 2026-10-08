// [2-3]

// object

let user = {
    name: "Shafayat",
    age: 25,
    address: "Dhaka",
};

console.log(user.name);
console.log(user["name"]);          //user[`${}`]

console.log("\n");

delete user.address;                // delete a key
user.address = "Rajshahi";          // add a key

user.address = {                    // modify a key
    city: "Rajshahi",
    area: "Upashahar",
};

console.log(user);

console.log("\n");

console.log(Object.entries(user));
console.log(Object.keys(user));