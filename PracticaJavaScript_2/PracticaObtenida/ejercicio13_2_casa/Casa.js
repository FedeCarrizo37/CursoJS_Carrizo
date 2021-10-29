class House{
  constructor( address, floors = 1) {
    this.address = address;
    this.floors = floors;
  }
  getFloors() {
    return this.floors;
  }
}
