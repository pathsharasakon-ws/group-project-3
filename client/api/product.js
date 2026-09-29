const SIZES = ["S", "M", "L"];

// Product tags (3 different tags across the sample products)
const TAGS = {
  new: { text: "NEW COLLECTION", bg: "bg-primary" },
  best: { text: "BEST SELLER", bg: "bg-accent" },
  sale: { text: "SALE", bg: "bg-secondary" },
};
const TAG_BY_INDEX = ["best", "new", "sale", "new", "best", "new", "sale", "best", "new", "sale"];
// Placeholder photos from assets/product/ - replace with real product photos later.
const IMAGE_POOL = [
  "./assets/product/style_1.jpg",
  "./assets/product/style_2.jpg",
  "./assets/product/style_3.jpg",
  "./assets/product/style_4.jpg",
  "./assets/product/style_5.jpg",
  "./assets/product/style_6.jpg",
  "./assets/product/man_style_2.jpg",
];

const catalog = [
  ["เสื้อยืดคอตตอนทรง Relaxed", "tops", 490, "เสื้อยืดคอตตอนเนื้อแน่น ทรงผ่อนคลาย ใส่ได้ทุกเพศและทุกวัน", ["Off White", "OW", "#F2EFE7"], ["Charcoal", "CH", "#282828"]],
  ["เสื้อเชิ้ตลินิน Oversized", "tops", 790, "เชิ้ตลินินผสมเนื้อเบา สำหรับใส่เดี่ยวหรือคลุมเป็นเลเยอร์", ["Sky Blue", "SB", "#B9D5EA"], ["White", "WH", "#F8F8F5"]],
  ["เสื้อโปโลผ้าถัก Compact Knit", "tops", 690, "โปโลผ้าถักเนื้อละเอียด แมตช์ได้ทั้งลุคทำงานและวันหยุด", ["Forest Green", "FG", "#243E2C"], ["Sand", "SD", "#C8B99F"]],
  ["เสื้อคลุม Utility Overshirt", "tops", 990, "โอเวอร์เชิ้ตน้ำหนักเบาทรงบ็อกซี เพิ่มเลเยอร์ให้ลุคประจำวัน", ["Muted Olive", "MO", "#66705A"], ["Navy", "NV", "#253247"]],
  ["เสื้อแขนยาวลายทาง Breton", "tops", 590, "เสื้อคอกลมแขนยาวผ้าคอตตอนนุ่ม ลายทางคลาสสิก", ["Navy Stripe", "NS", "#293A55"], ["Red Stripe", "RS", "#9F4B3D"]],
  ["กางเกงยีนส์ทรงตรง Relaxed", "bottoms", 990, "เดนิมทรงตรงผ่อนคลาย เคลื่อนไหวง่ายและเข้ากับเสื้อทุกแบบ", ["Medium Indigo", "MI", "#526D8A"], ["Washed Black", "WB", "#343536"]],
  ["กางเกง Easy Pleated ขากว้าง", "bottoms", 890, "กางเกงจีบหน้าขากว้าง ผ้าทิ้งตัวและเอวหลังยืด", ["Charcoal", "CH", "#444548"], ["Warm Taupe", "WT", "#A08E79"]],
  ["กางเกง Utility Cargo ทรง Tapered", "bottoms", 990, "คาร์โก้ทรงเทเปอร์พร้อมกระเป๋าเรียบแบน", ["Muted Olive", "MO", "#65705A"], ["Matte Black", "MB", "#222426"]],
  ["กางเกงขาสั้น Nylon Easy", "bottoms", 590, "กางเกงขาสั้นไนลอนน้ำหนักเบา แห้งไว", ["Deep Navy", "DN", "#27364B"], ["Terracotta", "TC", "#B45F45"]],
  ["กางเกง Jersey Jogger", "bottoms", 690, "จ็อกเกอร์เจอร์ซีย์เนื้อนุ่ม ทรงเรียบคม", ["Heather Gray", "HG", "#9B9B98"], ["Forest Green", "FG", "#294638"]],
];

export const productData = catalog.map(([name, category, price, description, ...colorRows], index) => {
  const itemNo = index < 5 ? index + 1 : index - 4;
  const prefix = category === "tops" ? "TOP" : "BOT";
  const sku = prefix + String(itemNo).padStart(3, "0");
  const colors = colorRows.map(([colorName, code, hex], colorIndex) => {
    const start = index * 2 + colorIndex;
    const images = [0, 1, 2].map((k) => IMAGE_POOL[(start + k) % IMAGE_POOL.length]);
    return { name: colorName, code, hex, image: images[0], images };
  });

  return {
    id: index + 1,
    sku,
    name,
    category,
    categoryName: category === "tops" ? "Unisex Tops (เสื้อ)" : "Unisex Bottoms (กางเกง)",
    price,
    originalPrice: price + 200,
    img: colors[0].image,
    images: colors.flatMap((color) => color.images),
    description,
    rating: 4.9,
    sales: 116 - index * 4,
    reviewsCount: 27 + index * 3,
    quantity: 18,
    tags: [TAGS[TAG_BY_INDEX[index]]],
    sizes: SIZES,
    colors,
    variants: colors.flatMap((color) => SIZES.map((size) => ({
      id: `${sku}-${color.code}-${size}`,
      color: color.name,
      size,
      image: color.image,
      inStock: true,
    }))),
  };
});

export const productsData = productData;
