import { article } from "./api/article.js";
import { productData } from "./api/product.js";

// 1. ฟังก์ชันโหลด Component แบบ Async
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

// 2. จุดเริ่มต้นการทำงานหลัก (Main Execution)
document.addEventListener("DOMContentLoaded", async () => {
  // โหลด Component Navbar และ Footer ให้เสร็จก่อน
  await Promise.all([
    loadComponent("navbar-container", "navbar.html"),
    loadComponent("footer-container", "footer.html")
  ]);

  // ระบบค้นหาบน Navbar
  setupSearchSystem();

  // ผูก Event ปุ่มเลือกหมวดหมู่ (ทำหลังจาก Navbar โหลดเสร็จแล้ว)
  setupCategoryButtons();

  // อ่าน Query Parameter จาก URL
  const urlParams = new URLSearchParams(window.location.search);

  // เรียกทำงานตามแต่ละหน้าอัตโนมัติ
  handleIndexPage();
  handleArticlePage(urlParams);
  handleProductPage(urlParams);
});

// ==========================================
// ฟังก์ชันจัดการ Render หน้าต่างๆ
// ==========================================

// หน้าแรก (index.html)
function handleIndexPage() {
  const articleGrid = document.getElementById("article-grid");
  if (articleGrid) {
    renderArticles(article);
  }
}

// หน้าบทความ (article.html)
function handleArticlePage(urlParams) {
  const articleTitleEl = document.getElementById('article-title');
  if (!articleTitleEl) return;

  const articleId = urlParams.get('id');
  const currentArticle = article.find(item => item.id === Number(articleId));

  if (currentArticle) {
    articleTitleEl.textContent = currentArticle.title;
    document.getElementById('article-category').textContent = currentArticle.category;
    document.getElementById('article-author').textContent = `โดย ${currentArticle.author.name}`;
    document.getElementById('article-date').textContent = currentArticle.publishedAt;
    
    const imgEl = document.getElementById('article-image');
    if (imgEl) {
      imgEl.src = currentArticle.image;
      imgEl.alt = currentArticle.title;
    }

    document.getElementById('article-content').innerHTML = `
      <p class="font-medium text-xl text-gray-900">${currentArticle.excerpt}</p>
      <p>เนื้อหาบทความแบบเต็มของคุณจะถูกนำมาแสดงในส่วนนี้...</p>
    `;
  } else {
    document.querySelector('main').innerHTML = `
      <div class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-800">ไม่พบบทความที่คุณต้องการ</h2>
        <a href="./index.html" class="mt-4 inline-block text-pink-500 underline">กลับหน้าหลัก</a>
      </div>
    `;
  }
}

// หน้าสินค้า (Product_Page.html)
function handleProductPage(urlParams) {
  const productContainer = document.getElementById('product-container');
  if (!productContainer) return;

  const searchQuery = urlParams.get('search');
  const categoryQuery = urlParams.get('category') || 'all';

  if (searchQuery) {
    const keyword = searchQuery.toLowerCase();
    const searchResults = productData.filter(product => 
      product.name.toLowerCase().includes(keyword)
    );

    if (searchResults.length > 0) {
      renderProducts(searchResults);
    } else {
      productContainer.innerHTML = `
        <div class="col-span-full text-center py-12">
          <p class="text-gray-500 text-lg">ไม่พบสินค้าที่ตรงกับคำว่า "${searchQuery}"</p>
        </div>
      `;
    }
  } else {
    filterAndRender(categoryQuery);
    updateActiveButton(categoryQuery);
  }
}

// ==========================================
// ฟังก์ชัน Render UI และ Helper Functions
// ==========================================

function renderProducts(data) {
  const productContainer = document.getElementById('product-container');
  if (!productContainer) return;

  // ✅ แก้ไข: แสดงผลใส่ใน productContainer แทน productData
  productContainer.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      ${data.map(product => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100">
          
          <div class="relative overflow-hidden aspect-[3/4] bg-gray-100">
            <img
              src="./assets/${product.img}"
              alt="${product.name}"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-3 left-3 bg-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
              มาใหม่ (NEW)
            </span>
          </div>

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
            </div>

            <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span class="text-xs text-gray-400 line-through">฿590</span>
                <div class="text-lg font-bold text-accent">฿${product.price}</div>
              </div>
              <button class="bg-primary hover:bg-secondary text-white px-3 py-2 rounded-xl transition-colors shadow-sm flex items-center gap-1.5 text-xs font-medium">
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
  const articleGrid = document.getElementById("article-grid");
  if (!articleGrid) return;

  articleGrid.innerHTML = data.map(article => `
    <article class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      <div class="relative overflow-hidden h-52">
        <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        <span class="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
          ${article.category}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span>${article.publishedAt}</span> • <span>อ่าน ${article.readTime}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2 mb-3">
            <a href="article.html?id=${article.id}">${article.title}</a>
          </h3>
          <p class="text-gray-600 text-sm line-clamp-3 mb-4">${article.excerpt}</p>
        </div>
        <div class="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
          <img src="${article.author.avatar}" class="w-8 h-8 rounded-full object-cover" />
          <span class="text-xs font-medium text-gray-700">${article.author.name}</span>
        </div>
      </div>
    </article>
  `).join("");
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

function setupCategoryButtons() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCategory = btn.getAttribute('data-category');
      filterAndRender(selectedCategory);
      updateActiveButton(selectedCategory);
    });
  });
}

function updateActiveButton(selectedCategory) {
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    const category = btn.getAttribute('data-category');
    if (category === selectedCategory) {
      btn.className = "category-btn bg-white text-primary font-bold px-4 py-2 rounded-full text-xs sm:text-sm transition shadow-md whitespace-nowrap";
    } else {
      btn.className = "category-btn bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 rounded-full text-xs sm:text-sm transition backdrop-blur-sm whitespace-nowrap border border-white/20";
    }
  });
}

function setupSearchSystem() {
  const searchBtn = document.getElementById('search-button');
  const searchModal = document.getElementById('search-modal');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  if (!searchBtn || !searchModal) return;

  searchBtn.addEventListener('click', () => {
    searchModal.classList.remove('hidden');
    searchModal.classList.add('flex');
    searchInput.focus();
  });

  closeSearchBtn.addEventListener('click', () => {
    searchModal.classList.add('hidden');
    searchModal.classList.remove('flex');
  });

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.add('hidden');
      searchModal.classList.remove('flex');
    }
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword = searchInput.value.trim();
    if (!keyword) return;
    window.location.href = `./Product_Page.html?search=${encodeURIComponent(keyword)}`;
  });
}