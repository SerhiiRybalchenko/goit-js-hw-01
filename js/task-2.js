function getShippingMessage(country, price, deliveryFee) {
let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

const shippingMessage1 = getShippingMessage("Австралія", 120, 50);
const shippingMessage2 = getShippingMessage("Німеччина", 80, 20);
const shippingMessage3 = getShippingMessage("Швеція", 100, 20);

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"