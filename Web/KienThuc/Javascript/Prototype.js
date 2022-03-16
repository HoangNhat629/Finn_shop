//prototype
//create a object
var mouse = {
  weight: 0.2,
  getWeight: function () {
    return this.weight;
  },
};
//constructor function
function Mouse(color, weight) {
  this.type = "mouse";
  this.weight = weight;
  this.color = color;
  // this.sleep = function () {
  //   console.log('Zzzz.....');
  // };
}
//prototype chia sẻ giữa các object đc tạo ra
Mouse.prototype.sleep = function () {
  console.log("Zzzz...");
};
var jerry = new Mouse("yellow", 20);
jerry.sleep();
var bin = new Mouse("black", 50);
bin.sleep();
console.log(jerry);
console.log(jerry.sleep === bin.sleep);
