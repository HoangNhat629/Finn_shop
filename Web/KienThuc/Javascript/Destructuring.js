//Destructuring an array
const array = [1, 2, 3, 6, 7];
//các phần tử a,b,c,... sẽ được gán gtri tương ứng trong mảng array
const [a, b, c, d, e] = array;
const [m, f] = array;
const [x, , , y] = array;

//Destructuring an object
const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
const { q, w, o, r, u } = object;
