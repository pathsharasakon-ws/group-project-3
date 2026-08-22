const looks = [
    { 
        id: "LK001", 
        name: "Look A - Casual Striped Layer", 
        category: "White T-Shirt & Striped Shirt + Jeans", 
        timestamp: 1718500000, 
        image: "../client/lookbook/assets/look1.png", 
        priceText: "1,290.00 บาท", 
        priceValue: 1290 
    },
    { 
        id: "LK002", 
        name: "Look B - Urban Street Cargo", 
        category: "White T-Shirt & Cargo Pants", 
        timestamp: 1718600000, 
        image: "../client/lookbook/assets/look2.png", 
        priceText: "1,450.00 บาท", 
        priceValue: 1450 
    },
    { 
        id: "LK003", 
        name: "Look C - Cozy Cafe Midi", 
        category: "White T-Shirt & Tied Shirt + Skirt", 
        timestamp: 1718700000, 
        image: "../client/lookbook/assets/look3.png", 
        priceText: "990.00 บาท", 
        priceValue: 990 
    },
    { 
        id: "LK004", 
        name: "Look D - Skater Denim Vibe", 
        category: "White T-Shirt & Flannel + Ripped Jeans", 
        timestamp: 1718400000, 
        image: "../client/lookbook/assets/look4.png", 
        priceText: "1,150.00 บาท", 
        priceValue: 1150 
    },
    { 
        id: "LK005", 
        name: "Look E - Relaxed Park Bench", 
        category: "White T-Shirt & Wide-Leg Trousers", 
        timestamp: 1718800000, 
        image: "../client/lookbook/assets/look5.png", 
        priceText: "1,390.00 บาท", 
        priceValue: 1390 
    },
    { 
        id: "LK006", 
        name: "Look F - Record Store Chill", 
        category: "White T-Shirt & Chino Shorts", 
        timestamp: 1718300000, 
        image: "../client/lookbook/assets/look6.png", 
        priceText: "1,090.00 บาท", 
        priceValue: 1090 
    },
    { 
        id: "LK007", 
        name: "Look G - Market Tote Walker", 
        category: "White T-Shirt & Slim Black Trousers", 
        timestamp: 1718900000, 
        image: "../client/lookbook/assets/look7.png", 
        priceText: "1,250.00 บาท", 
        priceValue: 1250 
    },
    { 
        id: "LK008", 
        name: "Look H - Rooftop Bomber Jacket", 
        category: "White T-Shirt & Bomber + Dark Denim", 
        timestamp: 1718200000, 
        image: "../client/lookbook/assets/look8.png", 
        priceText: "1,590.00 บาท", 
        priceValue: 1590 
    },
    { 
        id: "LK009", 
        name: "Look I - Morning Bicycle Ride", 
        category: "White T-Shirt & Navy Joggers", 
        timestamp: 1718950000, 
        image: "../client/lookbook/assets/look9.png", 
        priceText: "1,190.00 บาท", 
        priceValue: 1190 
    },
    { 
        id: "LK010", 
        name: "Look J - Weekend Greenery", 
        category: "White T-Shirt & Coach Jacket + Distressed Denim", 
        timestamp: 1719000000, 
        image: "../client/lookbook/assets/look10.png", 
        priceText: "1,490.00 บาท", 
        priceValue: 1490 
    }
];

let favorites = new Set();
const gridContainer = document.getElementById('lookbookGrid');
const mainFilterEl = document.getElementById('mainFilter');
const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
const itemsPerMobilePage = 5;
let currentPage = 1;

function renderLooks(data) {
    if (!gridContainer) return;
    gridContainer.innerHTML = '';
    data.forEach(item => {
        const isFav = favorites.has(item.id);
        const card = document.createElement('article');
        card.className = "bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200 flex flex-col justify-between relative group";
        
        card.innerHTML = `
            <div>
                <!-- รูปภาพแนวตั้งเต็มตัว โล่งสะอาดตา ไม่มีป้ายสถานะบนรูป -->
                <div class="h-[480px] w-full overflow-hidden bg-gray-50 relative">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300">

                    <!-- ปุ่ม Like (รูปหัวใจ) -->
                    <button onclick="toggleFavorite('${item.id}')" class="absolute top-3 right-3 bg-white/85 backdrop-blur-sm p-2.5 rounded-full shadow hover:bg-white transition">
                        <svg class="w-5 h-5 ${isFav ? 'text-accent fill-accent' : 'text-gray-600'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-4">
                    <div class="flex items-center justify-between text-xs mb-1">
                        <span class="font-semibold text-accent">${item.id}</span>
                    </div>
                    <h2 class="font-bold text-gray-900 text-lg mt-1">${item.name}</h2>
                    <p class="text-sm text-gray-600 mt-1">${item.category}</p>
                    <p class="text-lg font-bold text-primary mt-3">${item.priceText}</p>
                </div>
            </div>
            <div class="p-4 pt-0">
                <button onclick="goToDetail('${item.id}')" class="w-full bg-primary text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-secondary transition shadow">
                    Shop This Look
                </button>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

function renderPagination(totalItems) {
    const oldPagination = document.getElementById('lookbookPagination');
    if (oldPagination) oldPagination.remove();

    // บนหน้าจอ tablet/desktop ให้แสดงสินค้าทั้งหมดและไม่แสดงแถบเปลี่ยนหน้า
    if (!mobileMediaQuery.matches || totalItems <= itemsPerMobilePage || !gridContainer) {
        return;
    }

    const totalPages = Math.ceil(totalItems / itemsPerMobilePage);
    const pagination = document.createElement('nav');
    pagination.id = 'lookbookPagination';
    pagination.setAttribute('aria-label', 'เปลี่ยนหน้ารายการสินค้า');
    pagination.className = 'flex items-center justify-between gap-3 mt-6 w-full';

    pagination.innerHTML = `
        <button
            type="button"
            id="previousPageButton"
            class="flex-1 border border-primary text-primary py-3 px-4 rounded-lg font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"
            ${currentPage === 1 ? 'disabled' : ''}
        >
            ก่อนหน้า
        </button>

        <span class="shrink-0 text-sm text-gray-600" aria-live="polite">
            ${currentPage} / ${totalPages}
        </span>

        <button
            type="button"
            id="nextPageButton"
            class="flex-1 bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-secondary transition disabled:opacity-40 disabled:cursor-not-allowed"
            ${currentPage === totalPages ? 'disabled' : ''}
        >
            หน้าต่อไป
        </button>
    `;

    gridContainer.insertAdjacentElement('afterend', pagination);

    document.getElementById('previousPageButton')?.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage -= 1;
            filterAndRender();
            gridContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    document.getElementById('nextPageButton')?.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage += 1;
            filterAndRender();
            gridContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}


function toggleFavorite(id) {
    if (favorites.has(id)) {
        favorites.delete(id);
    } else {
        favorites.add(id);
    }
    
    filterAndRender();
}

function goToDetail(id) {
    window.location.href = `./lookbook/detail.html?id=${id}`;
}

function filterAndRender() {
    let sortedData = [...looks];
    const filterValue = mainFilterEl ? mainFilterEl.value : 'name_asc';

    if (filterValue === 'name_asc') {
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filterValue === 'name_desc') {
        sortedData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filterValue === 'price_low') {
        sortedData.sort((a, b) => a.priceValue - b.priceValue);
    } else if (filterValue === 'price_high') {
        sortedData.sort((a, b) => b.priceValue - a.priceValue);
    } else if (filterValue === 'latest') {
        sortedData.sort((a, b) => b.timestamp - a.timestamp);
    } else if (filterValue === 'oldest') {
        sortedData.sort((a, b) => a.timestamp - b.timestamp);
    }

    if (mobileMediaQuery.matches) {
        const totalPages = Math.max(1, Math.ceil(sortedData.length / itemsPerMobilePage));
        currentPage = Math.min(currentPage, totalPages);

        const startIndex = (currentPage - 1) * itemsPerMobilePage;
        const visibleLooks = sortedData.slice(startIndex, startIndex + itemsPerMobilePage);
        renderLooks(visibleLooks);
    } else {
        currentPage = 1;
        renderLooks(sortedData);
    }

    renderPagination(sortedData.length);
}

if (mainFilterEl) {
    mainFilterEl.addEventListener('change', () => {
        currentPage = 1;
        filterAndRender();
    });
}

// จัดรูปแบบรายการใหม่เมื่อสลับระหว่างหน้าจอมือถือกับหน้าจอขนาดใหญ่
mobileMediaQuery.addEventListener('change', () => {
    currentPage = 1;
    filterAndRender();
});

filterAndRender();

