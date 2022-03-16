//requirements:
//A student management app that is able to:
//- Show current student list
// - Add new stdents
var input = require("readline-sync");
var fs = require("fs");
var students = [];

function showMenu() {
  console.log("1. Show all students");
  console.log("2. Create a new student");
  console.log("3. Save & exit");

  var options = input.question("> ");
  switch (options) {
    case "1":
      showStudents();
      showMenu();
      break;
    case "2":
      showCreateStudent();
      showMenu();
      break;
    case "3":
      SaveAndExit();
      break;
    default:
      console.log("Wrong option");
      break;
  }
}

function loadData() {
  var fileContent = fs.readFileSync("./data.json");
  //convert JSON data to a string
  students = JSON.parse(fileContent);
}

function showStudents() {
  for (var student of students) {
    console.log(student.name, student.age);
  }
}

function showCreateStudent() {
  var name = input.question("Name: ");
  var age = input.question("Age: ");
  var student = {
    name: name,
    age: parseInt(age),
  };
  students.push(student);
}

function SaveAndExit() {
  //convert a string to a JSON data
  var content = JSON.stringify(students);
  fs.writeFileSync("./data.json", content, { encoding: "utf8" });
}

function main() {
  loadData();
  // console.log(students[0]);
  showMenu();
}
main();
