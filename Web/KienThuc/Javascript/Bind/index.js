//I. bind()
var mouse = {
  name: "Mickey",
  say: function HI() {
    console.log("Hello", this.name);
  },
};
//Phương thức bind () tạo ra một hàm mới, khi được gọi, từ khóa this của nó được //đặt thành giá trị được cung cấp, với một chuỗi các đối số đã cho trước bất kỳ //đối số nào được cung cấp khi hàm mới được gọi.
var cat = {
  name: "Tom",
};
// mouse.say();
//trả về 1 hàm mà hàm đó hđ như hàm HI và biến this sẽ là mouse/cat
var hi = mouse.say.bind(mouse);
var hi1 = mouse.say.bind(cat);
hi();
hi1();

//II.call()
//call: function.call(this,param1,param2,....)
function greeting(name, age) {
  console.log(`Hello! ${name}, i'm ${age} `);
}

//tham số đầu tiên của call đại diện cho this của hàm
greeting.call(null, "Finn", "22");

function greeting2() {
  console.log(`Hello! ${this.name}, i'm ${this.age} `);
}
const cat = {
  name: "Tom",
  age: 2,
};
greeting2.call(cat);
// bind trả về 1 hàm mà hàm đấy bắt buộc phảo gọi bằng {} còn call() gọi cái hàm đấy và trả về gtri hàm đó trả về

//II. apply()
//call: function.apply(this,[param1,param2,....])
function sum() {
  var result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
function average() {
  var result = sum.apply(null, arguments);
  average = result / arguments.length;
  return average;
}
console.log(average(1, 2, 4, 2, 1, 5, 9));
