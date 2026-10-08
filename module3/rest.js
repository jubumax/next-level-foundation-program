// [3-4]

// ---------------------------------------------------- [Rest operator]

// function

function add(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(add(1, 2, 3, 4, 5, 6, 100), "\n");

// object

const obj = {
    name: "Tanmoy",
    age: 27,
    address: "Dhaka",
    occupation: "Developer",
};

const { name, ...remaining } = obj;

console.log(remaining, "\n");

// array

const arr = [1, 2, 3, 100, 200];

const [, , , ...rest] = arr;

console.log(rest);


function something(one, ...remaining) {
    console.log(one, remaining);
}

console.log(something("first", "abc", 1, 2, 3, 4, 5, 6, 7));