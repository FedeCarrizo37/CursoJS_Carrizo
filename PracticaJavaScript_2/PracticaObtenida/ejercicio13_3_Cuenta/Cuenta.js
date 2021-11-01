class Cuenta{
  constructor( numero, saldo ) {
    this.numero = numero;
    this.saldo = saldo;
  }
  acreditar(monto) {
    document.write("<br><u style='color:green;'>Acredito +$" + monto + "</u>");
    this.saldo += monto;
  }
  debitar(monto) {
    document.write("<br><u style='color:red;'>Debito -$" + monto + "</u>");
    this.saldo -= monto;
  }
  toString(){
    return "<br><font style='color:blue;'>Cuenta #" + this.numero + "<br>Saldo= $" + this.saldo + "</font>";
  }
}
class CajaAhorro extends Cuenta {
  constructor( numero, saldo, interes ) {
    super( numero, saldo );
    this.interes = interes;
  }
  debitar(monto){
    if(monto <= this.saldo){
      super.debitar(monto);
    }
    else{
      document.write("<br><u style='color:red;'> Saldo Insuficiente</u>");
    }
  }
  toString(){
    return super.toString() + "<br><font style='color:black;'>Interes= " + this.interes + "%</font><hr>";
  }
}
