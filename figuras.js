
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





