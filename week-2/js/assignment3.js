// Assignment 3: Function, Array, and Object
// Complete the function below to calculate the total price of all products after applying a discount.

function calculate(data) {
    let productsTotalPrice = 0;

    // data.products.forEach( (item) => {
    //     productsTotalPrice += item;
    // });

    for (let i = 0; i < data.products.length; i++) {
        productsTotalPrice += data.products[i].price;
    }

    let discountedAmount = productsTotalPrice * data.discount;
    return productsTotalPrice - discountedAmount;
}

const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100,
        },
        {
            name: "Product 2",
            price: 700,
        },
        {
            name: "Product 3",
            price: 250,
        },
    ],
});
console.log(discountedPrice); // show the total price of all products after applying a discount
