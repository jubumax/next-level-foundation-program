// [2-4]

// nested data

let user = {
    name: "Shafayat",
    age: 25,
    address: {
        city: "Rajshahi",
        area: "Upashahar",
        zipcode: 6000,
    },
};

console.log(user["address"]["zipcode"]);
console.log(user.address.zipcode);

let entry = Object.entries(user);

console.log(entry);
console.log(entry[0][1]);

let students = [
    {
        name: "Rahim",
        id: 101,
    },
    {
        name: "Fahim",
        id: 102,
    },
    {
        name: "Sahim",
        id: 103,
        address: {
            area: "Badda",
            thana: "Vatara",
            lane: "Embassy lane",
            option: ["victor", "dhaka caka"],
        },
    },
];
students[2].address.option[1] = "premium";
console.log(students[2].address.option[1]);