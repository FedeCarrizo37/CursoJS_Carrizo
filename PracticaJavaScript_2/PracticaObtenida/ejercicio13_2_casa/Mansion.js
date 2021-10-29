class House{
  constructor( address, floors = 1) {
    this.address = address;
    this.floors = floors;
  }
  getFloors() {
    return this.floors;
  }
}
class Mansion extends House {
  constructor( address, floors, owner ) {
    super( address, floors );
    this.owner = owner;
  }
}
