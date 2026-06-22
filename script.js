/**
 * Sistema Web para Pizzaria - Don Alfredo
 * Funcionalidades: Loader, Tema, Carrinho, Checkout, QR Code PIX
 */

// ============================================
// BANCO DE DADOS DO CARDÁPIO (Mais opções)
// ============================================
const menuData = {
    tradicionais: [
        { id: 1, nome: "Calabresa", descricao: "Calabresa fatiada, cebola, mussarela e orégano", ingredientes: "Calabresa, cebola, mussarela, orégano", preco: 45.90, imagem: "assets/calabresa.png", categoria: "tradicional" },
        { id: 2, nome: "Mussarela", descricao: "Mussarela de qualidade, tomate e orégano", ingredientes: "Mussarela, tomate, orégano", preco: 42.90, imagem: "assets/mussarela.png", categoria: "tradicional" },
        { id: 3, nome: "Portuguesa", descricao: "Presunto, ovos, cebola, azeitona e mussarela", ingredientes: "Presunto, ovos, cebola, azeitona, mussarela", preco: 49.90, imagem: "assets/portuguesa.jpg", categoria: "tradicional" },
        { id: 4, nome: "Margherita", descricao: "Mussarela, tomate fresco, manjericão", ingredientes: "Mussarela, tomate, manjericão", preco: 48.90, imagem: "assets/margherita.jpg", categoria: "tradicional" },
        { id: 5, nome: "Napolitana", descricao: "Mussarela, tomate, parmesão, orégano", ingredientes: "Mussarela, tomate, parmesão", preco: 47.90, imagem: "assets/napolitana.jpg", categoria: "tradicional" }
    ],
    especiais: [
        { id: 6, nome: "Frango com Catupiry", descricao: "Frango desfiado, catupiry cremoso e milho", ingredientes: "Frango, catupiry, milho", preco: 52.90, imagem: "assets/frangoccatupiry.jpg", categoria: "especial" },
        { id: 7, nome: "Quatro Queijos", descricao: "Mussarela, provolone, parmesão e gorgonzola", ingredientes: "Mussarela, provolone, parmesão, gorgonzola", preco: 54.90, imagem: "assets/quatroqueijos.png", categoria: "especial" },
        { id: 8, nome: "Bacon Especial", descricao: "Bacon crocante, mussarela e cebola roxa", ingredientes: "Bacon, mussarela, cebola roxa", preco: 56.90, imagem: "assets/bacon.png", categoria: "especial" },
        { id: 9, nome: "Pepperoni", descricao: "Pepperoni, mussarela, orégano", ingredientes: "Pepperoni, mussarela", preco: 58.90, imagem: "assets/pepperoni.jpg", categoria: "especial" },
        { id: 10, nome: "Vegetariana", descricao: "Palmito, milho, ervilha, brócolis, mussarela", ingredientes: "Palmito, milho, ervilha, brócolis, mussarela", preco: 53.90, imagem: "assets/vegetariana.jpg", categoria: "especial" }
    ],
    doces: [
        { id: 11, nome: "Chocolate", descricao: "Chocolate ao leite com granulado", ingredientes: "Chocolate, granulado", preco: 49.90, imagem: "assets/chocolate.png", categoria: "doce" },
        { id: 12, nome: "Prestígio", descricao: "Chocolate com coco ralado", ingredientes: "Chocolate, coco", preco: 51.90, imagem: "assets/prestigio.png", categoria: "doce" },
        { id: 13, nome: "Romeu e Julieta", descricao: "Goiabada com queijo mussarela", ingredientes: "Goiabada, queijo", preco: 52.90, imagem: "assets/romeuejulieta.png", categoria: "doce" },
        { id: 14, nome: "Banana com Canela", descricao: "Banana fatiada, canela, açúcar", ingredientes: "Banana, canela, açúcar", preco: 49.90, imagem: "assets/banana.jpg", categoria: "doce" },
        { id: 15, nome: "Nutella com Morango", descricao: "Nutella cremosa com morangos frescos", ingredientes: "Nutella, morango", preco: 59.90, imagem: "assets/nutella.jpg", categoria: "doce" }
    ],
    bebidas: [
        { id: 16, nome: "Coca-Cola 2L", descricao: "Refrigerante Coca-Cola 2 litros", ingredientes: "", preco: 12.90, imagem: "assets/coca.jpg", categoria: "bebida" },
        { id: 17, nome: "Guaraná Antarctica 2L", descricao: "Refrigerante Guaraná 2 litros", ingredientes: "", preco: 11.90, imagem: "assets/guarana.jpg", categoria: "bebida" },
        { id: 18, nome: "Suco de Laranja 1L", descricao: "Suco natural de laranja", ingredientes: "", preco: 15.90, imagem: "assets/suco.jpg", categoria: "bebida" },
        { id: 19, nome: "Água Mineral 500ml", descricao: "Água mineral sem gás", ingredientes: "", preco: 4.90, imagem: "assets/agua.jpg", categoria: "bebida" },
        { id: 20, nome: "Cerveja Artesanal", descricao: "Cerveja artesanal 600ml", ingredientes: "", preco: 18.90, imagem: "assets/cerveja.jpg", categoria: "bebida" }
    ],
    sobremesas: [
        { id: 21, nome: "Mousse de Maracujá", descricao: "Mousse cremoso de maracujá", ingredientes: "", preco: 12.90, imagem: "assets/mousse.jpg", categoria: "sobremesa" },
        { id: 22, nome: "Brigadeiro Gourmet", descricao: "4 unidades de brigadeiro", ingredientes: "", preco: 9.90, imagem: "assets/brigadeiro.jpg", categoria: "sobremesa" },
        { id: 23, nome: "Pudim de Leite", descricao: "Pudim caseiro com calda de caramelo", ingredientes: "", preco: 14.90, imagem: "assets/pudim.jpg", categoria: "sobremesa" },
        { id: 24, nome: "Brownie com Sorvete", descricao: "Brownie de chocolate com sorvete de creme", ingredientes: "", preco: 18.90, imagem: "assets/brownie.jpg", categoria: "sobremesa" },
        { id: 25, nome: "Petit Gateau", descricao: "Bolo de chocolate com calda quente", ingredientes: "", preco: 19.90, imagem: "assets/petit.jpg", categoria: "sobremesa" }
    ]
};

// ============================================
// CARRINHO DE COMPRAS
// ============================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        if (el) el.textContent = count;
    });
}

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    showNotification(`${product.nome} adicionado ao carrinho!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartModal();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCartModal();
        }
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.preco * item.quantity), 0);
}

function renderCartModal() {
    const cartItemsDiv = document.getElementById('cart-items');
    if (!cartItemsDiv) return;
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align:center; padding:40px;">Seu carrinho está vazio 🛒</p>';
        document.getElementById('cart-total').textContent = 'R$ 0,00';
        return;
    }
    
    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.nome}</div>
                <div class="cart-item-price">R$ ${item.preco.toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('cart-total').textContent = `R$ ${getCartTotal().toFixed(2)}`;
}

// ============================================
// LOADER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');
        if (loader && mainContent) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                mainContent.style.display = 'block';
            }, 500);
        }
    }, 3000);
    
    initTheme();
    initMenu();
    initCartModal();
    initCheckoutModal();
    renderFeaturedPizzas();
    updateCartCount();
});

// ============================================
// TEMA CLARO/ESCURO
// ============================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
    }
}

// ============================================
// RENDERIZAÇÃO DO CARDÁPIO
// ============================================
function renderMenuItems(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = items.map(item => `
        <div class="menu-item" data-nome="${item.nome.toLowerCase()}">
            <div class="pizza-image">
                <img src="${item.imagem}" alt="${item.nome}" onerror="this.src='https://via.placeholder.com/300x200?text=${item.nome}'">
            </div>
            <div class="pizza-info">
                <h3>${item.nome}</h3>
                <p class="pizza-desc">${item.descricao}</p>
                ${item.ingredientes ? `<p class="pizza-desc"><small>Ingredientes: ${item.ingredientes}</small></p>` : ''}
                <div class="pizza-footer">
                    <span class="pizza-price">R$ ${item.preco.toFixed(2)}</span>
                    <button class="btn btn-buy" data-id="${item.id}" data-nome="${item.nome}" data-preco="${item.preco}" data-desc="${item.descricao}">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            const product = findProductById(id);
            if (product) addToCart(product);
        });
    });
}

function findProductById(id) {
    const allProducts = [...menuData.tradicionais, ...menuData.especiais, ...menuData.doces, ...menuData.bebidas, ...menuData.sobremesas];
    return allProducts.find(p => p.id === id);
}

function initMenu() {
    renderMenuItems('tradicionais-container', menuData.tradicionais);
    renderMenuItems('especiais-container', menuData.especiais);
    renderMenuItems('doces-container', menuData.doces);
    renderMenuItems('bebidas-container', menuData.bebidas);
    renderMenuItems('sobremesas-container', menuData.sobremesas);
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const allProducts = [...menuData.tradicionais, ...menuData.especiais, ...menuData.doces, ...menuData.bebidas, ...menuData.sobremesas];
            const filtered = allProducts.filter(p => p.nome.toLowerCase().includes(term));
            
            renderMenuItems('tradicionais-container', filtered.filter(p => p.categoria === 'tradicional'));
            renderMenuItems('especiais-container', filtered.filter(p => p.categoria === 'especial'));
            renderMenuItems('doces-container', filtered.filter(p => p.categoria === 'doce'));
            renderMenuItems('bebidas-container', filtered.filter(p => p.categoria === 'bebida'));
            renderMenuItems('sobremesas-container', filtered.filter(p => p.categoria === 'sobremesa'));
        });
    }
}

function renderFeaturedPizzas() {
    const featuredGrid = document.getElementById('featured-grid');
    if (!featuredGrid) return;
    
    const featured = menuData.especiais.slice(0, 4);
    featuredGrid.innerHTML = featured.map(pizza => `
        <div class="pizza-card">
            <div class="pizza-image">
                <img src="${pizza.imagem}" alt="${pizza.nome}" onerror="this.src='https://via.placeholder.com/300x200?text=${pizza.nome}'">
            </div>
            <div class="pizza-info">
                <h3>${pizza.nome}</h3>
                <p class="pizza-desc">${pizza.descricao}</p>
                <div class="pizza-footer">
                    <span class="pizza-price">R$ ${pizza.preco.toFixed(2)}</span>
                    <button class="btn btn-buy" data-id="${pizza.id}">Comprar</button>
                </div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('#featured-grid .btn-buy').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const product = findProductById(id);
            if (product) addToCart(product);
        });
    });
}

// ============================================
// MODAIS DO CARRINHO
// ============================================
function initCartModal() {
    const cartBtn = document.getElementById('cart-btn');
    const modal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.modal-close');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cartBtn && modal) {
        cartBtn.addEventListener('click', () => {
            renderCartModal();
            modal.classList.add('active');
        });
        
        if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
        
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                openCheckoutModal();
            });
        }
    }
}

function initCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.querySelector('.modal-close-checkout');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }
    
    const generatePixBtn = document.getElementById('generate-pix');
    if (generatePixBtn) {
        generatePixBtn.addEventListener('click', generatePixQRCode);
    }
    
    const confirmOrderBtn = document.getElementById('confirm-order');
    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', confirmOrder);
    }
    
    // Atualiza a área PIX quando muda o método de pagamento
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const pixArea = document.getElementById('pix-area');
            if (e.target.value === 'pix') {
                pixArea.style.display = 'block';
            } else {
                pixArea.style.display = 'none';
            }
        });
    });
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!', 'error');
        return;
    }
    
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutItemsDiv = document.getElementById('checkout-items-list');
    const checkoutTotalSpan = document.getElementById('checkout-total');
    
    checkoutItemsDiv.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span>${item.quantity}x ${item.nome}</span>
            <span>R$ ${(item.preco * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    checkoutTotalSpan.textContent = `R$ ${getCartTotal().toFixed(2)}`;
    
    // Limpa QR Code anterior
    const qrDiv = document.getElementById('qr-code');
    if (qrDiv) {
        qrDiv.innerHTML = '<i class="fas fa-qrcode"></i><p>Clique em "Gerar QR Code PIX"</p>';
    }
    document.getElementById('pix-copy-area').style.display = 'none';
    
    checkoutModal.classList.add('active');
}

// ============================================
// QR CODE PIX (Simulação)
// ============================================
function generatePixQRCode() {
    const total = getCartTotal();
    const pixKey = "(11) 98895-9916";
    const merchantName = "LA BELLA PIZZA";
    const merchantCity = "SAO PAULO";
    const amount = total.toFixed(2);
    
    // Payload do PIX simplificado (formato BR Code)
    const payload = `(11) 98895-9916`;
    
    // Simular QR Code (usando API externa para gerar QR)
    const qrDiv = document.getElementById('qr-code');
    qrDiv.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(payload)}" alt="QR Code PIX" style="width:200px;height:200px;">`;
    
    const pixCopyArea = document.getElementById('pix-copy-area');
    pixCopyArea.style.display = 'block';
    document.getElementById('pix-code-text').textContent = payload;
    
    const copyBtn = document.getElementById('copy-pix');
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(payload);
        showNotification('Código PIX copiado!', 'success');
    };
    
    showNotification('QR Code PIX gerado! Escaneie para pagar.', 'success');
}

// ============================================
// CONFIRMAÇÃO DO PEDIDO
// ============================================
function confirmOrder() {
    const name = document.getElementById('customer-name')?.value;
    const address = document.getElementById('customer-address')?.value;
    const phone = document.getElementById('customer-phone')?.value;
    const payment = document.querySelector('input[name="payment"]:checked')?.value;
    
    if (!name || !address || !phone) {
        showNotification('Preencha todos os dados de entrega!', 'error');
        return;
    }
    
    const order = {
        id: Date.now(),
        customer: { name, address, phone },
        items: [...cart],
        total: getCartTotal(),
        payment,
        status: 'Pedido Recebido',
        date: new Date().toLocaleString()
    };
    
    // Salvar pedido no localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Limpar carrinho
    cart = [];
    saveCart();
    
    // Fechar modal
    document.getElementById('checkout-modal').classList.remove('active');
    
    showNotification(`Pedido #${order.id} confirmado! ${payment === 'pix' ? 'Aguardando pagamento PIX.' : 'Pedido enviado para cozinha!'}`, 'success');
    
    // Limpar formulário
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-address').value = '';
    document.getElementById('customer-phone').value = '';
}

// ============================================
// NOTIFICAÇÕES
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#48bb78' : '#e53e3e'};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 10001;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Estilo para notificações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

// ============================================
// MENU MOBILE
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('active'));
}

// ============================================
// ACOMPANHAMENTO DE ENTREGAS (Página entregas.html)
// ============================================
let currentStep = 0;
const steps = ['Pedido Recebido', 'Em Preparação', 'Saiu para Entrega', 'Entregue'];

function updateDeliveryStatus() {
    const stepElements = document.querySelectorAll('.step');
    stepElements.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index < currentStep) step.classList.add('completed');
        else if (index === currentStep) step.classList.add('active');
    });
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) progressFill.style.width = `${(currentStep / 3) * 100}%`;
    const currentStatusText = document.getElementById('current-status');
    if (currentStatusText) currentStatusText.innerHTML = `Status atual: <strong>${steps[currentStep]}</strong>`;
}

const updateStatusBtn = document.getElementById('update-status');
if (updateStatusBtn) {
    updateStatusBtn.addEventListener('click', () => {
        if (currentStep < 3) {
            currentStep++;
            updateDeliveryStatus();
            const messages = ['✅ Pedido confirmado!', '🍕 Pizza no forno!', '🛵 Saiu para entrega!', '🎉 Pedido entregue!'];
            showNotification(messages[currentStep], 'success');
            if (currentStep === 3) {
                updateStatusBtn.disabled = true;
                updateStatusBtn.style.opacity = '0.5';
                updateStatusBtn.textContent = 'Pedido Finalizado';
            }
        }
    });
}

if (document.querySelector('.delivery-section')) updateDeliveryStatus();