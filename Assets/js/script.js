const products = [
    {name:'Fashion Rizz Heel 11178', price:3500, image:'../images/heels/11178.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11180', price:3550, image:'../images/heels/11180.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11182', price:3600, image:'../images/heels/11182.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11184', price:3650, image:'../images/heels/11184.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11186', price:3700, image:'../images/heels/11186.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11188', price:3750, image:'../images/heels/11188.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11190', price:3800, image:'../images/heels/11190.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11192', price:3850, image:'../images/heels/11192.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11194', price:3900, image:'../images/heels/11194.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11196', price:3950, image:'../images/heels/11196.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11198', price:4000, image:'../images/heels/11198.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11200', price:3500, image:'../images/heels/11200.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11202', price:3550, image:'../images/heels/11202.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11204', price:3600, image:'../images/heels/11204.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11206', price:3650, image:'../images/heels/11206.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11208', price:3700, image:'../images/heels/11208.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11210', price:3750, image:'../images/heels/11210.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11212', price:3800, image:'../images/heels/11212.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11214', price:3850, image:'../images/heels/11214.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11216', price:3900, image:'../images/heels/11216.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11218', price:3950, image:'../images/heels/11218.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11220', price:4000, image:'../images/heels/11220.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11222', price:3500, image:'../images/heels/11222.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11224', price:3550, image:'../images/heels/11224.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11226', price:3600, image:'../images/heels/11226.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11228', price:3650, image:'../images/heels/11228.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11230', price:3700, image:'../images/heels/11230.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11232', price:3750, image:'../images/heels/11232.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11234', price:3800, image:'../images/heels/11234.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11236', price:3850, image:'../images/heels/11236.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11238', price:3900, image:'../images/heels/11238.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11240', price:3950, image:'../images/heels/11240.jpg', category:'Shoes'},
    {name:'Fashion Rizz Heel 11242', price:4000, image:'../images/heels/11242.jpg', category:'Shoes'}
];

let cart = [];
const shoesList = document.getElementById('shoes-list');
const handbagsList = document.getElementById('handbags-list');
const themeSelect = document.getElementById('theme-select');

// Categorize products using category field
const shoes = products.filter(product => product.category === 'Shoes');
const handbags = products.filter(product => product.category === 'Handbags');

function applyTheme(theme){
    document.body.classList.remove('theme-light','theme-dark','theme-sea');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('siteTheme', theme);
}

function initTheme(){
    const savedTheme = localStorage.getItem('siteTheme') || 'light';
    applyTheme(savedTheme);
    if(themeSelect){
        themeSelect.value = savedTheme;
        themeSelect.addEventListener('change', (event) => applyTheme(event.target.value));
    }
}

initTheme();

// Display shoes
if(shoesList){
    shoes.forEach((product,index)=>{
        shoesList.innerHTML += `
        <div class="product-card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>KSh ${product.price}</p>
            <button onclick="addToCart(${products.indexOf(product)})">Add to Cart</button>
            </div>`;
    });
}

// Display handbags
if(handbagsList){
    handbags.forEach((product,index)=>{
        handbagsList.innerHTML += `
        <div class="product-card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>KSh ${product.price}</p>
            <button onclick="addToCart(${products.indexOf(product)})">Add to Cart</button>
            </div>`;
    });
}

function addToCart(index){
    cart.push(products[index]);
    document.getElementById('cart-count').innerText = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
}
function uploadProduct(){
    const name = document.getElementById('pname').value;
    const price = document.getElementById('pprice').value;
    const image = document.getElementById('pimage').value;
    products.push({name,price,image});
    localStorage.setItem('products', JSON.stringify(products));
    alert('Product uploaded live to homepage');
}

function placeOrder(){
    let fullname = document.getElementById('fullname').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push({fullname,phone,address,cart});
    localStorage.setItem('orders', JSON.stringify(orders));
    window.location='payment.html';
}

function payOnDelivery(){
    alert('Order confirmed. Customer will pay on delivery.');
    sendWhatsappOrder();
}

function payOnline(){
    alert('Use M-Pesa Paybill 222111, Account 175128. After payment, the statement will show account name: Fashion Rizz.');
    sendWhatsappOrder();
}
function sendWhatsappOrder(){
    window.open('https://wa.me/254700000000?text=New customer order received from website','_blank');
}