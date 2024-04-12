function calculateTotalBill(initialAmount, taxRate) {
    return initialAmount + (initialAmount * (taxRate / 100));
}

let initialAmount = 100;
let taxRate = 10; // in percentage
let totalBillAmount = calculateTotalBill(initialAmount, taxRate);
console.log("Total bill amount:", totalBillAmount);
