var char = "john";
const integer = 42;
const float = 3.14;
let boolean = true;

// sooo there is like 3 type of way to declare variables js ma
// var, const, let
//var le paxi ni change garna milxa
//const le paxi ni change garna mildaina
//let le paxi ni change garna milxa

console.log(char);
console.log(integer);
console.log(float);
console.log(boolean);

// console.log(char + " is dumb");
// console.log(char + " is smart");

// console.log(`${char} is clever and ${integer} years old`);

// console.log(3 + 4);
// console.log(integer + float);
// test = integer + float;
// console.log(test);
// console.log(typeof boolean);

char = "doe";

let array = [262, 2, 3, 4, 5, 75, 527, 2151, 626, 2151, 3262, 1351, 1251, 326];
console.log(array);
console.log(array[10]);

array[10] = 3263;
console.log(array[10]);

let array2 = [];
array2[10] = 3263;
console.log(array2);

let listOfCars = ["BMW", "Audi", "yest", "Honda"];

for (let i = 0; i < listOfCars.length; i++) {
  if (listOfCars[i] == "Toyota") {
    console.log("found toyota in index " + i);
    break;
  }
  console.log("not found toyota yet");
}

//class car {
// private: int speed;
//         char color[20];

//public: void inputData(int s, char c[]) {
//          speed = s;
//          strcpy(color, c);
//        }

//void main(){
//car myCar;
//myCar.inputData(100, "red");}

const john = {
  name: "john",
  age: 30,
  isStudent: false,
  function: function () {
    return "hello";
  },
};

const test = () => {
  return "hello";
};

console.log(john);

function sayHello() {
  let name = "john";
  console.log("Hello, " + name);
}

sayHello();
