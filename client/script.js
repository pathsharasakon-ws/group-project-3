import { article } from "./api/article.js";
import { productData } from "./api/product.js";
// ฟังก์ชันสำหรับโหลดไฟล์ HTML เข้ามาแทรกใน id ที่ระบุ
// 1. ปรับ loadComponent ให้ส่งคืน Promise เพื่อให้รอการโหลดเสร็จได้
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Could not load ${filePath}`);
    const html = await response.text();
    
    const targetEl = document.getElementById(elementId);
    if (targetEl) targetEl.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  // โหลด Component Navbar และ Footer
  await Promise.all([
    loadComponent("navbar-container", "navbar.html"),
    loadComponent("footer-container", "footer.html")
  ]);

  // เปิดใช้งานระบบ Search บน Navbar
  setupSearchSystem();

  // ดึง Container แสดงสินค้า
  const productContainer = document.getElementById('product-container');
  
  // Guard Clause: ถ้าไม่ใช่หน้าสินค้า (เช่น หน้า index.html) ให้จบการทำงานตรงนี้
  if (!productContainer) return;


  // อ่านค่าจาก URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  const categoryQuery = urlParams.get('category') || 'all';

  // ตรวจสอบว่าเป็นการ "ค้นหา" หรือ "เลือกหมวดหมู่"
  if (searchQuery) {
    // --- กรณีค้นหาด้วย Keyword ---
    const keyword = searchQuery.toLowerCase();
    
    // กรองเฉพาะสินค้าที่ชื่อตรงกับคำค้นหา
    const searchResults = productData.filter(product => 
      product.name.toLowerCase().includes(keyword)
    );

    if (searchResults.length > 0) {
      renderProducts(searchResults);
    } else {
      // กรณีไม่พบสินค้า
      productContainer.innerHTML = `
        <div class="col-span-full text-center py-12">
          <p class="text-gray-500 text-lg">ไม่พบสินค้าที่ตรงกับคำว่า "${searchQuery}"</p>
        </div>
      `;
    }
  } else {
    // --- กรณีเข้าหน้าสินค้าปกติ / เลือกหมวดหมู่ ---
    filterAndRender(categoryQuery);
    updateActiveButton(categoryQuery);
  }
});

// ฟังก์ชันเปลี่ยนสีปุ่ม active (Optional)
function highlightActiveButton(category) {
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('bg-white', 'text-primary');
      btn.classList.remove('bg-white/20', 'text-white');
    }
  });
}

function filterAndRender(category) {
  if (category === 'all') {
    renderProducts(productData);
  } else {
    const filtered = productData.filter(
      item => item.category.toLowerCase() === category.toLowerCase()
    );
    renderProducts(filtered);
  }
}

const articleGrid = document.getElementById("article-grid");

  if(document.URL === 'http://127.0.0.1:5500/client/index.html'){
    renderArticles(article)
  }



const products = document.getElementById("product-container");
const categoryBTns = document.querySelectorAll('.category-btn');

categoryBTns.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedCategory = btn.getAttribute('data-category');

    if(selectedCategory === 'all'){
      renderProducts(productData)
      
    }else{
      const filtered = productData.filter(item => item.category === selectedCategory);
      renderProducts(filtered)
     
    }
    
  })
    renderProducts(productData)
    
});



function renderProducts(data) {
  // ย้าย grid wrapper มาคลุมข้างนอก .map()
  products.innerHTML = `
    <div class="grid grid-cols-3 gap-4">
      ${data.map(product => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100">
          
          <!-- รูปภาพและป้ายสถานะ -->
          <div class="relative overflow-hidden aspect-[3/4] bg-gray-100">
            <img
              src="./assets/${product.img}"
              alt="${product.name}"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-3 left-3 bg-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
              มาใหม่ (NEW)
            </span>
            <button
              class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-accent transition shadow-sm"
              title="บันทึกในรายการโปรด (Wishlist)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>

          <!-- คำบรรยายและรายละเอียดสินค้า -->
          <div class="p-4 flex flex-col flex-grow justify-between">
            <div>
              <span class="text-xs font-semibold text-secondary uppercase tracking-wider">
                หมวดหมู่: ${product.category}
              </span>
              <h3 class="font-bold text-gray-900 text-base mt-1 line-clamp-1 group-hover:text-primary transition-colors">
                ${product.name}
              </h3>
              <p class="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                ${product.description || 'เนื้อผ้าคุณภาพดี สวมใส่สบาย'}
              </p>
              <div class="flex items-center gap-1 mt-2 text-yellow-400 text-xs">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                <span class="text-gray-400 text-[11px] ml-1">(4.9 • รีวิว 38 คน)</span>
              </div>
            </div>

            <!-- ราคาและปุ่มสั่งซื้อ -->
            <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span class="text-xs text-gray-400 line-through">฿590</span>
                <div class="text-lg font-bold text-accent">฿${product.price}</div>
              </div>
              <button
                class="bg-primary hover:bg-secondary text-white px-3 py-2 rounded-xl transition-colors shadow-sm flex items-center gap-1.5 text-xs font-medium"
                title="เพิ่มลงตะกร้า"
              >
                <img src="./assets/icon/cartBag.png" alt="Cart" class="w-4 h-4 invert brightness-0" />
                <span>เพิ่มลงตะกร้า</span>
              </button>
            </div>
          </div>

        </div>
      `).join('')}
    </div>
  `;
}


function renderArticles(data) {
  articleGrid.innerHTML = data.map(article => `
    <article class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      <!-- รูปภาพและ Badge หมวดหมู่ -->
      <div class="relative overflow-hidden h-52">
        <img 
          src="${article.image}" 
          alt="${article.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span class="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
          ${article.category}
        </span>
      </div>

      <!-- เนื้อหาบทความ -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span>${article.publishedAt}</span>
            <span>•</span>
            <span>อ่าน ${article.readTime}</span>
          </div>

          <h3 class="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2 mb-3">
            <a href="${article.link}">${article.title}</a>
          </h3>

          <p class="text-gray-600 text-sm line-clamp-3 mb-4">
            ${article.excerpt}
          </p>
        </div>

        <!-- ผู้เขียน -->
        <div class="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
          <img src="${article.author.avatar}" class="w-8 h-8 rounded-full object-cover" />
          <span class="text-xs font-medium text-gray-700">${article.author.name}</span>
        </div>
      </div>

    </article>
  `).join("");
}

function updateActiveButton(selectedCategory) {
  const categoryBtns = document.querySelectorAll('.category-btn');

  categoryBtns.forEach(btn => {
    const category = btn.getAttribute('data-category');

    if (category === selectedCategory) {
      // 🌟 ปุ่มที่ตรงกับหมวดหมู่ที่เลือก -> ใส่ไฮไลท์สีขาว
      btn.className = "category-btn bg-white text-primary font-bold px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-gray-100 transition shadow-md whitespace-nowrap";
    } else {
      // ⚪ ปุ่มอื่น ๆ -> เปลี่ยนเป็นสีโปร่งแสง
      btn.className = "category-btn bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 rounded-full text-xs sm:text-sm transition backdrop-blur-sm whitespace-nowrap border border-white/20";
    }
  });
}


// ฟังก์ชันจัดการระบบค้นหา
function setupSearchSystem() {
  const searchBtn = document.getElementById('search-button');
  const searchModal = document.getElementById('search-modal');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  if (!searchBtn || !searchModal) return;

  // เปิด Modal
  searchBtn.addEventListener('click', () => {
    searchModal.classList.remove('hidden');
    searchModal.classList.add('flex');
    searchInput.focus();
  });

  // ปิด Modal (ปุ่ม ✕)
  closeSearchBtn.addEventListener('click', () => {
    searchModal.classList.add('hidden');
    searchModal.classList.remove('flex');
  });

  // ปิด Modal เมื่อคลิกพื้นหลัง
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.add('hidden');
      searchModal.classList.remove('flex');
    }
  });

  // เมื่อกด Submit -> มีหน้าที่ "พาไปหน้า Product พร้อมคำค้นหา" เท่านั้น
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword = searchInput.value.trim();
    
    if (!keyword) return;

    // ย้ายหน้าไป Product_Page.html พร้อมแปะ query string ?search=...
    window.location.href = `./Product_Page.html?search=${encodeURIComponent(keyword)}`;
  });
}

// ==========================================
// 2. การทำงานหลักเมื่อโหลดหน้าเว็บ (Main Logic)
// ==========================================
