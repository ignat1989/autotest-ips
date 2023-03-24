class Car {
  protected state: boolean;

  constructor() {
    this.state = false;
  }

  public turnOn() {
    this.state = true;
  }

  public turnOff() {
    this.state = false;
  }

  public getState() {
    console.log(this.state ? "Машина включена" : "Машина выключена");
  }
}

const car: Car = new Car();
car.getState();
car.turnOn();
car.getState();
