/* -----------------------------------------
Assignment 2: HTML DOM and AJAX
Complete the functions below to make an AJAX call to a URL by Fetch API, and show the
response data in the page. You may render UI with any style. 
----------------------------------------- */

// Function for getting response from API
function ajax(url) {
    return fetch(url).then( res => res.json() ) // Parse response to JSON
}
// Function for rendering the response into index.html
function render(data) {
    const productSection = document.querySelector(".list");

    data.forEach( product => {
        let name = product.name;
        let price = product.price;
        let description = product.description;

        const productElement = document.createElement("div");
        productElement.innerHTML = `
            <p>${name}</p>
            <p>${price}</p>
            <p>${description}</p>
        `;

        productSection.append(productElement);
    });
}
const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";
ajax(url).then((data) => {
    render(data);
});
// you should get product information in JSON format and render data in the page