const toggleBTN = document.querySelector("#toggle-button");
const toggleIcon = document.querySelector("#toggle-icon");
const navBar = document.querySelector(".navbar-list");

toggleBTN.addEventListener("click", toggleClass);

function toggleClass(e){
    e.preventDefault();
    navBar.classList.toggle("active");
    toggleIcon.classList.toggle("button-active");
    if(navBar.classList.contains("active")){
        navBar.style.maxHeight = navBar.scrollHeight + "px";
    }
    else{
        navBar.removeAttribute("style");
    }
}

let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}