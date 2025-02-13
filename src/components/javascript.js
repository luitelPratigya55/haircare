"use client";
console.log("Hello!!");
//es6
//arrow function
//object within object is possible
//s2["key"] to access string keys
const addNumbers = (a, b) => {
  return a + b;
};
const subNumbers = (a, b) => {
  return a - b;
};
const isEven = (n) => {
  return n % 2 == 0;
};
const sum = addNumbers(4, 5);
console.log(sum);
const diff = subNumbers(5, 2);
console.log(diff);
const result = isEven(5);
console.log(result);
//map returns a modified version of the array
//filter
//find

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArray = a.filter((element) => {
  return element % 2 === 0;
});
console.log(evenArray);

const s1 = {
  name: "Pratigya",
  age: 20,
};
const s2 = {
  name: "Kriti",
  age: 19,
};
const s3 = {
  name: "Aakash",
  age: 30,
};

const objArray = [s1, s2, s3];

const nameValue = objArray.find((object) => {
  return object.name == "Pratigya";
});

console.log(nameValue);

const nameStartingWithA = objArray.filter((element) => {
  return element.name[0] == "A";
});
console.log(nameStartingWithA);
//destructuring
//same key and variable name should be same.
//const {a,b,c}=object prev in order to assign the values of the previous obj to variables
//const [a,b,c]=students here students is an array

const ktmWeather={
    humidity:0.7,
    wind:"5kmph",
    uvRays:5.5
}
const {humidity,wind,uvRays}=ktmWeather;
console.log(humidity,wind,uvRays)
function Javascript() {}
export default Javascript;
