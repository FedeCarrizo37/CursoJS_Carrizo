class Figura{
  constructor(nombre) {
    this.nombre = nombre;
  }
  perimetro(perimetro) {
    return `<br>Perimetro de ${this.nombre} = ${perimetro}`;
  }
  area(area) {
    return `<br>Area de ${this.nombre} = ${area}`;
  }
  toString() {
    return `<hr><font style='font-weight:bold;'>Figura ${this.nombre}</font>`;
  }
}

class Cuadrado extends Figura{
  constructor(nombre,lado){
    super(nombre);
    this.lado = lado;
  }
  calcular_perimetro(){
    return super.perimetro(this.lado * 4);
  }
  calcular_area(){
    return super.area(this.lado * this.lado);
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
    return super.perimetro((this.lado1 * 2) + (this.lado2 * 2));
  }
  calcular_area(){
    return super.area(this.lado1 * this.lado2);
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
    return super.perimetro(2 * Math.PI * this.radio);
  }
  calcular_area(){
    return super.area(Math.PI * (Math.pow(this.radio,2)));
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
    return super.perimetro(this.cateto1 + this.cateto2 + this.hipotenusa);
  }
  calcular_area(){
    return super.area((this.cateto1 * this.cateto2)/2);
  }
  toString() {
    return super.toString() + `<br>Cateto1 = ${this.cateto1}<br>Cateto2 = ${this.cateto2}<br>Hipotenusa = ${this.hipotenusa}`;
  }
}
