const priceInUSD = {
    "item1": 10,
    "item2": 25,
    "items3": 50,
    "items4": 100,
    "item5": 200
};
const exchangeRate = 80;
const priceInINR = Object.entries(priceInUSD).map(([item, price]) => {
    return [item, price * exchangeRate];
})
const itemsInRupees = Object.fromEntries(priceInINR);
console.log(itemsInRupees);