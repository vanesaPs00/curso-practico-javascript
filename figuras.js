
//Código del Cuadrado

//Función Perimetro del Cuadrado

function perimetroCuadrado(lado){
    return lado*4;
}

//Función área del Cuadrado
function areaCuadrado(lado) {
    return lado * lado;
}


//Código del Triángulo
//Función Perimetro del Triángulo
function perimetroTriangulo(lado1,lado2,base)
{
    return lado1+ lado2+base;
}

function areaTriangulo(base,altura)
{
    return (base*altura)/2;
}

//Código del Círculo 

//Diámetro
function diametroCirculo(radio) {
    return radio*2;
}
const PI=Math.PI;
//Circunferencia
function perimetroCirculo(radio) {
    const diametro= diametroCirculo(radio);
    return diametro * PI;
}

//Área 
function areaCirculo(radio) {
    return (radio*radio)*PI;
}

//Aquí interactuamos en el HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value=input.value;

    const perimetro= perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value=input.value;

    const perimetro= areaCuadrado(value);
    alert(perimetro);
}

//Triangulo
function calcularPerimetroTriangulo()
{
    const inputLado1=document.getElementById("inputLado1");
    const valueLado1=inputLado1.value;

    const inputLado2=document.getElementById("inputLado2");
    const valueLado2=inputLado2.value;

    const inputBase=document.getElementById("inputBase");
    const valueBase=inputBase.value;

    const inputAltura=document.getElementById("inputAltura");
    const valueAltura=inputAltura.value;    

    const perimetroT=perimetroTriangulo(valueLado1);
    alert(perimetroT);
}


