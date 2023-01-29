// Write a javascript program using function to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
function percentageMarks(P) {
  if (P >= 90) {
    return "Grade A";
  } else if (P >= 80) {
    return "Grade B";
  } else if (P >= 70) {
    return "Grade C";
  } else if (P >= 60) {
    return "Grade D";
  } else if (P >= 40) {
    return "Grade E";
  } else {
    return "F";
  }
}
let marks = percentageMarks(76);
console.log("your grade is = ", marks);
