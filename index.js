// task 2
let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

// task 3
let name = "gabriella";
let age = 19;

console.log(typeof(name))
console.log(typeof(age))

console.log(`Hello! My name is ${name} and I am ${age} years old`);
console.log(`I was born in ${2025 - age+1}`)

// task 4.1
console.log('1' == 1);
console.log(1 == true);
console.log("false" == false);
console.log("false" == true);

if("false")
    console.log("Hello false!")

// task 4.2
console.log('1' === 1);
console.log(1 === true);
console.log("true" === true);

// task 4.3
for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){
    console.log('fizzbuzz');
  }else if(i%3 === 0){ 
    console.log('fizz');
  }else if(i%5 === 0){ 
    console.log('buzz');
  }else{
    console.log(i);
  }
}

// task 5
function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);
 }
 
 add(5, 10, happyPrint);
 add(11, 12, sadPrint);

// task 5.1
let arr = [-5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5));

arr.push(11);

console.log(arr)

let lastItem = arr.pop();

console.log(lastItem, arr);

arr.unshift(22);

console.log(arr);

let firstItem = arr.shift();
console.log(firstItem, arr);

let reversed = arr.reverse(); 
console.log(reversed);
console.log(arr.join('-'));

// task 5.2
let arr1 = [12, 33, 4, 5, -4, 8, 19, 25];
                
function double(num){
  return num * 2;
}

let doubledArr = arr.map(double); 
console.log(doubledArr);

function isOdd(num){
  return element%2 !== 0; 
}

let odds = arr.filter(isOdd);
console.log(odds);

function has5Factor(){
  return ele % 5 === 0;
}

let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

let ascending = arr.sort(intCompare)
console.log(ascending);

// task 6
function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;
}

let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));