class Vehicle {
  constructor( wheels, topSpeed ) {
    this.wheels = wheels;
    this.topSpeed = topSpeed;
  }
}
// const tricycle = new Vehicle( 3, 20 );
class Camion extends Vehicle {
  constructor( wheels, topSpeed, chargeCapacity ) {
    super(wheels, topSpeed);
    this.chargeCapacity = chargeCapacity;
  }
}
