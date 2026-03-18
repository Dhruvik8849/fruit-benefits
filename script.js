// --- DATA CONFIGURATION ---
const fruitData = [
    { id: 'apple', name: 'Apple', emoji: '🍎', benefit: 'Immunity & Heart', description: 'Boosts immunity and supports heart health.', nutrients: ['Vitamin C', 'Fiber', 'Potassium'], calories: 52, bestTime: 'Evening snack', sugarLevel: 'Low', hydration: 'Medium', energyType: 'Slow' },
    { id: 'banana', name: 'Banana', emoji: '🍌', benefit: 'Energy & Muscle', description: 'Provides instant energy and muscle support.', nutrients: ['Potassium', 'Vitamin B6', 'Fiber'], calories: 89, bestTime: 'Morning boost', sugarLevel: 'Medium', hydration: 'Medium', energyType: 'Instant' },
    { id: 'watermelon', name: 'Watermelon', emoji: '🍉', benefit: 'Hydration & Detox', description: 'Hydrates and aids natural detoxification.', nutrients: ['Water', 'Vitamin A', 'Vitamin C'], calories: 30, bestTime: 'Afternoon refresh', sugarLevel: 'Medium', hydration: 'High', energyType: 'Balanced' },
    { id: 'mango', name: 'Mango', emoji: '🥭', benefit: 'Eyes & Immunity', description: 'Enhances vision and boosts immunity.', nutrients: ['Vitamin A', 'Vitamin C', 'Fiber'], calories: 60, bestTime: 'Midday treat', sugarLevel: 'High', hydration: 'Medium', energyType: 'Instant' },
    { id: 'pineapple', name: 'Pineapple', emoji: '🍍', benefit: 'Digestion Aid', description: 'Aids digestion with natural enzymes.', nutrients: ['Vitamin C', 'Bromelain', 'Manganese'], calories: 50, bestTime: 'After meals', sugarLevel: 'Medium', hydration: 'High', energyType: 'Balanced' },
    { id: 'strawberry', name: 'Strawberry', emoji: '🍓', benefit: 'Glow & Low Cal', description: 'Promotes skin glow with low calories.', nutrients: ['Vitamin C', 'Manganese', 'Fiber'], calories: 32, bestTime: 'Evening dessert', sugarLevel: 'Low', hydration: 'High', energyType: 'Slow' },
    { id: 'guava', name: 'Guava', emoji: '🍈', benefit: 'Super Vit-C', description: 'Rich in Vitamin C for immunity.', nutrients: ['Vitamin C', 'Fiber', 'Potassium'], calories: 68, bestTime: 'Daily supplement', sugarLevel: 'Low', hydration: 'Medium', energyType: 'Balanced' },
    { id: 'kiwi', name: 'Kiwi', emoji: '🥝', benefit: 'Antioxidants', description: 'Packed with antioxidants for health.', nutrients: ['Vitamin C', 'Vitamin K', 'Fiber'], calories: 61, bestTime: 'Night snack', sugarLevel: 'Medium', hydration: 'High', energyType: 'Balanced' },
    { id: 'cherry', name: 'Cherry', emoji: '🍒', benefit: 'Sleep & Recovery', description: 'Supports sleep and muscle recovery.', nutrients: ['Vitamin C', 'Potassium', 'Fiber'], calories: 50, bestTime: 'Before bed', sugarLevel: 'Medium', hydration: 'Medium', energyType: 'Slow' },
    { id: 'papaya', name: 'Papaya', emoji: '🥣', benefit: 'Gut Health', description: 'Promotes healthy digestion.', nutrients: ['Vitamin C', 'Vitamin A', 'Fiber'], calories: 43, bestTime: 'Evening meal', sugarLevel: 'Medium', hydration: 'High', energyType: 'Balanced' },
    { id: 'orange', name: 'Orange', emoji: '🍊', benefit: 'Skin Health', description: 'Improves skin health and glow.', nutrients: ['Vitamin C', 'Fiber', 'Potassium'], calories: 47, bestTime: 'Morning juice', sugarLevel: 'Medium', hydration: 'High', energyType: 'Balanced' },
    { id: 'pomegranate', name: 'Pomegranate', emoji: '🔴', benefit: 'Blood Flow', description: 'Enhances blood circulation.', nutrients: ['Vitamin C', 'Potassium', 'Fiber'], calories: 83, bestTime: 'Daily intake', sugarLevel: 'Medium', hydration: 'Medium', energyType: 'Balanced' },
    { id: 'grapes', name: 'Grapes', emoji: '🍇', benefit: 'Brain Health', description: 'Supports brain function and memory.', nutrients: ['Vitamin C', 'Potassium', 'Fiber'], calories: 69, bestTime: 'Snack time', sugarLevel: 'High', hydration: 'Medium', energyType: 'Instant' },
    { id: 'dragonfruit', name: 'Dragon Fruit', emoji: '🐉', benefit: 'Superfood', description: 'Nutrient-dense superfood benefits.', nutrients: ['Vitamin C', 'Fiber', 'Magnesium'], calories: 60, bestTime: 'Anytime', sugarLevel: 'Low', hydration: 'High', energyType: 'Balanced' },
    { id: 'muskmelon', name: 'Muskmelon', emoji: '🍈', benefit: 'Cooling', description: 'Provides cooling and hydration.', nutrients: ['Vitamin C', 'Vitamin A', 'Water'], calories: 34, bestTime: 'Hot days', sugarLevel: 'Medium', hydration: 'High', energyType: 'Balanced' },
    { id: 'pear', name: 'Pear', emoji: '🍐', benefit: 'High Fiber', description: 'High in fiber for digestion.', nutrients: ['Fiber', 'Vitamin C', 'Potassium'], calories: 57, bestTime: 'Mid-morning', sugarLevel: 'Medium', hydration: 'Medium', energyType: 'Slow' },
    { id: 'plum', name: 'Plum', emoji: '🍑', benefit: 'Bone Health', description: 'Supports bone health and density.', nutrients: ['Vitamin C', 'Fiber', 'Potassium'], calories: 46, bestTime: 'Evening', sugarLevel: 'Low', hydration: 'Medium', energyType: 'Balanced' },
    { id: 'litchi', name: 'Litchi', emoji: '⚪', benefit: 'Hydration', description: 'Excellent for hydration.', nutrients: ['Vitamin C', 'Copper', 'Potassium'], calories: 66, bestTime: 'Summer snack', sugarLevel: 'High', hydration: 'High', energyType: 'Instant' },
    { id: 'blueberry', name: 'Blueberry', emoji: '🫐', benefit: 'Memory', description: 'Boosts memory and cognitive function.', nutrients: ['Vitamin C', 'Manganese', 'Fiber'], calories: 57, bestTime: 'Breakfast', sugarLevel: 'Low', hydration: 'Medium', energyType: 'Balanced' },
    { id: 'avocado', name: 'Avocado', emoji: '🥑', benefit: 'Healthy Fats', description: 'Provides healthy fats for energy.', nutrients: ['Healthy Fats', 'Vitamin K', 'Fiber'], calories: 160, bestTime: 'Lunch', sugarLevel: 'Low', hydration: 'Low', energyType: 'Slow' },
    { id: 'fig', name: 'Fig', emoji: '🌰', benefit: 'Digestion', description: 'Aids digestion and gut health.', nutrients: ['Fiber', 'Potassium', 'Calcium'], calories: 74, bestTime: 'Post-meal', sugarLevel: 'Medium', hydration: 'Medium', energyType: 'Balanced' },
    { id: 'sapota', name: 'Sapota', emoji: '🥔', benefit: 'Instant Energy', description: 'Delivers quick energy boost.', nutrients: ['Vitamin A', 'Fiber', 'Potassium'], calories: 83, bestTime: 'Quick snack', sugarLevel: 'High', hydration: 'Medium', energyType: 'Instant' }
];

// --- STATE MANAGEMENT ---
let cart = JSON.parse(localStorage.getItem('nightFruitsCart')) || [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    updateCartUI();
    initScrollReveal();
    document.body.classList.add('fade-page');
    // Attach non-inline event listeners for cart and whatsapp buttons
    const navCart = document.getElementById('nav-cart-icon');
    if (navCart) navCart.addEventListener('click', () => { window.location.href = 'index1.html'; });
    const stickyWA = document.getElementById('sticky-whatsapp-btn');
    if (stickyWA) stickyWA.addEventListener('click', checkoutWhatsApp);
    const fullWA = document.getElementById('whatsapp-full-btn');
    if (fullWA) fullWA.addEventListener('click', checkoutWhatsApp);
    const closeCartBtn = document.getElementById('close-cart-btn');
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCartModal);
    const fruitModalClose = document.getElementById('fruit-modal-close');
    if (fruitModalClose) fruitModalClose.addEventListener('click', closeFruitModal);
});

// --- RENDER FUNCTIONS ---
function renderMenu() {
    const grid = document.getElementById('fruit-grid-container');
    grid.innerHTML = fruitData.map(fruit => `
        <div class="fruit-card" data-id="${fruit.id}">
            <div class="emoji-display">${fruit.emoji}</div>
            <h3>${fruit.name}</h3>
            <p>${fruit.benefit}</p>
            <div class="nutrient-tags">
                <span class="pill">${fruit.nutrients[0]}</span>
                <span class="pill">${fruit.nutrients[1]}</span>
            </div>
            <div class="card-info">
                <span class="calories">${fruit.calories} kcal</span>
                <span class="indicator">${fruit.sugarLevel} Sugar</span>
            </div>
            <button class="add-btn" data-id="${fruit.id}">Add +</button>
        </div>
    `).join('');

    // Attach event listeners (avoid inline onclicks)
    grid.querySelectorAll('.fruit-card').forEach(card => {
        card.addEventListener('click', (e) => {
            openFruitModal(e, card.dataset.id, card);
        });
    });
    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(btn.dataset.id);
        });
    });
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
    // Create or reuse a small contextual popup near the click/tap position
    // 'openFruitModal' now accepts the event as first arg in our listeners
}

// New contextual popup implementation
function openFruitModal(event, fruitId, cardEl) {
    // allow older callers that pass only id
    if (typeof event === 'string') {
        fruitId = event;
        event = { clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 };
    }
    const fruit = fruitData.find(f => f.id === fruitId);
    if (!fruit) return;
    const details = generateDetails(fruit);

    // remove any existing popup
    closeFruitModal();

    const popup = document.createElement('div');
    popup.id = 'fruitPopup';
    popup.className = 'fruit-popup';
    popup.innerHTML = `
        <div style="display:flex;gap:12px;align-items:flex-start;">
            <div class="modal-emoji" style="font-size:2.6rem">${fruit.emoji}</div>
            <div style="flex:1;min-width:0">
                <h3 style="margin:0;color:var(--primary-green)">${fruit.name}</h3>
                <p style="margin:6px 0 8px;color:var(--text-gray);font-size:0.92rem">${details.why}</p>
                <h4 style="margin:6px 0 6px;color:var(--primary-green);font-size:0.92rem">Benefits</h4>
                <div style="display:flex;gap:8px;flex-wrap:wrap">
                    ${(details.benefits || []).map(b => `<span class="pill">${b}</span>`).join('')}
                </div>
                <h4 style="margin:8px 0 6px;color:var(--primary-green);font-size:0.92rem">Nutrients</h4>
                <div style="display:flex;gap:8px;flex-wrap:wrap">
                    ${(details.nutrients || []).map(n => `<span class="pill">${n}</span>`).join('')}
                </div>
                <div style="margin-top:10px;display:flex;gap:8px">
                    <button class="btn-primary popup-add">Add</button>
                    <button class="btn-secondary popup-view-cart">View Cart</button>
                    <button class="btn-secondary popup-close">Close</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(popup);

    // position relative to the clicked card if available, otherwise use event coords
    popup.style.position = 'fixed';
    popup.style.zIndex = 4000;
    popup.style.width = '300px';
    popup.style.maxWidth = '92%';
    popup.style.background = 'linear-gradient(180deg, rgba(20,20,20,0.98), #0f0f0f)';
    popup.style.border = '1px solid rgba(0,242,96,0.12)';
    popup.style.borderRadius = '12px';
    popup.style.padding = '12px';
    popup.style.boxShadow = '0 18px 40px rgba(0,0,0,0.6)';
    popup.style.backdropFilter = 'blur(6px)';
    popup.style.visibility = 'hidden';

    requestAnimationFrame(() => {
        const box = popup.getBoundingClientRect();
        let left, top;
        if (cardEl) {
            const crect = cardEl.getBoundingClientRect();
            // prefer right side below the card
            left = crect.right + 8;
            top = crect.top + 8;
            // if overflow horizontally, place to left
            if (left + box.width > window.innerWidth - 8) {
                left = crect.left - box.width - 8;
            }
            // if still overflow horizontally, clamp
            left = Math.max(8, Math.min(left, window.innerWidth - box.width - 8));
            // if overflow vertically, try aligning center of card
            if (top + box.height > window.innerHeight - 8) {
                top = crect.top + crect.height - box.height - 8;
            }
        } else {
            const px = Math.max(12, Math.min(event.clientX, window.innerWidth - 12));
            const py = Math.max(12, Math.min(event.clientY, window.innerHeight - 12));
            left = px - box.width / 2;
            top = py - box.height - 12;
            if (top < 8) top = py + 18;
            left = Math.max(8, Math.min(left, window.innerWidth - box.width - 8));
        }

        if (top < 8) top = 8;
        if (top + box.height > window.innerHeight - 8) top = window.innerHeight - box.height - 8;

        popup.style.left = left + 'px';
        popup.style.top = top + 'px';
        popup.style.visibility = 'visible';
    });

    // wire popup buttons
    popup.querySelector('.popup-add').addEventListener('click', (ev) => {
        ev.stopPropagation();
        addToCart(fruit.id);
        closeFruitModal();
    });
    popup.querySelector('.popup-close').addEventListener('click', (ev) => { ev.stopPropagation(); closeFruitModal(); });
    const viewCartBtn = popup.querySelector('.popup-view-cart');
    if (viewCartBtn) viewCartBtn.addEventListener('click', (ev)=>{ ev.stopPropagation(); window.location.href = 'index1.html'; });

    // stop clicks inside popup from closing it via global handler
    popup.addEventListener('click', (ev) => ev.stopPropagation());
}

function closeFruitModal() {
    // close contextual popup if present
    const pop = document.getElementById('fruitPopup');
    if (pop) { pop.remove(); }
    // also keep legacy centered modal closing for compatibility
    const modal = document.getElementById('fruitModal');
    if (!modal) return;
    const content = modal.querySelector('.modal-content');
    if (content) {
        content.classList.add('modal-exit');
        setTimeout(()=> { modal.style.display = 'none'; content.classList.remove('modal-exit'); }, 220);
    }
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
    // clicking anywhere else should close our contextual popup
    const popup = document.getElementById('fruitPopup');
    if (popup && !popup.contains(event.target)) closeFruitModal();
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
