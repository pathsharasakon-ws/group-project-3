// ✅ ถูกต้อง: ใช้ Backticks (เครื่องหมายที่อยู่ปุ่มเดียวกับ ~ บนคีย์บอร์ด)
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
      },
    },
  },
};
