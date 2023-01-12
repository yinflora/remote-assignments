// Assignment 3: Function, Array, and Object
// Complete the function below to calculate the total price of all products after applying a discount.

function calculate(data) {
    // your code here
    // const discountAmount = data.discount;
    // for (let i = 0; i <= data.products.length; i++) {
    //     let productsPrice = data.products[i].price;
    //     productsPrice = productsPrice++;
    // }
    // return discountAmount * productsPrice;
    const productsPrice = data.products[0].price + data.products[1].price + data.products[2].price;
    const discountAmount = productsPrice * data.discount;
    return productsPrice - discountAmount;
}
const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});
console.log(discountedPrice) // show the total price of all products after applying a discount