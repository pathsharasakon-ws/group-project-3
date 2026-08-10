const articles = [
  {
    id: 1,
    title: "10 เคล็ดลับการแต่งตัวคุมโทน ให้เข้ากับสุนัขตัวโปรด",
    excerpt: "แนะนำไอเดียแต่งตัวสายแฟชั่น มิกซ์แอนด์แมตช์ลุคสุดชิคให้ดูแพงและคุมโทนไปพร้อมกับน้องหมาของคุณ...",
    category: "แฟชั่น",
    publishedAt: "8 ส.ค. 2026",
    readTime: "3 นาที",
    image: "./assets/dog1.jpg",
    link: "/article/10-tips-pet-fashion",
    author: {
      name: "Admin Husky",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
    },
    tags: ["Fashion", "PetCare", "Lifestyle"]
  },
  {
    id: 2,
    title: "วิธีรับมือเมื่อไซบีเรียน ฮัสกี เริ่มทำหน้าหงุดหงิดใส่คุณ",
    excerpt: "เจาะลึกภาษากายและอารมณ์ของน้องหมา พร้อมเทคนิคการปรับสภาพแวดล้อมให้อารมณ์ดีตลอดทั้งวัน...",
    category: "พฤติกรรมสัตว์เลี้ยง",
    publishedAt: "5 ส.ค. 2026",
    readTime: "5 นาที",
    image: "./assets/dog2.jpg",
    link: "/article/understanding-husky-mood",
    author: {
      name: "หมอโฮ่ง",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    tags: ["DogBehavior", "Husky"]
  },
  {
    id: 3,
    title: "เทรนด์เสื้อผ้าสัตว์เลี้ยงปี 2026 ที่สายสตรีทไม่ควรพลาด",
    excerpt: "รวมคอลเลกชันใหม่ล่าสุดสไตล์ Streetwear ที่จะเปลี่ยนสัตว์เลี้ยงของคุณให้กลายเป็นแฟชั่นนิสต้า...",
    category: "เทรนด์",
    publishedAt: "1 ส.ค. 2026",
    readTime: "4 นาที",
    image: "./assets/dog3.jpg",
    link: "/article/pet-streetwear-trends-2026",
    author: {
      name: "Admin Husky",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
    },
    tags: ["Streetwear", "Trends"]
  }
];
// ฟังก์ชันสำหรับโหลดไฟล์ HTML เข้ามาแทรกใน id ที่ระบุ
function loadComponent(elementId, filePath) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) throw new Error(`Could not load ${filePath}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(error));
}

// เรียกใช้งานเมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar-container", "navbar.html");
  loadComponent("footer-container", "footer.html");
});

const articleGrid = document.getElementById("article-grid");
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

// สั่งทำงาน
renderArticles(articles);