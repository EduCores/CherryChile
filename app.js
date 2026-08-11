/* ============================================================
   CHERRY CHILE - MODERN PREMIUM STORE INTERACTIVITY
   ============================================================ */
'use strict';

/* ---------- PRODUCT DATA ---------- */
const PRODUCTS = [
    // CHOCOLATERÍA
    { id: 1, name: 'Molde Policarbonato "Bombones Profesionales"', category: 'Chocolatería', price: 24990, oldPrice: null, rating: 5, reviews: 34, badge: 'new', img: 'images/product-1.png', desc: 'Molde de policarbonato de alta resistencia para bombonería fina. Ideal para bombones rellenos y tableta de alta gama, con acabado brillante profesional.', features: ['Policarbonato alimentario certificado', 'Alta resistencia a la temperatura', 'Permite desmolde perfecto con brillo'] },
    { id: 2, name: 'Cobertura de Chocolate Premium 1Kg', category: 'Chocolatería', price: 8990, oldPrice: 10990, rating: 4.5, reviews: 58, badge: 'discount', img: 'images/product-2.png', desc: 'Cobertura de chocolate con alto porcentaje de manteca de cacao. Perfecta para atemperar, crear bombones y cubrir tortas con brillo profesional.', features: ['Manteca de cacao premium', 'Fácil de atemperar', 'Brillo y snap profesional'] },
    { id: 3, name: 'Colorantes Liposolubles Set 6 Colores', category: 'Chocolatería', price: 15490, oldPrice: null, rating: 5, reviews: 21, badge: null, img: 'images/product-3.png', desc: 'Set de colorantes liposolubles para chocolatería y manteca de cacao. Colores intensos y estables, ideales para aerógrafo y aplicaciones de precisión.', features: ['6 colores intensos', 'Apto para aerógrafo', 'Libre de grasas trans'] },
    { id: 4, name: 'Transfer 3D "Geometría Dorada" 35x35cm', category: 'Chocolatería', price: 12900, oldPrice: null, rating: 4.5, reviews: 15, badge: 'new', img: 'images/product-4.jpg', desc: 'Hoja de transfer texturada 3D con patrón geométrico dorado para decorar bombones y chocolates. Acabado elegante para presentaciones premium.', features: ['Diseño 3D exclusivo', 'Textura dorada metalizada', 'Fácil aplicación sobre cobertura'] },

    // REPOSTERÍA
    { id: 5, name: 'Boquilla Acero Inoxidable #1M Estrella', category: 'Repostería', price: 3490, oldPrice: null, rating: 4.5, reviews: 42, badge: null, img: 'images/boquillas.jpg', desc: 'Boquilla profesional de acero inoxidable para rosas y decoraciones icónicas. Compatible con todas las mangas de repostería estándar.', features: ['Acero inoxidable 304', 'Corte limpio y preciso', 'Compatibilidad universal'] },
    { id: 6, name: 'Juego Boquillas Decoración 12 Piezas', category: 'Repostería', price: 13990, oldPrice: 16990, rating: 5, reviews: 27, badge: 'discount', img: 'images/12boquillas.jpg', desc: 'Set completo de 12 boquillas para repostería creativa: estrellas, pétalos, hojas y cestería. Incluye estuche de almacenamiento.', features: ['12 diseños profesionales', 'Estuche reutilizable', 'Limpieza fácil'] },
    { id: 7, name: 'Molde Silicona "Brazo de Reina" Premium', category: 'Repostería', price: 15490, oldPrice: null, rating: 4.5, reviews: 19, badge: null, img: 'images/hero-1.jpg', desc: 'Molde de silicona platino de grado alimentario para preparar el clásico brazo de reina chileno con desmolde perfecto y lavado simple.', features: ['Silicona platino', 'Antiadherente de por vida', 'Uso horno y congelador'] },
    { id: 8, name: 'Fondant Italiano Listo 1Kg', category: 'Repostería', price: 7990, oldPrice: null, rating: 5, reviews: 63, badge: null, img: 'images/product-8.jpg', desc: 'Fondant listo para estirar y modelar, suave, elástico y de sabor neutro. Perfecto para cubrir tortas y crear figuras con acabado perfecto.', features: ['Suave y elástico', 'Fácil de colorar', 'No se agrieta'] },
// COCINA
    { id: 9, name: 'Cuchillo Chef Acero Alemán 20cm', category: 'Cocina', price: 32990, oldPrice: 38990, rating: 5, reviews: 48, badge: 'discount', img: 'images/product-9.jpg', desc: 'Cuchillo chef profesional forjado en acero alemán de alta carburación. Mango ergonómico con balance perfecto para uso intensivo en cocinas profesionales.', features: ['Acero alemán 1.4116', 'Dureza 58 HRC', 'Garantía 10 años'] },
    { id: 10, name: 'Wok Profesional Acero 28cm', category: 'Cocina', price: 28490, oldPrice: null, rating: 4.5, reviews: 31, badge: null, img: 'images/product-10.jpg', desc: 'Wok de acero al carbono con excelente conducción térmica para cocciones a fuego alto tipo asiático. Incluye asa larga y mango ergonómico.', features: ['Acero al carbono', 'Apta inducción', 'Sazón natural antiadherente'] },
    { id: 11, name: 'Juego Cuchillos Profesionales 6 Piezas', category: 'Cocina', price: 45990, oldPrice: 56990, rating: 5, reviews: 73, badge: 'discount', img: 'images/product-11.jpg', desc: 'Set de 6 cuchillos de uso profesional con bloque de almacenamiento magnético. Incluye cuchillo chef, santoku, pan, utilidad, pelador y tijeras.', features: ['6 piezas premium', 'Bloque magnético', 'Afilado duradero'] },

    // ELÉCTRICOS
    { id: 12, name: 'Batidora de Pie Profesional 4.8L', category: 'Eléctricos', price: 289990, oldPrice: 329990, rating: 5, reviews: 12, badge: 'discount', img: 'images/product-12.jpg', desc: 'Batidora de pie de 325W con bowl de acero inoxidable de 4.8 litros. 10 velocidades, función turbo y accesorios para batir, amasar y mezclar.', features: ['Motor 325W silencioso', 'Bowl 4.8L acero', '10 velocidades + turbo'] },
    { id: 13, name: 'Licuadora Industrial 2 Litros', category: 'Eléctricos', price: 149990, oldPrice: null, rating: 4.5, reviews: 25, badge: null, img: 'images/product-13.jpg', desc: 'Licuadora industrial de 1500W con vaso de policarbonato de 2 litros, cuchillas de acero y sistema de triple acción para frappés y preparaciones de alto volumen.', features: ['1500W de potencia', 'Vaso PC 2L', 'Uso continuo'] },
    { id: 14, name: 'Atemperadora de Chocolate 2Kg', category: 'Eléctricos', price: 356000, oldPrice: 399000, rating: 5, reviews: 9, badge: 'new', img: 'images/product-14.jpg', desc: 'Máquina atemperadora profesional con capacidad de 2kg, control digital de temperatura y ciclo automático de atemperado para resultados perfectos.', features: ['Control digital exacto', 'Ciclo automático', 'Capacidad 2Kg'] },

    // MENAJE
    { id: 15, name: 'Copa Cristal 380ml Pack x6', category: 'Menaje', price: 18990, oldPrice: null, rating: 4.5, reviews: 37, badge: null, img: 'images/product-15.jpg', desc: 'Copas de cristal transparente con base tallada estilo profesional. Ideal para restaurantes, catering y menaje de lujo.', features: ['Cristal de primera calidad', 'Aptas lavavajillas', 'Presentación elegante'] },
    { id: 16, name: 'Set Vajilla Premium 12 Piezas', category: 'Menaje', price: 89990, oldPrice: 109990, rating: 5, reviews: 18, badge: 'discount', img: 'images/cat-menaje.jpg', desc: 'Vajilla completa de porcelana premium para 4 personas: platos llanos, soperos y postres con borde dorado de alta resistencia al uso diario.', features: ['Porcelana de alta cocción', 'Borde dorado durable', '12 piezas completas'] },
{ id: 17, name: 'Jarra de Té Cristal 1L', category: 'Menaje', price: 12990, oldPrice: null, rating: 4.5, reviews: 22, badge: null, img: 'images/product-17.jpg', desc: 'Jarra de cristal con tapa metálica y colador interior para infusiones y té. Diseño elegante para presentación en restaurantes y cafeterías.', features: ['Cristal templado', 'Colador inox', 'Volumen 1L'] },

    // ROPA DE CHEF
    { id: 18, name: 'Chaqueta Chef Clásica Negra', category: 'Ropa de Chef', price: 24490, oldPrice: null, rating: 4.5, reviews: 29, badge: null, img: 'images/product-18.jpg', desc: 'Chaqueta de chef de algodón grueso con botones ocultos, corte moderno y bolsillos amplios. Resistente a manchas y uso profesional.', features: ['Algodón 70/30', 'Botones ocultos', 'Tallas S a XXL'] },
    { id: 19, name: 'Delantal Lino Premium con Bolsillos', category: 'Ropa de Chef', price: 12990, oldPrice: 15990, rating: 5, reviews: 41, badge: 'discount', img: 'images/product-19.jpg', desc: 'Delantal profesional de mezcla de lino con cintas ajustables y bolsillos útiles. Acabado premium para chefs y pasteleros.', features: ['Mezcla lino premium', '3 bolsillos', 'Ajuste regulable'] },
    { id: 20, name: 'Gorro Chef Clásico Plegable', category: 'Ropa de Chef', price: 6990, oldPrice: null, rating: 4, reviews: 16, badge: null, img: 'images/product-20.jpg', desc: 'Gorro de chef clásico de gasa algodonada, plegable y de talla universal. Cómodo, fresco y de aspecto profesional impecable.', features: ['Gasa algodonada', 'Talla universal', 'Lavable fácilmente'] },

    // EMPAQUES
    { id: 21, name: 'Caja Torta 20 Pulgadas Pack x10', category: 'Empaques', price: 9990, oldPrice: null, rating: 4.5, reviews: 55, badge: null, img: 'images/product-21.jpg', desc: 'Cajas blancas resistentes para tortas de 20 pulgadas, con estructura reforzada ideal para entregas y auto retiro de pastelería.', features: ['Cartón resistente', 'Ventana opcional', 'Auto armado'] },
    { id: 22, name: 'Caja Bombones 12 Cavidades Pack x30', category: 'Empaques', price: 11490, oldPrice: 13490, rating: 5, reviews: 38, badge: 'discount', img: 'images/product-22.jpg', desc: 'Cajas troqueladas para 12 bombones, presentación premium para chocolaterías artesanales. Incluye inserto de papel brillante.', features: ['12 cavidades', 'Inserto antiadherente', 'Presentación premium'] },

    // VEGANOS & QUÍMICOS
    { id: 23, name: 'Isomalt Cristal Premium 1Kg', category: 'Veganos & Químicos', price: 9990, oldPrice: null, rating: 4.5, reviews: 44, badge: null, img: 'images/product-23.jpg', desc: 'Isomalt cristalino de alta pureza para decoraciones de azúcar transparente, grasas veganas y figuras de caramelo profesionales.', features: ['100% vegetal', 'Bajo índice glucémico', 'No se cristaliza'] },
    { id: 24, name: 'Gelificante Neutro Texturizante 250gr', category: 'Veganos & Químicos', price: 8490, oldPrice: null, rating: 5, reviews: 33, badge: 'new', img: 'images/product-24.jpg', desc: 'Texturizante gelificante de origen vegetal para elaboración de postres, esferificaciones y glaseados. Apto para dietas veganas.', features: ['Origen 100% vegetal', 'Esferificación fácil', 'Glaseados brillantes'] }
];

/* ---------- HELPERS ---------- */
function formatPrice(value) {
    return '$' + value.toLocaleString('es-CL').replace(/,/g, '.');
}

function getProductById(id) {
    return PRODUCTS.find(p => p.id === Number(id));
}
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
/* ---------- STATE ---------- */
let cart = [];
let wishlist = [];
let currentCategory = 'Todos';
let currentSort = 'featured';
let searchQuery = '';

function loadState() {
    try {
        cart = JSON.parse(localStorage.getItem('cc_cart')) || [];
        wishlist = JSON.parse(localStorage.getItem('cc_wishlist')) || [];
    } catch (e) {
        cart = [];
        wishlist = [];
    }
}
function saveCart() { localStorage.setItem('cc_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('cc_wishlist', JSON.stringify(wishlist)); }

/* ---------- TOASTS ---------- */
function showToast(message, type = 'success', icon = 'fa-circle-check') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast ' + (type === 'error' ? 'error' : 'success');
    toast.innerHTML = '<i class="fa-solid ' + icon + '"></i><span>' + message + '</span>';
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('out');
        setTimeout(() => toast.remove(), 350);
    }, 3200);
}

/* ---------- CART OPERATIONS ---------- */
function addToCart(productId, qty = 1) {
    const product = getProductById(productId);
    if (!product) return;
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty = Math.min(existing.qty + qty, 99);
    } else {
        cart.push({ id: product.id, qty });
    }
    saveCart();
    renderCart();
    renderProducts();
    showToast('"' + product.name + '" añadido al carro', 'success', 'fa-bag-shopping');
}

function decreaseCartItem(productId) {
    const existing = cart.find(item => item.id === Number(productId));
    if (!existing) return;
    existing.qty -= 1;
    if (existing.qty <= 0) {
        cart = cart.filter(item => item.id !== Number(productId));
    }
    saveCart();
    renderCart();
    renderProducts();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== Number(productId));
    saveCart();
    renderCart();
    renderProducts();
    showToast('Producto eliminado del carro', 'success', 'fa-trash-can');
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
    renderProducts();
    showToast('Carro vaciado', 'success', 'fa-broom');
}

function getCartCount() {
    return cart.reduce((acc, item) => acc + item.qty, 0);
}

function getCartSubtotal() {
    return cart.reduce((acc, item) => {
        const p = getProductById(item.id);
        return acc + (p ? p.price * item.qty : 0);
    }, 0);
}

/* ---------- WISHLIST OPERATIONS ---------- */
function toggleWishlist(productId) {
    const id = Number(productId);
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(w => w !== id);
        showToast('Eliminado de tu lista de deseos', 'success', 'fa-heart-crack');
    } else {
        wishlist.push(id);
        showToast('Agregado a tu lista de deseos', 'success', 'fa-heart');
    }
    saveWishlist();
    renderProducts();
    updateWishlistUI();
}

function updateWishlistUI() {
    const badge = document.getElementById('wishlistCount');
    if (badge) badge.textContent = wishlist.length;
}
/* ---------- PRODUCT RENDERING ---------- */
function getFilteredProducts() {
    let list = PRODUCTS.slice();
    if (currentCategory !== 'Todos') {
        list = list.filter(p => p.category === currentCategory);
    }
    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        list = list.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q)
        );
    }
    switch (currentSort) {
        case 'price-low': list.sort((a, b) => a.price - b.price); break;
        case 'price-high': list.sort((a, b) => b.price - a.price); break;
        case 'name': list.sort((a, b) => a.name.localeCompare(b.name, 'es')); break;
        default: break;
    }
    return list;
}

function starRow(rating) {
    let s = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.round(rating)) s += '<i class="fa-solid fa-star"></i>';
        else s += '<i class="fa-regular fa-star"></i>';
    }
    return s;
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const list = getFilteredProducts();

    if (list.length === 0) {
        grid.innerHTML = '<div class="no-products"><i class="fa-solid fa-box-open"></i><h3>No encontramos productos</h3><p>Prueba con otra búsqueda o categoría.</p></div>';
        return;
    }

    grid.innerHTML = list.map(p => {
        const wishActive = wishlist.includes(p.id) ? 'active' : '';
        const badgeHtml = p.badge ? '<div class="pc-badge ' + p.badge + '">' + (p.badge === 'new' ? 'Nuevo' : '-OFF') + '</div>' : '';
        const oldPriceHtml = p.oldPrice ? '<span class="old">' + formatPrice(p.oldPrice) + '</span>' : '';
        return '<article class="product-card" data-id="' + p.id + '">'
            + '<div class="pc-image">'
            +   '<div class="pc-badges">' + badgeHtml + '</div>'
            +   '<div class="pc-quick-actions">'
            +     '<button onclick="toggleWishlist(' + p.id + ')" class="' + wishActive + '" title="Lista de deseos"><i class="fa-solid fa-heart"></i></button>'
            +     '<button onclick="openProductModal(' + p.id + ')" title="Vista rápida"><i class="fa-solid fa-eye"></i></button>'
            +   '</div>'
            +   '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">'
            + '</div>'
            + '<div class="pc-body">'
            +   '<span class="pc-category">' + p.category + '</span>'
            +   '<h3 class="pc-name">' + p.name + '</h3>'
            +   '<div class="pc-rating">' + starRow(p.rating) + '<span>(' + p.reviews + ')</span></div>'
            +   '<div class="pc-price-row">'
            +     '<div class="pc-price">' + oldPriceHtml + '<span class="current">' + formatPrice(p.price) + '</span></div>'
            +     '<button class="pc-add-btn" onclick="addToCart(' + p.id + ', 1)" title="Añadir al carro"><i class="fa-solid fa-plus"></i></button>'
            +   '</div>'
            + '</div>'
            + '</article>';
    }).join('');
}

/* ---------- FILTER & SORT ---------- */
function filterByCategory(category) {
    currentCategory = category;
    searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    document.getElementById('clearSearchBtn').style.display = 'none';
    const pills = document.querySelectorAll('.pill-btn');
    pills.forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === category);
    });
    renderProducts();
    const target = document.getElementById('catalogo');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleSortChange(value) {
    currentSort = value;
    renderProducts();
}
/* ---------- SEARCH / AUTOCOMPLETE ---------- */
function handleSearchInput() {
    const input = document.getElementById('searchInput');
    const dropdown = document.getElementById('searchResultsDropdown');
    document.getElementById('clearSearchBtn').style.display = input.value ? 'block' : 'none';

    const q = input.value.trim();
    if (!q) {
        dropdown.classList.remove('show');
        renderProducts();
        return;
    }
    searchQuery = q;
    renderProducts();

    const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase())
    );

    if (results.length === 0) {
        dropdown.innerHTML = '<div class="search-empty-state"><i class="fa-solid fa-magnifying-glass"></i> Sin resultados para "' + escapeHtml(q) + '"</div>';
        dropdown.classList.add('show');
        return;
    }
    dropdown.innerHTML = results.slice(0, 6).map(p =>
        '<div class="search-result-item" onclick="selectSearchResult(' + p.id + ')">'
        + '<img src="' + p.img + '" alt="">'
        + '<div><div class="sr-name">' + p.name + '</div><div class="sr-cat">' + p.category + '</div></div>'
        + '<span class="sr-price">' + formatPrice(p.price) + '</span>'
        + '</div>'
    ).join('');
    dropdown.classList.add('show');
}

function selectSearchResult(productId) {
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    document.getElementById('clearSearchBtn').style.display = 'none';
    document.getElementById('searchResultsDropdown').classList.remove('show');
        searchQuery = '';
    openProductModal(productId);
}
/* ---------- MOBILE SEARCH (en drawer) ---------- */
function handleMobileSearch() {
    const input = document.getElementById('mobileSearchInput');
    const q = input ? input.value.trim() : '';
    searchQuery = q;
    const hdrInput = document.getElementById('searchInput');
    if (hdrInput) hdrInput.value = '';
    document.getElementById('clearSearchBtn').style.display = 'none';
    const pills = document.querySelectorAll('.pill-btn');
    pills.forEach(p => p.classList.toggle('active', p.dataset.category === 'Todos'));
    renderProducts();
}
function mobileSearchKey(e) {
    if (e.key !== 'Enter') return;
    const q = e.target.value.trim();
    if (!q) return;
    closeMobileMenu();
    const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase()) ||
        p.desc.toLowerCase().includes(q.toLowerCase())
    );
    if (results.length === 1) {
        openProductModal(results[0].id);
    } else if (results.length > 1) {
        const target = document.getElementById('catalogo');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function initSearchEvents() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    input.addEventListener('input', handleSearchInput);
    input.addEventListener('focus', handleSearchInput);
    document.addEventListener('click', (e) => {
        const dd = document.getElementById('searchResultsDropdown');
        if (dd && !e.target.closest('.header-search')) {
            dd.classList.remove('show');
        }
    });
    document.getElementById('clearSearchBtn').addEventListener('click', () => {
        input.value = '';
        input.focus();
        handleSearchInput();
    });
}
/* ---------- PRODUCT QUICK VIEW MODAL ---------- */
let modalQty = 1;
let modalProductId = null;

function openProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;
    modalProductId = product.id;
    modalQty = 1;
    const content = document.getElementById('productModalContent');
    const oldPriceHtml = product.oldPrice ? '<span class="pmv-old">' + formatPrice(product.oldPrice) + '</span>' : '';
    content.innerHTML =
        '<div class="pmv-image"><img src="' + product.img + '" alt="' + product.name + '"></div>'
        + '<div class="pmv-info">'
        +   '<span class="pmv-cat">' + product.category + '</span>'
        +   '<h2 class="pmv-name">' + product.name + '</h2>'
        +   '<div class="pmv-rating">' + starRow(product.rating) + '<span>' + product.rating + ' (' + product.reviews + ' reseñas)</span></div>'
        +   '<div class="pmv-price-row"><span class="pmv-price">' + formatPrice(product.price) + '</span>' + oldPriceHtml + '</div>'
        +   '<p class="pmv-desc">' + product.desc + '</p>'
        +   '<div class="pmv-features">' + product.features.map(f => '<span><i class="fa-solid fa-circle-check"></i> ' + f + '</span>').join('') + '</div>'
        +   '<span class="pmv-stock"><span class="pulse-dot"></span> Disponible en stock - Despacho 24-72 hrs</span>'
        +   '<div class="pmv-actions">'
        +     '<div class="qty-selector">'
        +       '<button onclick="changeModalQty(-1)">-</button>'
        +       '<span class="q-val" id="modalQtyVal">1</span>'
        +       '<button onclick="changeModalQty(1)">+</button>'
        +     '</div>'
        +     '<button class="btn btn-primary pmv-add-btn" onclick="addFromModal()"><i class="fa-solid fa-cart-plus"></i> Añadir al Carro</button>'
        +   '</div>'
        + '</div>';
    document.getElementById('productModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function changeModalQty(delta) {
    modalQty = Math.max(1, Math.min(99, modalQty + delta));
    const val = document.getElementById('modalQtyVal');
    if (val) val.textContent = modalQty;
}

function addFromModal() {
    if (!modalProductId) return;
    addToCart(modalProductId, modalQty);
    closeProductModal();
}

/* ---------- CART DRAWER RENDERING ---------- */
function renderCart() {
    const body = document.getElementById('cartBody');
    const countBadge = document.getElementById('cartCount');
    const headerTotal = document.getElementById('cartHeaderTotal');
    const subtotalEl = document.getElementById('cartSubtotal');
    const count = getCartCount();
    const subtotal = getCartSubtotal();
    if (countBadge) countBadge.textContent = count;
    if (headerTotal) headerTotal.textContent = formatPrice(subtotal);
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

    if (!body) return;
    if (cart.length === 0) {
        body.innerHTML = '<div class="cart-empty-state"><i class="fa-solid fa-bag-shopping"></i><p>Tu carro está vacío</p><p style="font-size:13px; margin-top:6px;">Añade productos de nuestro catálogo premium.</p></div>';
        return;
    }
    body.innerHTML = cart.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        return '<div class="cart-item">'
            + '<img src="' + p.img + '" alt="' + p.name + '">'
            + '<div class="ci-info">'
            +   '<span class="ci-name">' + p.name + '</span>'
            +   '<span class="ci-cat">' + p.category + '</span>'
            +   '<span class="ci-price">' + formatPrice(p.price * item.qty) + '</span>'
            +   '<div class="ci-bottom">'
            +     '<div class="qty-control">'
            +       '<button onclick="decreaseCartItem(' + p.id + ')"><i class="fa-solid fa-minus"></i></button>'
            +       '<span class="qty-val">' + item.qty + '</span>'
            +       '<button onclick="addToCart(' + p.id + ', 1)"><i class="fa-solid fa-plus"></i></button>'
            +     '</div>'
            +     '<button class="ci-remove" onclick="removeFromCart(' + p.id + ')" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>'
            +   '</div>'
            + '</div>'
            + '</div>';
    }).join('');
}

function openCartDrawer() {
    document.getElementById('cartDrawer').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCart();
}
function closeCartDrawer() {
    document.getElementById('cartDrawer').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}
/* ---------- CHECKOUT MODAL ---------- */
const SHIPPING_COST = 3990;

function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('Tu carro está vacío. Añade productos antes de pagar.', 'error', 'fa-triangle-exclamation');
        openCartDrawer();
        return;
    }
    renderCheckoutSummary();
    document.getElementById('checkoutModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    document.getElementById('checkoutModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function renderCheckoutSummary() {
    const listEl = document.getElementById('checkoutItemsList');
    const subtotal = getCartSubtotal();
    const discount = 0;
    const total = subtotal + SHIPPING_COST - discount;
    listEl.innerHTML = cart.map(item => {
        const p = getProductById(item.id);
        return '<div class="summary-item">'
            + '<img src="' + p.img + '" alt="">'
            + '<span class="si-name">' + p.name + '</span>'
            + '<span class="si-qty">x' + item.qty + '</span>'
            + '<span class="si-price">' + formatPrice(p.price * item.qty) + '</span>'
            + '</div>';
    }).join('');
    document.getElementById('ckSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('ckShipping').textContent = formatPrice(SHIPPING_COST);
    document.getElementById('ckTotal').textContent = formatPrice(total);
}

function processCheckout(event) {
    event.preventDefault();
    if (cart.length === 0) {
        showToast('No hay productos en tu carro.', 'error', 'fa-triangle-exclamation');
        closeCheckoutModal();
        return;
    }
    const name = document.getElementById('ckName').value.trim();
    const phone = document.getElementById('ckPhone').value.trim();
    const payment = document.querySelector('input[name="paymentMethod"]:checked').value;
    const total = formatPrice(getCartSubtotal() + SHIPPING_COST);

    const orderLines = cart.map(item => {
        const p = getProductById(item.id);
        return '- ' + p.name + ' x' + item.qty + ' (' + formatPrice(p.price * item.qty) + ')';
    }).join('%0A');

    const message = 'Hola Cherry Chile! Soy ' + encodeURIComponent(name)
        + ', deseo confirmar mi pedido:%0A%0A'
        + orderLines + '%0A%0A'
        + 'TOTAL: ' + encodeURIComponent(total) + ' CLP%0A'
        + 'Medio de pago: ' + encodeURIComponent(payment) + '%0A'
        + 'Teléfono: ' + encodeURIComponent(phone) + '%0A%0A'
        + '¿Pueden confirmarme el despacho? Gracias!';

    if (payment === 'Pedido WhatsApp') {
        window.open('https://wa.me/56998185589?text=' + message, '_blank');
    } else {
        window.open('https://wa.me/56998185589?text=' + message, '_blank');
        showToast('Orden ' + (Math.floor(Math.random() * 90000) + 10000) + ' - "Pago"' + payment + ' simulado con éxito. Te contactaremos por WhatsApp.', 'success', 'fa-shield-check');
    }

    cart = [];
    saveCart();
    renderCart();
    renderProducts();
    closeCheckoutModal();
}
/* ============================================================
   SHIPPING CALCULATOR
   ============================================================ */
const SHIPPING_DATA = {
    rm:       { time: '24 a 48 hrs hábiles', courier: 'Starken / Chilexpress Express', price: 2990 },
    valpo:    { time: '48 a 72 hrs hábiles', courier: 'Starken / Chilexpress', price: 4490 },
    biobio:   { time: '2 a 3 días hábiles',  courier: 'Chilexpress / Chevalier', price: 4990 },
    coquimbo: { time: '3 a 4 días hábiles',  courier: 'Starken / Chilexpress', price: 5490 },
    araucania:{ time: '3 a 4 días hábiles',  courier: 'Chilexpress / Blue Express', price: 5990 },
    antofagasta: { time: '4 a 5 días hábiles', courier: 'Starken / Blue Express', price: 6490 },
    loslagos: { time: '4 a 5 días hábiles',  courier: 'Chilexpress / Chevalier', price: 6490 },
    otra:     { time: '4 a 6 días hábiles',  courier: 'Starken a sucursal', price: 6990 }
};

function calculateShipping(event) {
    event.preventDefault();
    const region = document.getElementById('regionSelect').value;
    const resultBox = document.getElementById('shippingResult');
    if (!region) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = '<div class="srb-title" style="color:var(--danger);"><i class="fa-solid fa-triangle-exclamation"></i> Selecciona una región</div>';
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }
    const data = SHIPPING_DATA[region];
    resultBox.style.display = 'block';
    resultBox.innerHTML =
        '<div class="srb-title"><i class="fa-solid fa-circle-check"></i> Despacho disponible a tu región</div>'
        + '<div class="srb-row"><span>Transporte sugerido</span><strong>' + data.courier + '</strong></div>'
        + '<div class="srb-row"><span>Tiempo estimado</span><strong>' + data.time + '</strong></div>'
        + '<div class="srb-row"><span>Costo de envío</span><strong>' + formatPrice(data.price) + '</strong></div>'
        + '<div class="srb-total">Envío gratis por compras sobre $120.000</div>';
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ============================================================
   NEWSLETTER & CONTACT FORMS
   ============================================================ */
function handleNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('nlEmail').value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Ingresa un correo válido, por favor.', 'error', 'fa-triangle-exclamation');
        return;
    }
    document.getElementById('nlEmail').value = '';
    showToast('¡Felicidades! Te has inscrito a ofertas especiales de Cherry Chile. 🍒', 'success', 'fa-paper-plane');
}

function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const message = document.getElementById('cMessage').value.trim();
    if (!name || !email || !message) {
        showToast('Completa todos los campos obligatorios.', 'error', 'fa-triangle-exclamation');
        return;
    }
    document.getElementById('contactForm').reset();
    showToast('¡Mensaje enviado! Nuestro equipo te responderá en breve. 📩', 'success', 'fa-envelope-circle-check');
}
/* ============================================================
   MOBILE MENU
   ============================================================ */
function openMobileMenu() {
    document.getElementById('mobileDrawer').classList.add('active');
    document.getElementById('mobileOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
    document.getElementById('mobileDrawer').classList.remove('active');
    document.getElementById('mobileOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================================
   HEADER SCROLL EFFECT
   ============================================================ */
function handleHeaderScroll() {
    const header = document.getElementById('mainHeader');
    if (header) header.classList.toggle('scrolled', window.scrollY > 40);
}

/* ============================================================
   HERO SLIDER (auto-rotate + navegación premium)
   ============================================================ */
let currentSlide = 0;
let sliderPaused = false;

function qsSlides() { return document.querySelectorAll('.hero-slider .slide'); }
function qsDots() { return document.querySelectorAll('.hero-dot'); }

function goToSlide(index) {
    const slides = qsSlides();
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
    qsDots().forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}
function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function initHeroSlider() {
    const slider = document.querySelector('.hero-slider');
    const slides = qsSlides();
    if (!slider || slides.length <= 1) {
        document.querySelectorAll('.hero-dots, .hero-nav-btn').forEach(el => el.style.display = 'none');
        return;
    }
    // Paginación dinámica
    const dotsContainer = document.querySelector('.hero-dots');
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'hero-dot';
        d.setAttribute('aria-label', 'Ir a diapositiva ' + (i + 1));
        d.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(d);
    });
    goToSlide(0);
    const prevBtn = document.querySelector('.hero-nav-btn.prev');
    const nextBtn = document.querySelector('.hero-nav-btn.next');
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    slider.addEventListener('mouseenter', () => { sliderPaused = true; });
    slider.addEventListener('mouseleave', () => { sliderPaused = false; });
    setInterval(() => { if (!sliderPaused) nextSlide(); }, 5500);
}



/* ============================================================
   EVENT BINDINGS
   ============================================================ */
function initEvents() {
            // Mobile drawer
    const openBtn = document.getElementById('mobileToggleBtn');
    if (openBtn) openBtn.addEventListener('click', openMobileMenu);
    const closeBtn = document.getElementById('closeDrawerBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
    const mobileSearch = document.getElementById('mobileSearchInput');
    if (mobileSearch) {
        mobileSearch.addEventListener('input', handleMobileSearch);
        mobileSearch.addEventListener('keydown', mobileSearchKey);
    }
    const overlay = document.getElementById('mobileOverlay');
    if (overlay) overlay.addEventListener('click', closeMobileMenu);

    // Cart drawer
    const cartTrigger = document.getElementById('cartTriggerBtn');
    if (cartTrigger) cartTrigger.addEventListener('click', openCartDrawer);
    const closeCartBtn = document.getElementById('closeCartBtn');
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
    const cartOverlayEl = document.getElementById('cartOverlay');
    if (cartOverlayEl) cartOverlayEl.addEventListener('click', closeCartDrawer);

    // Wishlist button (header) - shows count tooltip
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (wishlistBtn) wishlistBtn.addEventListener('click', () => {
        showToast(wishlist.length > 0
            ? 'Tienes ' + wishlist.length + ' producto(s) en tu lista de deseos.'
            : 'Tu lista de deseos está vacía. Marca productos con el corazón.', 'success', 'fa-heart');
        const firstWish = wishlist[0];
        if (firstWish) {
            openProductModal(firstWish);
        }
    });

    // Filter pills
    const pills = document.querySelectorAll('.pill-btn');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const cat = pill.dataset.category;
            currentCategory = cat;
            searchQuery = '';
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
            document.getElementById('clearSearchBtn').style.display = 'none';
            pills.forEach(p => p.classList.toggle('active', p === pill));
            renderProducts();
        });
    });

    // Click on the product name opens the premium product modal
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.addEventListener('click', (e) => {
            const nameEl = e.target.closest('.pc-name');
            if (!nameEl) return;
            const card = nameEl.closest('.product-card');
            if (card && card.dataset.id) {
                openProductModal(Number(card.dataset.id));
            }
        });
    }

    // Modal close on overlay click
    document.getElementById('productModalOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeProductModal();
    });
    document.getElementById('checkoutModalOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeCheckoutModal();
    });

    // Escape key closes modals & drawers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
            closeCheckoutModal();
            closeCartDrawer();
            closeMobileMenu();
        }
    });

    // Scroll
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initHeroSlider();
    initSearchEvents();
    initEvents();
    renderProducts();
    renderCart();
    updateWishlistUI();
});