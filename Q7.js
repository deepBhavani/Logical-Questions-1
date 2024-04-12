function calculateTotalSalary(basicSalary, allowances) {
    return basicSalary + allowances;
}

let basicSalary = 2000;
let allowances = 500;
let totalSalary = calculateTotalSalary(basicSalary, allowances);
console.log("Total salary:", totalSalary);
