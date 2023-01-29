let arr = [45, 23, 21];
let a2 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(a);
