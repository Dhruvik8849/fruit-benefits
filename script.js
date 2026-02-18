// --- DATA CONFIGURATION ---
const fruitData = [
    { id: 'apple', name: 'Apple', emoji: '🍎', benefit: 'Immunity & Heart' },
    { id: 'banana', name: 'Banana', emoji: '🍌', benefit: 'Energy & Muscle' },
    { id: 'watermelon', name: 'Watermelon', emoji: '🍉', benefit: 'Hydration & Detox' },
    { id: 'mango', name: 'Mango', emoji: '🥭', benefit: 'Eyes & Immunity' },
    { id: 'pineapple', name: 'Pineapple', emoji: '🍍', benefit: 'Digestion Aid' },
    { id: 'strawberry', name: 'Strawberry', emoji: '🍓', benefit: 'Glow & Low Cal' },
    { id: 'guava', name: 'Guava', emoji: '🍈', benefit: 'Super Vit-C' },
    { id: 'kiwi', name: 'Kiwi', emoji: '🥝', benefit: 'Antioxidants' },
    { id: 'cherry', name: 'Cherry', emoji: '🍒', benefit: 'Sleep & Recovery' },
    { id: 'papaya', name: 'Papaya', emoji: '🥣', benefit: 'Gut Health' },
    { id: 'orange', name: 'Orange', emoji: '🍊', benefit: 'Skin Health' },
    { id: 'pomegranate', name: 'Pomegranate', emoji: '🔴', benefit: 'Blood Flow' },
    { id: 'grapes', name: 'Grapes', emoji: '🍇', benefit: 'Brain Health' },
    { id: 'dragonfruit', name: 'Dragon Fruit', emoji: '🐉', benefit: 'Superfood' },
    { id: 'muskmelon', name: 'Muskmelon', emoji: '🍈', benefit: 'Cooling' },
    { id: 'pear', name: 'Pear', emoji: '🍐', benefit: 'High Fiber' },
    { id: 'plum', name: 'Plum', emoji: '🍑', benefit: 'Bone Health' },
    { id: 'litchi', name: 'Litchi', emoji: '⚪', benefit: 'Hydration' },
    { id: 'blueberry', name: 'Blueberry', emoji: '🫐', benefit: 'Memory' },
    { id: 'avocado', name: 'Avocado', emoji: '🥑', benefit: 'Healthy Fats' },
    { id: 'fig', name: 'Fig', emoji: '🌰', benefit: 'Digestion' },
    { id: 'sapota', name: 'Sapota', emoji: '🥔', benefit: 'Instant Energy' }
];

// --- STATE MANAGEMENT ---
let cart = JSON.parse(localStorage.getItem('nightFruitsCart')) || [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    updateCartUI();
    initScrollReveal();
    document.body.classList.add('fade-page');
});

// --- RENDER FUNCTIONS ---
function renderMenu() {
    const grid = document.getElementById('fruit-grid-container');
    grid.innerHTML = fruitData.map(fruit => `
        <div class="fruit-card" onclick="openFruitModal('${fruit.id}')">
            <div class="emoji-display">${fruit.emoji}</div>
            <h3>${fruit.name}</h3>
            <p>${fruit.benefit}</p>
            <button class="add-btn" onclick="event.stopPropagation(); addToCart('${fruit.id}')">Add +</button>
        </div>
    `).join('');
}

// --- CART LOGIC ---
function addToCart(fruitId) {
    const fruit = fruitData.find(f => f.id === fruitId);
    
    // Check if already exists to prevent duplicates if preferred (optional)
    const exists = cart.find(item => item.id === fruitId);
    if (!exists) {
        cart.push(fruit);
        saveCart();
        updateCartUI();
        showToast(`Added ${fruit.name} ✔`);
    } else {
        showToast(`${fruit.name} is already in cart!`);
    }
}

function removeFromCart(fruitId) {
    cart = cart.filter(item => item.id !== fruitId);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('nightFruitsCart', JSON.stringify(cart));
}

// --- UI UPDATES ---
function updateCartUI() {
    const count = cart.length;
    
    // Update Badges
    document.getElementById('cart-count').innerText = count;
    document.getElementById('sticky-count').innerText = count;

    // Show/Hide Sticky Bar
    const stickyBar = document.getElementById('sticky-cart-bar');
    if (count > 0) {
        stickyBar.classList.remove('hidden');
    } else {
        stickyBar.classList.add('hidden');
    }

    // Render Modal Items
    const cartContainer = document.getElementById('cart-items-container');
    if (count === 0) {
        cartContainer.innerHTML = '<p class="empty-msg">Your bowl is empty. Add some fruits!</p>';
    } else {
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item-row">
                <div>${item.emoji} <strong>${item.name}</strong></div>
                <div class="remove-item" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-times-circle"></i>
                </div>
            </div>
        `).join('');
    }
}

// --- WHATSAPP CHECKOUT (IMPORTANT) ---
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Please select at least one fruit!");
        return;
    }

    let fruitList = cart.map(item => `- ${item.name} ${item.emoji}`).join('\n');
    
    // Exact format requested
    let message = `Hello NightFruits 🍉,\n\nMy Name:\nMy Location:\n\nI would like to order the following fruits:\n${fruitList}\n\nPlease confirm my order. Thank you!`;

    // Encode and Open
    let url = `https://wa.me/919116601188?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// --- MODALS & UX ---
function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

// --- FRUIT DETAILS MODAL (improved) ---
function generateDetails(fruit) {
    const fallback = {
        why: `${fruit.name} is packed with nutrients that deliver quick benefits and gentle evening nourishment.`,
        benefits: ['Supports digestion','Boosts immunity','Easy to enjoy'],
        nutrients: ['Vitamin C','Dietary Fiber'],
        bestTime: 'As a light evening snack.'
    };

    const map = {
        apple: { why: 'Apples bring fiber and antioxidants to support heart and gut health.', benefits:['Supports heart health','High fiber for fullness','Gentle on digestion'], nutrients:['Fiber','Vitamin C'], bestTime:'Evening or before bed.' },
        banana: { why: 'Bananas deliver quick energy and potassium for muscle recovery.', benefits:['Instant energy','Replenishes electrolytes','Calms stomach'], nutrients:['Potassium','Vitamin B6'], bestTime:'Evening snack or post-workout.' },
        watermelon: { why: 'Watermelon hydrates and soothes with its high water content.', benefits:['Hydrating','Refreshing','Low-calorie'], nutrients:['Water','Vitamin A'], bestTime:'Night to boost hydration.' },
        mango: { why: 'Mango adds vitamins and antioxidants for immunity and skin.', benefits:['Vitamin-rich','Supports vision','Tasty treat'], nutrients:['Vitamin A','Vitamin C'], bestTime:'Early evening in small portions.' },
        pineapple: { why: 'Pineapple contains natural enzymes that help digestion after meals.', benefits:['Aids digestion','Rich in enzymes','Tropical flavor'], nutrients:['Bromelain','Vitamin C'], bestTime:'After dinner as a digestive aid.' },
        strawberry: { why: 'Strawberries are antioxidant-packed and delightfully light.', benefits:['Skin-friendly','Low-calorie','Antioxidant rich'], nutrients:['Vitamin C','Manganese'], bestTime:'Evening or dessert replacement.' }
    };

    return map[fruit.id] || fallback;
}

function openFruitModal(fruitId) {
    const fruit = fruitData.find(f => f.id === fruitId);
    if (!fruit) return;
    const details = generateDetails(fruit);
    const modal = document.getElementById('fruitModal');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <div class="modal-header">
            <div style="display:flex;align-items:center;gap:12px;">
                <div class="modal-emoji">${fruit.emoji}</div>
                <div>
                    <h2>${fruit.name}</h2>
                    <p style="color:var(--text-gray);margin-top:4px;">${details.why}</p>
                </div>
            </div>
        </div>
        <div class="modal-body">
            <h4 style="margin-top:12px;color:var(--primary-green)">Key Benefits</h4>
            <div class="benefits-list">
                ${(details.benefits || []).map(b => `<div class="pill">${b}</div>`).join('')}
            </div>
            <h4 style="margin-top:12px;color:var(--primary-green)">Main Nutrients</h4>
            <div class="nutrients-list">
                ${(details.nutrients || []).map(n => `<div class="pill">${n}</div>`).join('')}
            </div>
            <h4 style="margin-top:12px;color:var(--primary-green)">Best Time to Eat</h4>
            <p style="margin-top:6px;color:var(--text-gray)">${details.bestTime}</p>
            <div style="margin-top:16px;display:flex;gap:10px;align-items:center;">
                <button class="btn-primary" onclick="event.stopPropagation(); addToCart('${fruit.id}'); closeFruitModal();">Add to Bowl</button>
                <button class="btn-secondary" onclick="event.stopPropagation(); closeFruitModal();">Close</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    const content = modal.querySelector('.modal-content');
    content.classList.remove('modal-exit');
    content.classList.add('modal-enter');
    setTimeout(()=> content.classList.remove('modal-enter'), 350);
}

function closeFruitModal() {
    const modal = document.getElementById('fruitModal');
    if (!modal) return;
    const content = modal.querySelector('.modal-content');
    content.classList.add('modal-exit');
    setTimeout(()=> { modal.style.display = 'none'; content.classList.remove('modal-exit'); }, 220);
}

// Toast improvements
function showToast(msg) {
    const x = document.getElementById("toast");
    x.innerText = msg;
    x.className = "toast show";
    void x.offsetWidth; // restart animation
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// Close modals on overlay click / escape key
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
    const detailsModal = document.getElementById('fruitModal');
    if (event.target == detailsModal) {
        closeFruitModal();
    }
}

window.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeFruitModal(); });

// --- Scroll reveal ---
function initScrollReveal() {
    const items = document.querySelectorAll('.scroll-reveal');
    const obs = new IntersectionObserver((entries)=>{
        entries.forEach(ent=>{
            if (ent.isIntersecting) { ent.target.classList.add('revealed'); obs.unobserve(ent.target); }
        });
    }, { threshold: 0.12 });
    items.forEach(i=> obs.observe(i));
}
