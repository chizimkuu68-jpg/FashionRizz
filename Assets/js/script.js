const products = [
    {name:'Classic Black Stiletto Heels', price:3500, image:'../images/heels/11178.jpg', category:'Shoes'},
    {name:'Chic Nude Pumps', price:3550, image:'../images/heels/11180.jpg', category:'Shoes'},
    {name:'Velvet Red Evening Heels', price:3600, image:'../images/heels/11182.jpg', category:'Shoes'},
    {name:'Satin Strappy Sandals', price:3650, image:'../images/heels/11184.jpg', category:'Shoes'},
    {name:'Pearl Embellished Heels', price:3700, image:'../images/heels/11186.jpg', category:'Shoes'},
    {name:'Minimal White Kitten Heels', price:3750, image:'../images/heels/11188.jpg', category:'Shoes'},
    {name:'Gold Metallic Party Heels', price:3800, image:'../images/heels/11190.jpg', category:'Shoes'},
    {name:'Crystal Lace Bridal Heels', price:3850, image:'../images/heels/11192.jpg', category:'Shoes'},
    {name:'Suede Block Heel Pumps', price:3900, image:'../images/heels/11194.jpg', category:'Shoes'},
    {name:'Leopard Print Statement Heels', price:3950, image:'../images/heels/11196.jpg', category:'Shoes'},
    {name:'Rose Gold Mary Janes', price:4000, image:'../images/heels/11198.jpg', category:'Shoes'},
    {name:'Navy Blue Pointed Heels', price:3500, image:'../images/heels/11200.jpg', category:'Shoes'},
    {name:'Champagne Sparkle Heels', price:3550, image:'../images/heels/11202.jpg', category:'Shoes'},
    {name:'Ivory Satin Bow Heels', price:3600, image:'../images/heels/11204.jpg', category:'Shoes'},
    {name:'Black Ankle Strap Heels', price:3650, image:'../images/heels/11206.jpg', category:'Shoes'},
    {name:'Brown Leather Platform Heels', price:3700, image:'../images/heels/11208.jpg', category:'Shoes'},
    {name:'Blush Pink Slingback Heels', price:3750, image:'../images/heels/11210.jpg', category:'Shoes'},
    {name:'Silver Sequin Party Heels', price:3800, image:'../images/heels/11212.jpg', category:'Shoes'},
    {name:'Midnight Blue Pump Heels', price:3850, image:'../images/heels/11214.jpg', category:'Shoes'},
    {name:'Tan Gladiator Heels', price:3900, image:'../images/heels/11216.jpg', category:'Shoes'},
    {name:'Red Patent Leather Heels', price:3950, image:'../images/heels/11218.jpg', category:'Shoes'},
    {name:'Emerald Velvet Heels', price:4000, image:'../images/heels/11220.jpg', category:'Shoes'},
    {name:'Champagne Platform Sandals', price:3500, image:'../images/heels/11222.jpg', category:'Shoes'},
    {name:'Coral Square Heel Sandals', price:3550, image:'../images/heels/11224.jpg', category:'Shoes'},
    {name:'Beige Comfort Heels', price:3600, image:'../images/heels/11226.jpg', category:'Shoes'},
    {name:'Metallic Rose Heels', price:3650, image:'../images/heels/11228.jpg', category:'Shoes'},
    {name:'Statement Glossy Heels', price:3700, image:'../images/heels/11230.jpg', category:'Shoes'},
    {name:'Modern Nude Block Heels', price:3750, image:'../images/heels/11232.jpg', category:'Shoes'},
    {name:'Classic White Pumps', price:3800, image:'../images/heels/11234.jpg', category:'Shoes'},
    {name:'Soft Lavender Heels', price:3850, image:'../images/heels/11236.jpg', category:'Shoes'},
    {name:'Black Lace-Up Heels', price:3900, image:'../images/heels/11238.jpg', category:'Shoes'},
    {name:'Sunset Orange Heels', price:3950, image:'../images/heels/11240.jpg', category:'Shoes'},
    {name:'Glamorous Pink Heels', price:4000, image:'../images/heels/11242.jpg', category:'Shoes'}
];

let cart = [];
const shoesList = document.getElementById('shoes-list');
const handbagsList = document.getElementById('handbags-list');
const themeSelect = document.getElementById('theme-select');
const profileSummary = document.getElementById('profile-summary');
const profileForm = document.getElementById('profile-form');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profilePhone = document.getElementById('profile-phone');
const profileAddress = document.getElementById('profile-address');

// Categorize products using category field
const shoes = products.filter(product => product.category === 'Shoes');
const handbags = products.filter(product => product.category === 'Handbags');

function getSavedProfile(){
    const stored = localStorage.getItem('userProfile');
    return stored ? JSON.parse(stored) : null;
}

function saveProfile(profile){
    localStorage.setItem('userProfile', JSON.stringify(profile));
}

function renderProfile(profile){
    if(!profile){
        if(profileSummary){
            profileSummary.innerHTML = '<p class="muted">No profile created yet. Use the form to create your profile.</p>';
        }
        if(profileForm){
            profileForm.classList.remove('hidden');
        }
        return;
    }

    if(profileSummary){
        profileSummary.innerHTML = `
            <div class="profile-card">
                <h3>${profile.name}</h3>
                <p><strong>Email:</strong> ${profile.email}</p>
                <p><strong>Phone:</strong> ${profile.phone}</p>
                <p><strong>Address:</strong> ${profile.address || 'Not set'}</p>
                <button type="button" id="edit-profile-button">Edit Profile</button>
            </div>
        `;
    }

    if(profileForm){
        profileForm.classList.add('hidden');
    }

    const editButton = document.getElementById('edit-profile-button');
    if(editButton){
        editButton.addEventListener('click', () => {
            if(profileName) profileName.value = profile.name || '';
            if(profileEmail) profileEmail.value = profile.email || '';
            if(profilePhone) profilePhone.value = profile.phone || '';
            if(profileAddress) profileAddress.value = profile.address || '';
            if(profileForm) profileForm.classList.remove('hidden');
        });
    }
}

function initProfile(){
    const profile = getSavedProfile();
    if(profile){
        renderProfile(profile);
    } else {
        if(profileForm){
            profileForm.classList.remove('hidden');
        }
    }
}

function handleProfileSubmit(event){
    event.preventDefault();
    if(!profileName || !profileEmail || !profilePhone || !profileAddress) return;

    const profile = {
        name: profileName.value.trim(),
        email: profileEmail.value.trim(),
        phone: profilePhone.value.trim(),
        address: profileAddress.value.trim()
    };

    if(!profile.name || !profile.email || !profile.phone){
        alert('Please enter your name, email, and phone number.');
        return;
    }

    saveProfile(profile);
    renderProfile(profile);
    alert('Profile saved successfully.');
}

if(profileForm){
    profileForm.addEventListener('submit', handleProfileSubmit);
}

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
initProfile();

// Display shoes
if(shoesList){
    shoes.forEach((product,index)=>{
        shoesList.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">KSh ${product.price}</p>
                <button onclick="addToCart(${products.indexOf(product)})">Add to Cart</button>
            </div>
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