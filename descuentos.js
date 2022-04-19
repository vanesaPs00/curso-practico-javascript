
function calcularPrecioConDescuento(precio,descuento) {

    const PorcentajePrecioDescuento=100-descuento;
    const precioConDescuento=(precio*PorcentajePrecioDescuento)/100;
    
    return precioConDescuento;
}
function onClickButtonPriceDescount(params) {

    const inputPrice= document.getElementById('InputPrice');
    const priceValue= inputPrice.value;

    const inputDiscount=document.getElementById('InputDiscount');
    const discoutValue=inputDiscount.value;

    const precioConDescuento=calcularPrecioConDescuento(priceValue,discoutValue);

    const resultP=document.getElementById("ResultP");
    resultP.innerHTML="El precio con descuento son: $"+precioConDescuento;
}