const products = [
    {name:'Nairobi Leather Office Heels', price:4200, image:'https://images.unsplash.com/photo-1528701800489-2b603f70f4f1?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Maasai Beaded Sandals', price:2600, image:'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Safari Wedge Pumps', price:4700, image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Casual City Sneakers', price:3100, image:'https://images.unsplash.com/photo-1519741498492-5d6156d4bfd8?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Nairobi Market Tote Bag', price:3500, image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Luxury Leather Handbag', price:5600, image:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Kitenge Print Clutch', price:2800, image:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Safari Crossbody Bag', price:4300, image:'https://images.unsplash.com/photo-1522095299736-3a9d10a6fb93?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Velvet Party Heels', price:5200, image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Classic Office Block Heels', price:4500, image:'https://images.unsplash.com/photo-1542126129-7c7ff03c470b?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Weekend Espadrilles', price:2400, image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Streetwear Runner Sneakers', price:3300, image:'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Platform Summer Sandals', price:2900, image:'https://images.unsplash.com/photo-1535466582489-d8b4b1cc36c1?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Glitter Bridal Pumps', price:5500, image:'https://images.unsplash.com/photo-1513205867712-8145170ea513?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Metallic Evening Heels', price:5100, image:'https://images.unsplash.com/photo-1475180098320-0f99d7e0db0e?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Comfort Slide Sandals', price:2200, image:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Kitten Heels for Work', price:3900, image:'https://images.unsplash.com/photo-1528701800489-2b603f70f4f1?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Bamboo Strap Sandals', price:2600, image:'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Classic White Trainers', price:3200, image:'https://images.unsplash.com/photo-1519741498492-5d6156d4bfd8?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Statement Ankle Boots', price:5900, image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80', category:'Shoes'},
    {name:'Beaded Evening Clutch', price:3000, image:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Recycled Leather Sling Bag', price:4200, image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Kenyan Wax Print Tote', price:3600, image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Minimalist Crossbody Purse', price:3400, image:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Embroidered Handbag', price:4600, image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Quilted Shoulder Bag', price:5200, image:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80', category:'Handbags'},
    {name:'Convertible Backpack Purse', price:4800, image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80', category:'Handbags'}
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