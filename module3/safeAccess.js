// [3-8]
// Safe Property / key Access

// ---------------------------------------------------- [Optional Chaining (?)]

let user1 = {
    name: "Rahim",
    address: {
        city: "Dhaka",
    },
};

let user2 = {
    name: "Karim",
    // no address
};

console.log(user1?.address?.city);          // Dhaka
console.log(user2?.address?.city);

// ---------------------------------------------------- [nulish collescing (??)]

console.log(user2?.address?.city ?? "Rajshahi");        // nulish collescing (??) use hoy jokhon value undefined or null ase tokhon
