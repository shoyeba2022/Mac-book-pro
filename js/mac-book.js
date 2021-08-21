// memory cost function 
function costCalc(cost, ExtraCost) {
    const CostText = document.getElementById(cost);
    const CostExtra = ExtraCost;
    CostText.innerText = CostExtra;
    return CostExtra;
}

function updatePrice() {
    const prevPrice = document.getElementById('price');

    console.log(prevPrice);
    const newMemoryCost = parseFloat(document.getElementById('memory').innerText);
    console.log(newMemoryCost);
    const newStorageCost = parseFloat(document.getElementById('storage').innerText);
    console.log(newStorageCost);
    const newDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);
    console.log(newStorageCost);
    prevPrice.innerText = newMemoryCost + newStorageCost + newDeliveryCost + 1299;
    const prevPriceText = parseFloat(prevPrice.innerText);
    return prevPriceText;

}
// 8GB Memory 
document.getElementById('eightGB').addEventListener('click', function () {

    costCalc('memory', 0);
    updatePrice();
    const totalPrice = document.getElementById('total');
    totalPrice.innerText = updatePrice();

})


// 16 GB memory 
document.getElementById('sixteenGB').addEventListener('click', function () {

    costCalc('memory', 180);
    updatePrice();
    const totalPrice = document.getElementById('total');
    totalPrice.innerText = updatePrice();

})


// 256GB SSD 
document.getElementById('ssd1').addEventListener('click', function () {

    costCalc('storage', 0);
    updatePrice();
    const totalPrice = document.getElementById('total');
    totalPrice.innerText = updatePrice();
})
// 512GB SSD 
document.getElementById('ssd2').addEventListener('click', function () {

    costCalc('storage', 100);
    updatePrice();
    const totalPrice = document.getElementById('total');
    totalPrice.innerText = updatePrice();
})
// 1TB SSD 
document.getElementById('ssd3').addEventListener('click', function () {

    costCalc('storage', 180);
    updatePrice();
    const totalPrice = document.getElementById('total');
    totalPrice.innerText = updatePrice();
})
// 1TB SSD 
document.getElementById('free-delivery').addEventListener('click', function () {

    costCalc('delivery-charge', 0);
    updatePrice();


})
// 1TB SSD 
document.getElementById('charged-delivery').addEventListener('click', function () {

    costCalc('delivery-charge', 20);
    updatePrice();
    const totalPrice = document.getElementById('total');
    totalPrice.innerText = updatePrice();
})


document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input')
    const promoInputValue = promoInput.value;
    const totalPrice = document.getElementById('total');
    if (promoInputValue == 'stevekaku') {
        totalPrice.innerText = updatePrice() * 0.8;

    }
    else {
        totalPrice.innerText = updatePrice();
    }
    promoInput.value = '';
})



