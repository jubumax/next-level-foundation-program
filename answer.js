// Next Level Foundation Program [Assignment-1]

// Question-1: Value Detective

function describeValue(val) {
    const type = typeof val;
    const truthiness = val ? "truthy" : "falsy";
    return `${type} | ${truthiness}`;
}

// Question-2: Bangladesh Weekend Machine

function getDayType(day) {
    const lowerDay = String(day).toLowerCase();

    switch (lowerDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

// Question-3: Username Gatekeeper

function validateUsername(username) {
    const str = String(username);

    if (str.length < 4) {
        return "Too Short";
    }

    if (str.includes(" ")) {
        return "No Space Allowed";
    }

    if (str.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}

// Question-4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare += (distance - 2) * 15;
    }

    fare += waitingMinutes * 2;

    if (isNight) {
        fare = fare * 1.20;
    }

    return fare;
}

// Question-5: Run Chase Commentator

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict = "";
    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
