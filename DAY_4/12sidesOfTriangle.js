// Write a javascript program using function to input all sides of a triangle and check whether triangle is valid or not.
function sidesOfTriangle(a, b, c) {
  if (a + b < c) {
    return "valid triangle";
  } else if (a + c < b) {
    return "valid triangle";
  } else if (b + c < a) {
    return "valid triangle";
  } else {
    return "not a vaild triangle";
  }
}
let a = 0;
let b = 0;
let c = 0;
let answer = sidesOfTriangle(a, b, c);
console.log("input all sides of a triangle = ", answer);
