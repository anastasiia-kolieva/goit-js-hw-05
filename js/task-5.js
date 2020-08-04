"use strict";

class Car {
  static getSpecs(car) {
    const properties = Object.keys(car);

    for (const prop of properties) {
      console.log(prop, ":", car[prop]);
    }
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(priceValue) {
    this._price = priceValue;
  }

  turnOn() {
    this.isOn = true;
    return this.isOn;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
    return;
  }

  accelerate(value) {
    if (this.speed < this.maxSpeed && this.speed !== this.maxSpeed) {
      this.speed = this.speed + value;
      return this.speed;
    }
  }

  decelerate(value) {
    if (this.speed >= 0) {
      this.speed = this.speed - value;
      return this.speed;
    }
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance = hours * this.speed;
      return this.distance;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
