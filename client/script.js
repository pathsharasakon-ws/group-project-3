import { article } from "./api/article.js";
import { productData } from "./api/product.js";

// ==========================================
// 1. ฟังก์ชันโหลด Component แบบ Async
// ==========================================
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Could not load ${filePath}`);
    const html = await response.text();

    const targetEl = document.getElementById(elementId);
    if (!targetEl) return;

    const temp = document.createElement('div');
    temp.innerHTML = html;

    const searchModal = temp.querySelector('#search-modal');
    if (searchModal) {
      searchModal.remove(); // ลบออกจาก temp tree ก่อน เพื่อไม่ให้ติดไปกับ innerHTML
      document.body.appendChild(searchModal);
    }

    targetEl.innerHTML = temp.innerHTML;
  } catch (error) {
    console.error(error);
  }
}

// ==========================================
// 2. Main Execution (จุดเริ่มต้นระบบ)
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent("navbar-container", "navbar.html"),
    loadComponent("footer-container", "footer.html")
  ]);

  console.log("2. โหลด Components เสร็จสิ้น เริ่มผูก Event...");
  setupSearchSystem();
  dropDownProfile();
  initMobileMenu();

  const urlParams = new URLSearchParams(window.location.search);

  handleIndexPage();
  handleArticlePage(urlParams);
  handleProductPage(urlParams);
  
  setupCategoryButtons();
});

// ==========================================
// 3. ระบบควบคุม Navbar & UI Interactivity
// ==========================================

function dropDownProfile() {
  const dropProfile = document.getElementById('profile-modal');
  const dropProfileModal = document.getElementById('dropdown-menu-btn');

  if (!dropProfile || !dropProfileModal) return;

  dropProfile.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropProfileModal.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!dropProfile.contains(e.target)) {
      dropProfileModal.classList.add('hidden');
    }
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('hamburger-btn');
  const mobileDropdown = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!menuBtn || !mobileDropdown) return;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = mobileDropdown.classList.toggle('hidden');
    if (hamburgerIcon && closeIcon) {
      hamburgerIcon.classList.toggle('hidden', !isHidden);
      closeIcon.classList.toggle('hidden', isHidden);
    }
  });

  document.addEventListener('click', (e) => {
    if (!mobileDropdown.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileDropdown.classList.add('hidden');
      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  });
}

function setupSearchSystem() {
  const searchBtn = document.getElementById('search-button');
  const searchModal = document.getElementById('search-modal');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  if (!searchBtn) {
    console.error("❌ หาปุ่ม search-button ไม่เจอ");
    return;
  }

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (searchModal) {
      searchModal.classList.remove('hidden');
      searchModal.classList.add('flex');
      if (searchInput) searchInput.focus();
    } else {
      console.error("❌ หา #search-modal ไม่เจอในหน้านี้");
    }
  });

  if (closeSearchBtn && searchModal) {
    closeSearchBtn.addEventListener('click', () => {
      searchModal.classList.add('hidden');
      searchModal.classList.remove('flex');
    });
  }

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchModal.classList.add('hidden');
        searchModal.classList.remove('flex');
      }
    });
  }

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const keyword = searchInput ? searchInput.value.trim() : '';
      if (!keyword) return;
      window.location.href = `./Product_Page.html?search=${encodeURIComponent(keyword)}`;
    });
  }
}

// ==========================================
// 4. ฟังก์ชันจัดการ Render หน้าต่างๆ
// ==========================================

function handleIndexPage() {
  const articleGrid = document.getElementById("article-grid");
  if (articleGrid) {
    renderArticles(article);
  }
}

function handleArticlePage(urlParams) {
  const articleTitleEl = document.getElementById('article-title');
  if (!articleTitleEl) return;

  const articleId = urlParams.get('id');
  const currentArticle = article.find(item => item.id === Number(articleId));

  if (currentArticle) {
    articleTitleEl.textContent = currentArticle.title;
    
    const categoryEl = document.getElementById('article-category');
    const authorEl = document.getElementById('article-author');
    const dateEl = document.getElementById('article-date');
    const imgEl = document.getElementById('article-image');

    if (categoryEl) categoryEl.textContent = currentArticle.category;
    if (authorEl) authorEl.textContent = `โดย ${currentArticle.author.name}`;
    if (dateEl) dateEl.textContent = currentArticle.publishedAt;

    if (imgEl) {
      imgEl.src = currentArticle.image;
      imgEl.alt = currentArticle.title;
    }

    const contentEl = document.getElementById('article-content');
    if (contentEl) {
      contentEl.innerHTML = `
        <p class="font-medium text-xl text-gray-900">${currentArticle.excerpt}</p>
        <p class="mt-4 text-gray-700 leading-relaxed">เนื้อหาบทความแบบเต็มของคุณจะถูกนำมาแสดงในส่วนนี้...</p>
      `;
    }
  } else {
    const mainEl = document.querySelector('main');
    if (mainEl) {
      mainEl.innerHTML = `
        <div class="text-center py-20">
          <h2 class="text-2xl font-bold text-gray-800">ไม่พบบทความที่คุณต้องการ</h2>
          <a href="./index.html" class="mt-4 inline-block text-pink-500 underline">กลับหน้าหลัก</a>
        </div>
      `;
    }
  }
}

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
    const categoryBtns = document.querySelectorAll('.category-btn');
    if (categoryBtns.length > 0) {
      updateActiveButton(categoryBtns, categoryQuery);
    }
  }
}

// ==========================================
// 5. Render Templates & Helpers
// ==========================================

function renderProducts(data) {
  const productContainer = document.getElementById('product-container');
  if (!productContainer) return;

  productContainer.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      ${data.map(product => {
        const imgSrc = product.img.startsWith('.') 
          ? product.img 
          : (product.img.startsWith('/') ? `./assets${product.img}` : `./assets/${product.img}`);
        return `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100">
          
          <div class="relative overflow-hidden aspect-[3/4] bg-gray-100">
            <img
              src="${imgSrc}"
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
                หมวดหมู่: ${product.categoryName || product.category}
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
                <span class="text-xs text-gray-400 line-through">฿${product.originalPrice || 590}</span>
                <div class="text-lg font-bold text-accent">฿${product.price}</div>
              </div>
              <button class="bg-primary hover:bg-secondary text-white px-3 py-2 rounded-xl transition-colors shadow-sm flex items-center gap-1.5 text-xs font-medium cursor-pointer">
                <span>เพิ่มลงตะกร้า</span>
              </button>
            </div>
          </div>

        </div>
      `;
      }).join('')}
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
  const productContainer = document.getElementById('product-container');
  if (!productContainer) return;

  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCategory = btn.getAttribute('data-category');
      filterAndRender(selectedCategory);
      updateActiveButton(categoryBtns, selectedCategory);
    });
  });
}

function updateActiveButton(categoryBtns, selectedCategory) {
  if (!categoryBtns || typeof categoryBtns.forEach !== 'function') return;
  categoryBtns.forEach(btn => {
    const category = btn.getAttribute('data-category');
    if (category === selectedCategory) {
      btn.className = "category-btn bg-white text-primary font-bold px-4 py-2 rounded-full text-xs sm:text-sm transition shadow-md whitespace-nowrap cursor-pointer";
    } else {
      btn.className = "category-btn bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 rounded-full text-xs sm:text-sm transition backdrop-blur-sm whitespace-nowrap border border-white/20 cursor-pointer";
    }
  });
}