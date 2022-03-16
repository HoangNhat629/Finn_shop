var a = {
  name: "TOM",
  say: function () {
    var run = function () {
      //this bây giờ là của run nên khi gọi hàm say sẽ trả về undefined
      console.log("Hello ", this.name);
    };
    run();
  },
  say2: function () {
    var that = this;
    var run = function () {
      console.log(" Cách giải quyết vấn đề hàm say() ");
      console.log("Hello", that.name);
    };
    run();
  },
  say3: () => {
    var run = () => {
      console.log(
        " Cũng có thể dùng arrowfunction vì nó không có context nên biến this là biến this của hàm gần nhất(hàm nó nằm trong)(arrowfunction không có biến this) "
      );
      console.log("Hello", this.name);
    };
    run();
  },
};
a.say2();
