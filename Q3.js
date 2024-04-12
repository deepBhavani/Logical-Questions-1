function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

let triBase = 8;
let triHeight = 6;
let triArea = calculateTriangleArea(triBase, triHeight);
console.log("Area of the triangle:", triArea);
