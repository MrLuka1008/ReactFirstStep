// Task 1

let numArr = [2, 3, -5, -22, 12];
let onlyPositive = numArr.filter((number) => number > 0);
let sumPositiveNumber = onlyPositive.reduce((acc, cur) => acc + cur, 0);

console.log(sumPositiveNumber);

//EndTask 1

//Task 2

let letterArr = ["a", "b", "g", "a", "b", "g", "h", "b", "c", "t"];

let arry = letterArr.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else acc[cur] = 1;

  return acc;
}, {});

console.log(arry);

//EndTask 2

// Task 3

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "The car is not moving";
  }

  checkMotion = () => {
    return this.speed > 0 ? (this.motion = "The car is moving") : (this.motion = "The car is not moving");
  };

  accelerate = (newSpeed) => {
    this.speed = this.speed + newSpeed;
    mycar.checkMotion();
  };
  brake = (slowSpeed) => {
    this.speed < slowSpeed ? (this.speed = 0) : (this.speed = this.speed - slowSpeed);
    mycar.checkMotion();
  };
  emergencyBrake = () => {
    this.speed = 0;
    mycar.checkMotion();
  };
  status = () => {
    return `this car ${this.brand} ${this.model}, speed is ${this.speed}km/h, Car status ${this.motion}`;
  };
}

let mycar = new Car("Dodge", "hellcat");
mycar.accelerate(140);
// mycar.brake(10);
// mycar.emergencyBrake();
console.log(mycar.status());

//EndTask 3

//Task 4

function addAsync(firstNum, secondNum) {
  const addAsyncPromise = new Promise((resolve, reject) => {
    if (!isNaN(firstNum) && !isNaN(secondNum) && firstNum != undefined && secondNum != undefined) {
      resolve();
    } else {
      reject("error");
    }
  });
  addAsyncPromise
    .then(() => {
      console.log("good");
    })
    .catch(() => {
      console.log("error");
    });
}

addAsync(3, 5);
addAsync(3, 5);
addAsync(55);
addAsync(3, "hmm");

//EndTask 4
