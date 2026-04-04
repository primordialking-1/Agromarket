function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }
    function hideSidebar(){
        const sidebar = document.querySelector('sidebar')
        sidebar.style.display = 'none'
    }



// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// const cartItems = document.getElementById("cartItems");
// const cartCount = document.getElementById("cartCount");
// const totalDisplay = document.getElementById("total");

// function addToCart(id){
//     const product = products.find(p=>p.id=id);
//     const qty = document.getElementById("qty"+id).value;
//     cart.push({...product, quantity:parseInt(qty)});
//     localStorage.setItem("cart",JSON.stringify(cart));
//     updateCart();
// }

// function updateCart(){
//     cartItems.innerHTML="";
//     let total=0;
//     cart.forEach((item,index)=>{
//         total+=item.price*item.quantity;
//         cartItems.innerHTML+=`
//         <div class="cart-iem">
//         ${item.name} x${item.quantity}
//         <button onclick="removeItem(${index})">x</button>
//         </div>`;
//     });
//     cartCount.innerText=cart.length;
//        totalDisplay.innerText=total;
// }

// function removeItem(index){
//     cart.splice(index,1);
//     localStorage.setItem("cart",JSON.stringify(cart));
//     updateCart();
// }

// function toggleCart(){
//     document.getElementById("cart").classList.toggle("active");
// }

// function checkout(){
//     cart=[];
//     localStorage.removeItem("cart");
//     updateCart();
//     document.getElementById("modal").style.display="flex";
// }

// function closeModal(){
//     document.getElementById("modal").style.display="none";
// }

// displayProducts(products);
// updateCart();

// CART ARRAY
let cart = [];

// SELECT ELEMENTS
const cartContainer = document.getElementById("cart");
const cartItemsDiv = document.querySelector(".cartItems");
const totalSpan = document.getElementById("total");
const cartCount = document.getElementById("cartCount");
const modal = document.getElementById("modal");

// // TOGGLE CART
// function toggleCart() {
//     cartContainer.classList.toggle("active");
// }

// ADD TO CART
function addToCart(button) {

    const productCard = button.closest(".product1");
    const name = productCard.querySelector("h3").innerText;
    const priceText = productCard.querySelector(".price").innerText;
    const qtyInput = productCard.querySelector("input");
    const quantity = parseInt(qtyInput.value);

    const price = parseInt(priceText.replace(/[^\d]/g, ""));

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name,
            price,
            quantity
        });
    }

    updateCart();
}

// UPDATE CART
function updateCart() {

    cartItemsDiv.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;
        count += item.quantity;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <p>${item.name} (x${item.quantity})</p>
            <p>₦${item.price * item.quantity}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItemsDiv.appendChild(div);
    });

    totalSpan.innerText = total.toLocaleString();
    cartCount.innerText = count;
}

// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// CHECKOUT
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    cart = [];
    updateCart();
    modal.style.display = "flex";
}

// CLOSE MODAL
function closeModal() {
    modal.style.display = "none";
}

// SEARCH FUNCTION
const searchInput = document.getElementById("search-butt");

searchInput.addEventListener("keyup", function () {

    const filter = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product1");

    products.forEach(product => {
        const name = product.querySelector("h3").innerText.toLowerCase();

        if (name.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// FIX BUTTON CLICK (IMPORTANT)
document.querySelectorAll(".add").forEach(button => {
    button.addEventListener("click", function () {
        addToCart(this);
    });
});

// toggle class
// SELECT ELEMENTS
const cartSidebar = document.getElementById("cart");
const overlay = document.getElementById("cartOverlay");
const cartIcon = document.getElementById("Cart");
const closeCartBtn = document.getElementById("closeCart");

// OPEN CART
cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

// CLOSE CART
function closeCart() {
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeCartBtn.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);


// bottom nav
const items = document.querySelectorAll(".nav-item");
const indicator = document.querySelector(".indicator");

items.forEach((item, index) => {
  item.addEventListener("click", () => {

    // Remove active
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // Move indicator
    const itemRect = item.getBoundingClientRect();
    const navRect = item.parentElement.getBoundingClientRect();

    indicator.style.width = item.offsetWidth + "px";
    indicator.style.left = (item.offsetLeft) + "px";

  });

//   //get current page
//     const currentPage = window.location.pathname.split("/").pop();

//     //loop through the nan link
//     document.querySelectorAll(".nav-item").forEach
//     (link => {
//         const linkPage = link.getAttribute("href");

//         if (linkPage === currentPage){
//             link.classList.add("active");
//         }
//     });
});
