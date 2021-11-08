class Figura{
  constructor(nombre) {
    this.nombre = nombre;
  }

  toString() {
    return `<hr><font style='font-weight:bold;'>Figura ${this.nombre}</font>
            <br>Perimetro= ${this.calcular_perimetro()}
            <br>Superficie= ${this.calcular_area()}`;
  }
}

class Cuadrado extends Figura{
  constructor(nombre,lado){
    super(nombre);
    this.lado = lado;
  }
  calcular_perimetro(){
    return (this.lado * 4);
  }
  calcular_area(){
    return (this.lado * this.lado);
  }
  toString() {
    return super.toString() + `<br>Lados = ${this.lado}`;
  }
}

class Rectangulo extends Figura{
  constructor(nombre,lado1,lado2){
    super(nombre);
    this.lado1 = lado1;
    this.lado2 = lado2;
  }
  calcular_perimetro(){
    return ((this.lado1 * 2) + (this.lado2 * 2));
  }
  calcular_area(){
    return (this.lado1 * this.lado2);
  }
  toString() {
    return super.toString() + `<br>Lado1 = ${this.lado1} <br>Lado2 = ${this.lado2}`;
  }
}

class Circulo extends Figura{
  constructor(nombre,radio){
    super(nombre);
    this.radio = radio;
  }
  calcular_perimetro(){
    return (2 * Math.PI * this.radio);
  }
  calcular_area(){
    return (Math.PI * (Math.pow(this.radio,2)));
  }
  toString() {
    return super.toString() + `<br>Radio = ${this.radio}`;
  }
}

class Triangulo extends Figura{
  constructor(nombre,cateto1,cateto2,hipotenusa){
    super(nombre);
    this.cateto1 = cateto1;
    this.cateto2 = cateto2;
    this.hipotenusa = hipotenusa;
  }
  calcular_perimetro(){
    return (this.cateto1 + this.cateto2 + this.hipotenusa);
  }
  calcular_area(){
    return ((this.cateto1 * this.cateto2)/2);
  }
  toString() {
    return super.toString() + `<br>Cateto1 = ${this.cateto1}<br>Cateto2 = ${this.cateto2}<br>Hipotenusa = ${this.hipotenusa}`;
  }
}
