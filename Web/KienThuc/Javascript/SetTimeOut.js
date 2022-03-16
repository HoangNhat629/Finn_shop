//I. setTimeout
function done() {
  console.log("Done");
}
console.log("finish");
//chờ 1 khoảng thời gian r mới chạy hàm done
setTimeout(done, 1000);

//setTimeout sẽ trả vè 1 id, khi ta không muốn chạy hàm done nữa thì
// var timeId = setTimeout(done, 1000);
// clearTimeout(timeId);

//II. setInterval
//Cách dung như setTimeout nhưng setInterval sẽ thực hiện liên tục sau khoảng thời gian
var i = 0;
var timeId = setInterval(function () {
  i++;
  console.log(i);
  if (i == 5) {
    clearInterval(timeId);
  }
}, 1000);

// Examples
// write a function count from 1 to 10 and return a promise

// var fs = require("fs");
// function countDown(a, b) {
//   return new Promise((resolve, reject) => {
//     fs.readFile("./sync_vs_async/song1.txt", { encoding: "utf8" }, function (err, data) {
//       if (err) {
//         reject(err);
//       } else {
//         var id = setInterval(function () {
//           console.log(a);
//           a++;
//           if (a > b) {
//             resolve(data);
//             clearInterval(id);
//           }
//         }, 1000);
//       }
//     });
//   });
// }
// countDown(1, 10).then(function (val) {
//   console.log(val);
// });

//Others
// function count(a, b) {
//   return new Promise((resolve) => {
//     let count = setInterval(() => {
//       console.log(a);
//       if (a++ === b) {
//         resolve();
//         clearInterval(count);
//       }
//     }, 500);
//   });
// }

// count(1, 10).then(() => {
//   console.log("Done");
// });
