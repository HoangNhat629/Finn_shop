//I. Sync vs Async (Synchoronous vs. Asynchronous)
var fs = require("fs");
//1. Sync
console.log("Start");
var song1 = fs.readFileSync("song1.txt", { encoding: "utf8" });
console.log(song1);
var song2 = fs.readFileSync("song2.txt", { encoding: "utf8" });
console.log(song2);
console.log("End");

// Make coffee -> 5 minutes
// Wear clothes
// Making bed
//
// Sync
// |------------------|------------------|--------|------->
// Make coffe        Coffee done      Wear done  Done
//                   Wear clothes     Make bed
// làm theo thứ tự, việc trước làm xong khi nào r mới làm tiếp việc sau
// Async
// |-----------|-------------|----------|----------------->
// Make coffee Wear clothes Make bed   Done
// Không làm theo thứ tự, có thể làm nhiều việc trong cùng 1 lúc, việc nào xong trước thì in ra trước việc nào xong sau thì ỉn ra sau

//2. Async
console.log("Start");
fs.readFile("song1.txt", { encoding: "utf8" }, function (err, song1) {
  console.log(song1);
});
console.log("End");

//II. call back hell = sync
fs.readFile("song1.txt", { encoding: "utf8" }, function (err, song1) {
  console.log(song1);
  fs.readFile("song2.txt", { encoding: "utf8" }, function (err, song2) {
    console.log(song2);
  });
});

//III. PROMISE
//npm i --save promise-fs
var fs = require("promise-fs");
fs.readFile("song1.txt", { encoding: "utf8" })
  .then(function (song1) {
    console.log(song1);
  })
  .then(function () {
    return fs.readFile("song2.txt", { encoding: "utf8" });
  })
  .then(function (song2) {
    console.log(song2);
  })
  .catch(function (err) {
    console.log(err);
  });
// thục hiện công việc với hàm bất đồng bộ
var fs1 = require("fs");

function readFilePromise(path) {
  return new Promise(function (resolve, reject) {
    fs1.readFile(path, { encoding: "utf8" }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise("song2.txt")
  .then(function (song2) {
    console.log(song2);
  })
  .then(function () {
    return readFilePromise("song1.txt");
  })
  .then(function (song1) {
    console.log(song1);
  })
  .catch(function (error) {
    console.log(error);
  });
// NOTE:
// Nếu k cần in ra theo thứ tự nào thì ta có thể dùng promise.all
Promise.all([
  readFilePromise("./song1.txt"),
  readFilePromise("./song2.txt"), // resolved
])
  .then(function (values) {
    console.log(values);
  })
  .catch(function (error) {
    console.log(error);
  });

//IV. Node co
//npm install co --save
var co = require("co");
//C1
// Khai báo co r chuyển vào 1 hàm
co(function* () {
  //c1
  // var song1 = yield readFilePromise('./song1.txt');
  // var song2 = yield readFilePromise('./song2.txt');
  // var song3 = yield readFilePromise('./song3.txt');
  // return [song1, song2, song3];

  // c2
  var value = yield [
    readFilePromise("./song1.txt"),
    readFilePromise("./song2.txt"),
    readFilePromise("./song3.txt"),
  ];
  console.log(song1, song2, song3);
  return value;
})
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
//C2: Khai báo hàm trước r dùng sau
//Muốn co trả về 1 hàm thay vì 1 promise
var readFile = co.wrap(function* (file) {
  //[String] --> [Promise]
  var value = yield file.map(function (value1) {
    return readFilePromise(value1);
  });
  return value;
});
readFile(["song1.txt", "song2.txt", "song3.txt"])
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

//async await
// Dùng như co
async function run() {
  var song1 = await readFilePromise("song1.txt");
  var song2 = await readFilePromise("song2.txt");
  return [song1, song2];
}
run()
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
