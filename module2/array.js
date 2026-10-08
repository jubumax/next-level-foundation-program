// [2-1]

// array
let name = ["Shafayat", "Mir", "Imun", "Ravi", "Mezba"];

let number = [100, 200, 250, 300, 600];

console.log(name[0], number[5]);

console.log("\n");

// [2-2]

name.push("Rakib");
name.push("Farsit");

name.pop()

name.unshift("Farsit");
name.shift();

// splice(startindex)

name.splice(2, 1, "Farsit", "Imun");            // splice(startingSerial, deleteCount, value)
console.log(name);

name.splice()