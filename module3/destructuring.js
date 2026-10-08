// [3-2]

// ---------------------------------------------------- [Destructuring]

const student = {
    name: "Rahim",
    age: 20,
    address: "Dhaka",
};

// old
const oldName = student.name;

// new
const { age, address, name } = student;

console.log(name);

// ---------------------------------------------------- [Destructuring an object]

const student1 = {
    name: "fahim",
    age: 20,
    address: {
        city: "Dhaka",
        zip: 1212,
    },
};

const {                                         // nested & name alias
    name: stdName,
    address: { city, zip },
} = student1;

console.log(stdName, city);

console.log("\n");

// ---------------------------------------------------- [Destructuring an array]

const arr = ["Red", "Green", "Black"];          // Syntax: const [first, second, third] = arr;

const [, , third] = arr;

console.log(third);

const student2 = {
    name: "fahim",
    age: 20,
    address: {
        city: "Dhaka",
        zip: 1212,
    },
    hobbies: ["Gardening", "Painting"],
};

const {
    name: std2Name,
    address: { city: stdCity },
    hobbies: [firstHobby],
} = student2;

console.log("\n");

console.log(firstHobby, stdCity);

const arr2 = ["test1", ["test100", "test300"]];

const [, [, test]] = arr2;

console.log(test);