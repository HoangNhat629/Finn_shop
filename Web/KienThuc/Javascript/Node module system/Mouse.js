function Mouse(color) {
  this.color = color;
  this.died = false;
}
Mouse.prototype.satus = function () {
  this.died = true;
};
module.exports = Mouse;
