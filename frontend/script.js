// navber
document.addEventListener("DOMContentLoaded", function () {
  fetch("./navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("เกิดข้อผิดพลาดในการโหลด Footer:", error));
});
//footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("./footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("เกิดข้อผิดพลาดในการโหลด Footer:", error));
});
