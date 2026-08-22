// 1. ข้อมูล Looks
import { looks } from "../mockLookdata.js";
// 2. ตั้งค่าเริ่มต้น
const ALL_SIZES = ["XS", "S", "M", "L", "XL", "2XL"];
const urlParams = new URLSearchParams(window.location.search);
const lookId = urlParams.get('id');
const currentLook = looks.find(item => item.id === lookId) || looks[0];
let selectedSizes = { top: "S", bottom1: "M", bottom2: "M" };

// 3. ฟังก์ชัน Helper
function formatPrice(amount) {
    return amount.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " บาท";
}

function renderBadges(containerId, statusArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    statusArray.forEach(st => {
        const badge = document.createElement('span');
        badge.className = `text-xs font-semibold px-2.5 py-1 rounded-full ${st.class}`;
        badge.innerText = st.text;
        container.appendChild(badge);
    });
}

function generateSizeButtons(type) {
    const container = document.getElementById(`${type}SizeContainer`);
    if (!container) return;
    container.innerHTML = '';
    ALL_SIZES.forEach(size => {
        const btn = document.createElement('button');
        btn.id = `${type}-${size}`;
        btn.innerText = size;
        btn.className = "px-2.5 py-1 text-xs border rounded transition hover:border-primary hover:text-primary font-medium";
        btn.onclick = () => selectSize(type, size);
        container.appendChild(btn);
    });
}

function getActiveProductTypes() {
    const types = ['top', 'bottom1'];
    if (currentLook.bottom2Name && currentLook.itemPrices?.bottom2 > 0) types.push('bottom2');
    return types;
}

function initializeAvailableSizes() {
    getActiveProductTypes().forEach(type => {
        const unavailable = currentLook.outOfStockSizes?.[type] || [];
        const initialSize = !unavailable.includes(selectedSizes[type])
            ? selectedSizes[type]
            : ALL_SIZES.find(size => !unavailable.includes(size));
        if (initialSize) selectSize(type, initialSize);
    });
}

function createMobilePurchaseBar() {
    if (document.getElementById('mobilePurchaseBar')) return;

    const bar = document.createElement('div');
    bar.id = 'mobilePurchaseBar';
    bar.className = 'md:hidden fixed bottom-0 z-50 bg-white border-t border-gray-200 px-4 py-3';
    Object.assign(bar.style, {
        left: '0',
        right: '0',
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        boxShadow: '0 -6px 20px rgba(0, 0, 0, 0.12)',
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))'
    });

    bar.innerHTML = `
        <div class="max-w-lg mx-auto items-center gap-3" style="display:grid;grid-template-columns:minmax(0,1fr) auto;width:100%;box-sizing:border-box;">
            <div class="min-w-0">
                <p class="text-xs text-gray-500">ราคารวมทั้งเซ็ต</p>
                <p class="font-extrabold text-primary text-lg truncate">${currentLook.price}</p>
            </div>
            <button
                id="mobileAddToCartBtn"
                type="button"
                class="min-h-12 bg-accent text-white font-bold px-4 sm:px-5 py-3 rounded-xl shadow active:scale-[0.98] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                style="max-width:55vw;white-space:nowrap;"
            >เพิ่มลงตะกร้า</button>
        </div>
    `;

    document.body.appendChild(bar);
    document.body.classList.add('pb-24', 'md:pb-0');

    const button = document.getElementById('mobileAddToCartBtn');
    button.addEventListener('click', addLookToCart);
    if (currentLook.isSoldOut) {
        button.disabled = true;
        button.innerText = 'สินค้าหมด';
    }
}

function updateCartBadge() {
    const badge = document.getElementById('favCount');
    if (!badge) return;
    const cart = JSON.parse(localStorage.getItem('occasionCart') || '[]');
    badge.innerText = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
}

// 4. ทำงานหลัก
document.addEventListener("DOMContentLoaded", () => {
    if (!currentLook) return;

    // สร้างปุ่มไซส์อัตโนมัติ
    generateSizeButtons('top');
    generateSizeButtons('bottom1');
    generateSizeButtons('bottom2');

    // ข้อมูล Look
    document.getElementById('lookImage').src = currentLook.image;
    document.getElementById('lookId').innerText = currentLook.id;
    document.getElementById('lookName').innerText = currentLook.name;
    document.getElementById('lookCategory').innerText = currentLook.category;
    document.getElementById('totalPrice').innerText = currentLook.price;

    // ราคาแยกชิ้น
    if (currentLook.itemPrices) {
        document.getElementById('topPrice').innerText = formatPrice(currentLook.itemPrices.top);
        document.getElementById('bottom1Price').innerText = formatPrice(currentLook.itemPrices.bottom1);
        if (currentLook.itemPrices.bottom2 > 0) document.getElementById('bottom2Price').innerText = formatPrice(currentLook.itemPrices.bottom2);
    }

    // สินค้า
    document.getElementById('topName').innerText = currentLook.topName;
    document.getElementById('topThumb').src = currentLook.topImage;
    if (currentLook.topProductUrl) document.getElementById('topDetailLink').href = currentLook.topProductUrl;
    renderBadges('topStatusContainer', currentLook.statuses.top);

    document.getElementById('bottom1Name').innerText = currentLook.bottom1Name;
    document.getElementById('bottom1Thumb').src = currentLook.bottom1Image;
    if (currentLook.bottom1ProductUrl) document.getElementById('bottom1DetailLink').href = currentLook.bottom1ProductUrl;
    renderBadges('bottom1StatusContainer', currentLook.statuses.bottom1);

    if (currentLook.bottom2Name) {
        document.getElementById('bottom2Wrapper').classList.remove('hidden');
        document.getElementById('bottom2Name').innerText = currentLook.bottom2Name;
        document.getElementById('bottom2Thumb').src = currentLook.bottom2Image;
        if (currentLook.bottom2ProductUrl) document.getElementById('bottom2DetailLink').href = currentLook.bottom2ProductUrl;
        renderBadges('bottom2StatusContainer', currentLook.statuses.bottom2);
    }

    initializeAvailableSizes();
    createMobilePurchaseBar();
    updateCartBadge();

    // จัดการสินค้าหมด/ไซส์หมด
    if (currentLook.isSoldOut) {
        const cartBtn = document.getElementById('addToCartBtn');
        cartBtn.disabled = true;
        cartBtn.innerText = "สินค้าหมด (Sold Out)";
        cartBtn.classList.replace("bg-accent", "bg-gray-400");
    }

    if (currentLook.outOfStockSizes) {
        Object.keys(currentLook.outOfStockSizes).forEach(type => {
            currentLook.outOfStockSizes[type].forEach(size => {
                const btn = document.getElementById(`${type}-${size}`);
                if (btn) {
                    btn.classList.add('bg-gray-100', 'text-gray-300', 'line-through', 'cursor-not-allowed', 'border-gray-200');
                    btn.onclick = (e) => { e.preventDefault(); alert(`ขออภัย ไซส์ ${size} นี้หมดครับ`); };
                }
            });
        });
    }
});

function selectSize(type, size) {
    if (currentLook.outOfStockSizes[type]?.includes(size)) {
        document.getElementById(`${type}SizeAlert`)?.classList.remove('hidden');
        return;
    }
    document.getElementById(`${type}SizeAlert`)?.classList.add('hidden');
    selectedSizes[type] = size;
    const container = document.getElementById(`${type}SizeContainer`);
    Array.from(container.querySelectorAll('button')).forEach(btn => btn.classList.remove('border-primary', 'bg-primary', 'text-white'));
    document.getElementById(`${type}-${size}`)?.classList.add('border-primary', 'bg-primary', 'text-white');
}

function addLookToCart() {
    if (currentLook.isSoldOut) return;

    const activeTypes = getActiveProductTypes();
    const chosenSizes = Object.fromEntries(activeTypes.map(type => [type, selectedSizes[type]]));
    const cart = JSON.parse(localStorage.getItem('occasionCart') || '[]');
    const sameItem = cart.find(item =>
        item.lookId === currentLook.id && JSON.stringify(item.sizes) === JSON.stringify(chosenSizes)
    );

    if (sameItem) sameItem.quantity = (sameItem.quantity || 1) + 1;
    else cart.push({
        lookId: currentLook.id,
        name: currentLook.name,
        image: currentLook.image,
        price: currentLook.price,
        sizes: chosenSizes,
        quantity: 1
    });

    localStorage.setItem('occasionCart', JSON.stringify(cart));
    updateCartBadge();
    alert(`เพิ่ม "${currentLook.name}" ลงตะกร้าแล้ว!`);
}
