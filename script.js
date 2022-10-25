console.log('Hello!');
let phrases = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

// console.log(phrases[1]);

let words = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

function test(arr) {
  let randIndex = Math.floor(Math.random()*arr.length);
  return arr[randIndex];
}

let a = test(phrases);
console.log(a);

let b = test(words);
console.log(b);

let sum = a + b;
console.log(sum);