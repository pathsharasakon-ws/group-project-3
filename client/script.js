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
