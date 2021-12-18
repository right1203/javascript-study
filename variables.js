// variable
let age = 20;
age = 30;
console.log(age);

// const
const name = 'John';
console.log(name);

// const로 먼저 선언하고, 값을 변경할 필요가 있을 때만 let으로 수정

// number
const number = 20;
console.log(typeof number);

// bigint
const bigNumber = 123123123123123123123123123123123123n
console.log(typeof bigNumber);

// string
const str1 = 'Hello';
const str2 = "Hello";
console.log(str1, str2);

// backtick ``
const message = `My name is ${name} and I'm ${age} years old.`;
console.log(message);

// boolean
const isTrue = false;
const result = 10 < 20;
console.log(typeof isTrue);
console.log(result);

// symbol
const id = Symbol();
console.log(typeof id);

const id2 = Symbol('id');
console.log(id2);

// Reference type
// array
const arrN = [1, 2, 3];
const arrS = ['Hello', 'World'];

console.log(arrN);
console.log(arrS);

// object
const user = {
    id: 'abc',
    password: 123123
}

console.log(user);
console.log(user.id);
console.log(user['password']);

// set
const set = new Set();

set.add(2);
set.add(1);
set.add(1);
console.log(set);

// map
/*
object vs map
1. object
    - 키 값으로 문자, 심벌 타입만 허용
    - 정렬에 관여하지 않음
    - 순회를 위해서 키값을 통해 배열을 얻어 배열을 순회
    - 크기를 알기 위해서는 키값 사용 등 직접 판별해야 함
2. map
    - 키 값으로 모든 데이터 타입 허용
    - 삽입된 순서대로 정렬됨
    - map.size로 크기를 바로 알 수 있음
    - 맵 자체로 순회할 수 있음
*/

const map = new Map();

map.set('Hello', 'World!');
map.set(123, 456);

console.log(map);
console.log(map.get('Hello'));