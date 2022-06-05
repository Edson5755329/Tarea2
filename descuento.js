function calcularPrecioConDescuento(precio,descuento){
    const porcentPriceWithDiscoiunt = 100-descuento;
    const precioConDescuento= (precio*porcentPriceWithDiscoiunt)/100;

    return precioConDescuento;
}
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputD");
    const discountValue = inputDiscount.value;

    const priceWithDiscount =calcularPrecioConDescuento(priceValue,discountValue);

    const resultp = document.getElementById("Resultp");
    resultp.innerText = `El precio con descuento seria: ${priceWithDiscount}`;
}