class Vehiculo{
  constructor(wheels,topSpeed){
    this.wheels = wheels;
    this.topSpeed = topSpeed;
  }
}

class Camion extends Vehiculo{
  constructor(wheels,topSpeed,chargeCapacity){
    super(wheels, topSpeed);
    this.chargeCapacity = chargeCapacity;
  }
}
