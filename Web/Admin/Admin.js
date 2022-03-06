//MenuToggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
//add hovered class in selected list items
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
//chart
const ctx = document.getElementById("myChart").getContext("2d");
const earing = document.getElementById("earning").getContext("2d");
const myChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["FaceBook", "Instagram", "Twitter", "YouTube"],
    datasets: [
      {
        label: "Traffic Source",
        data: [1200, 1900, 3000, 3900],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
const myChart1 = new Chart(earning, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Earning",
        data: [
          1200, 1900, 3251, 52555, 2220, 32250, 2500, 70205, 20512, 2282, 56871,
          3265, 15789,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
//https://www.youtube.com/watch?v=q3zc1ph5fvg&list=WL&index=64&t=230s
