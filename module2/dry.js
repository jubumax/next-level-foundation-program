// [2-9]
// DRY -> Do not Repeat Yourself (Maane bar bar na likhe function diye kaaj kora)

// ---------------------------------------------------- [We'll build a order processing system to understand 'dry' and how important a 'function' is]

function isValidPrice(price) {                                      // price typeof checking
    return typeof price === "number" && price > 0;
}

function isValidEmail(email) {                                      // valid email checking
    return email.includes("@") && email.includes(".");
}

function calculateDiscount(price, discountPercent) {                // discount calculate function
    if (!isValidPrice(price)) {
        return 0;
    }
    let discountAmount = (price * discountPercent) / 100;         // else block
    return price - discountAmount;
}

function calculateFinalBill(price, vatPercentage = 15) {            // final bill calculate function
    let vat = (price * vatPercentage) / 100;
    return price + vat;
}

function formatBDT(amount) {                                        // amount decoration function
    return `${amount.toFixed(2)} BDT`;
}

function capitalized(str) {                                         // string's specific letter capitalize 
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);            // 'charAt()' diye string er specific character dhore kaaj kora jay **
}


// ---------------------------------------------------- [Solving a problem]

function processOrder(user, itemPrice, discountCode) {
    console.log(`--- processing order for ${capitalized(user.name)} ---\n`);

    if (!isValidEmail(user.email)) {

        console.log("Error: Invalid user email");

        return;
    }

    let currentPrice = itemPrice;

    if (discountCode == "NLB") {
        currentPrice = calculateDiscount(itemPrice, 20);

        console.log("20% discount applied");
    }

    let totalBill = calculateFinalBill(currentPrice);

    console.log("Final amount to pay: ", formatBDT(totalBill));
    console.log("\nOrder completed successfully\n");
}


let user1 = { name: "Shafayat", email: "shafayat.ph@gmail.com" };
processOrder(user1, 2000, "NLB");

let user2 = { name: "ABC", email: "abc.ph@gmail.com" };
processOrder(user2, 2000, "NLb");                           // No discount will be applied ('b' is not capitalized)