// add
console.log("#add");
let number = 10;

number++;
console.log(number);

number--;
console.log(number);

// comparison
console.log("#comparison");
const a = 10;
const b = 20;

console.log(a < b);
console.log(a > b);
console.log(a === b);
console.log(a !== b);

// logical
console.log("#logical");
const a2 = 2 < 3;
const b2 = 10 > 20;

console.log(a2 && b2);
console.log(a2 || b2);
console.log(!a2);

// ternary (삼항)
console.log("#ternary");
const result = 2 < 3 ? "Hello" : "World";
console.log(result);

// // nullish
// console.log("#nullish");
// const a3 = undefined;
// const b3 = null;
// const c3 = "Hello";

// console.log(a3 ?? b3 ?? c3);

// bit
/*
    &: AND
    |: OR
    ~: NOT
    ^: XOR
    <<: LEFT SHIFT
    >>: RIGHT SHIFT
*/

// assignment
/*
    +=
    -=
    *=
    /=
    %=
    **=
    &&=
    ||=
    ??=
*/
console.log("#assignment");
let number2 = 10;

number2 += 2;
console.log(number2);

// spread
console.log("#spread");
const hello = "Hello";
const world = "World!";

console.log(...hello, ...world);

const arr = [10, 26, 30]; //0, 1번째 요소만 적용됨

function sum(a, b) {
  return a + b;
}

console.log(sum(...arr));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];

console.log(newArr);
