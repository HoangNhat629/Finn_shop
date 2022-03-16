function Mouse(color) {
  this.color = color;
  this.died = false;
}
Mouse.prototype.satus = function () {
  this.died = true;
};
function Cat() {
  this.stomach = [];
}
Cat.prototype.eat = function (mouse) {
  this.stomach.push(mouse);
  mouse.satus();
};
var jerry = new Mouse("yellow");
var tom = new Cat();
tom.eat(jerry);
console.log(jerry);
console.log(tom);

