//learn array methods forEach,Filter,Find,Sum//
var arr = [2, 5, 6, 3, 8, 9];
var newArr = arr.map(function (index, val) {
  return { key: index, value: val * val };
});
console.log(newArr);
