
//Código del Cuadrado

//Datos Iniciales del Cuadrado
console.group("Cuadrados")
const ladoCuadrado=5;
console.log("Los lados del cuadrodo miden: "+ladoCuadrado+"cm");


//Datos del Perimetro del Cuadrado
console.group("Perimetro Del Cuadrado")
const perimetroCuadrado= ladoCuadrado*4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");
console.groupEnd();

//Datos del área del Cuadrado
console.group("Área del Cuadrado")
const areaCuadrado= ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: "+areaCuadrado+"cm^2");
console.groupEnd();
console.groupEnd();


//Código del Triángulo

//Datos iniciales del Triángulo
console.group("Triangulos")
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo=5.5
console.log("Los lados del triángulo miden: "
+ladoTriangulo1
+"cm, "
+ladoTriangulo2
+"cm, "
+baseTriangulo
+"cm"
);

//Altura del Triángulo
console.group("Altura del Triangulo");
console.log("La altura del triangulo es de: "+alturaTriangulo);
console.groupEnd();

//Perimetro del Triángulo
console.group("Perimetro del Triágulo");
const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es: "+perimetroTriangulo);
console.groupEnd();

//Área del Triángulo
console.group("Área Triángulo");
const areTriangulo=(baseTriangulo*alturaTriangulo)/2;
console.log("El área del Triángulo es: "+areTriangulo);
console.groupEnd();
console.groupEnd();

//Código del Círculo 

//Datos Iniciales
console.group("Círculo");

//Radio
const radioCirculo=4;
console.log("El radio del circulo es: "+radioCirculo);

//Diámetro
const diametroCirculo=radioCirculo*2;
console.log("El diámetro del circulo es: "+diametroCirculo);


//pi
const PI= Math.PI;
console.log("PI es: "+PI+ "cm");

//Circunferencia
const perimetroCirculo=diametroCirculo*PI;
console.log("El diámetro del circulo es: "+perimetroCirculo)

//Área 
const areaCirculo=(radioCirculo*radioCirculo)*PI;
console.log("El area del Circulo es: "+ areaCirculo+"cm²")




