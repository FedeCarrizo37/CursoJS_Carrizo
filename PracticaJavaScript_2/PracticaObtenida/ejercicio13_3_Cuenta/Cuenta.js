class Cuenta{
  constructor( numero, saldo ) {
    this.numero = numero;
    this.saldo = saldo;
  }
  acreditar(monto) {
    this.saldo += monto;
  }
  debitar(monto) {
    this.saldo -= monto;
  }
  toString(){
    return "<br>Cuenta #" + this.numero + "<br>Saldo= $" + this.saldo;
  }
}
class CajaAhorro extends Cuenta {
  constructor( numero, saldo, interes ) {
    super( numero, saldo );
    this.interes = interes;
  }
  debitar(monto){
    if(monto <= this.saldo)
      super.debitar(monto);
  }
  toString(){
    return super.toString() + "<br>Interes= " + this.interes + "%<hr>";
  }
}
