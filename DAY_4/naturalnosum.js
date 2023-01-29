function checkAngleOfTrian(angle1, angle2, angle3) {
  if (angle1 + angle2 == 180) {
    return "Triangle is valid.";
  } else if (angle1 + angle3 == 180) {
    return "Triangle is valid.";
  } else if (anglr2 + angle3 == 180) {
    return "triangle is valid ";
  } else {
    return "not valid";
  }
}
let answer = checkAngleOfTrian(120, 60, 0);
console.log("angle of a triangles are :- ", answer);
