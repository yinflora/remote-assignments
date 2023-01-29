/* -----------------------------------------
Assignment 2: HTML DOM and AJAX
Complete the functions below to make an AJAX call to a URL by Fetch API, and show the
response data in the page. You may render UI with any style. 
----------------------------------------- */

function ajax(url) {
    fetch("https://appworks-school.github.io/Remote-Assignment-Data/products")
        .then( res => res.json() ) // Parse response to JSON
        .then( result => console.log(result) )
}
function render(data) {
    
}
const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";
ajax(url).then((data) => {
render(data);
});
// you should get product information in JSON format and render data in the page