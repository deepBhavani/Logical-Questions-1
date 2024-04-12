function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

let principalAmount = 1000;
let interestRate = 5; // in percentage
let timePeriod = 2; // in years
let simpleInterest = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
console.log("Simple interest:", simpleInterest);
