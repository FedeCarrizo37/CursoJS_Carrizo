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
    var colorSaldo = "black";
    if(this.saldo > 0) {
      colorSaldo = "green";
    }
    else if (this.saldo < 0) {
      colorSaldo = "red";
    }
    var fraseSaldo = "<br><font style='color:" + colorSaldo + ";'>Saldo= $" + this.saldo + "</font>";
    return "<hr><font style='color:blue;'>Cuenta #" + this.numero + "</font>" + fraseSaldo;
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
class CuentaCorriente extends Cuenta {
  constructor(numero,saldo,descubierto){
    super(numero,saldo);
    this.descubierto = descubierto;
  }
  debitar(monto){
    if(monto <= (this.saldo + this.descubierto)){
      super.debitar(monto);
    }
    else{
      document.write("<br><u style='color:red;'> Saldo Insuficiente</u>");
    }
  }
  toString(){
    return super.toString() + "<br><font style='color:black;'>Descubierto= $" + this.descubierto + "</font><hr>";
  }
}
