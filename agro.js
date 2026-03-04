function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }
    function hideSidebar(){
        const sidebar = document.querySelector('sidebar')
        sidebar.style.display = 'none'
    }

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalDisplay = document.getElementById("total");

function addToCart(id){
    const product = products.find(p=>p.id=id);
    const qty = document.getElementById("qty"+id).value;
    cart.push({...product, quantity:parseInt(qty)});
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCart();
}

function updateCart(){
    cartItems.innerHTML="";
    let total=0;
    cart.forEach((item,index)=>{
        total+=item.price*item.quantity;
        cartItems.innerHTML+=`
        <div class="cart-iem">
        ${item.name} x${item.quantity}
        <button onclick="removeItem(${index})">x</button>
        </div>`;
    });
    cartCount.innerText=cart.length;
       totalDisplay.innerText=total;
}

function removeItem(index){
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCart();
}

function toggleCart(){
    document.getElementById("cart").classList.toggle("active");
}

function checkout(){
    cart=[];
    localStorage.removeItem("cart");
    updateCart();
    document.getElementById("modal").style.display="flex";
}

function closeModal(){
    document.getElementById("modal").style.display="none";
}

displayProducts(products);
updateCart();


