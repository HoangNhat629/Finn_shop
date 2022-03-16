//Array-like object & arguments
//1. Array-like object
//normal object
const names = ["a", "b", "c"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// Array-like object
//luôn có các properties 0,1,2,... và các gtri của nó cùng property length của nó
const obj = {
  0: "aa",
  1: "bb",
  2: "cc",
  length: 3,
};
for (let i = 0; i < obj.length; i++) {
  console.log(obj[i]);
}
//2. arguments
//vd:
function sum() {
  console.log(
    "hoạt đông như 1 Array like object mà luôn hiên hữu trong các hàm mặc dù không khai báo"
  );
  console.log(arguments);
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
// hàm có thể tính tổng khi truyền n tham số vào
console.log(sum(1, 2, 3, 4, 5, 1100, 3, 4, 5, 2));

//3.rest()
function log(a, ...numbers) {
  //numbers laaf 1 array chứa các phần tử còn lai đc truyền vào
  console.log(a);
  console.log(numbers);
}
log(1, 2, 3, 4);

//vd:
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 1, 4, 1, 2, 4);
//vd2:
function concat(separator, ...strings) {
  return strings.join(separator);
}
concat(".", "a", "b", "c");
//'a.b.c'

// ...spread
var a = [1, 2, 3, 4];
var b = [5, 7, ...a, 2];
console.log(b);
// rest gom các phần tử thành 1 mảng còn spread trải mảng ra thành các phần tử
