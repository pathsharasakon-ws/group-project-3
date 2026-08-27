const SIZES = ["S", "M", "L"];
const ASSET = "./assets/collection-2026/products/";
const DETAIL_ASSET = "./assets/collection-2026/product-detail/";

const catalog = [
  ["เสื้อยืดคอตตอนทรง Relaxed", "tops", 490, "เสื้อยืดคอตตอนเนื้อแน่น ทรงผ่อนคลาย ใส่ได้ทุกเพศและทุกวัน", ["top-01-off-white.png", "Off White", "OW", "#F2EFE7"], ["top-01-charcoal.png", "Charcoal", "CH", "#282828"]],
  ["เสื้อเชิ้ตลินิน Oversized", "tops", 790, "เชิ้ตลินินผสมเนื้อเบา สำหรับใส่เดี่ยวหรือคลุมเป็นเลเยอร์", ["top-02-sky-blue.png", "Sky Blue", "SB", "#B9D5EA"], ["top-02-white.png", "White", "WH", "#F8F8F5"]],
  ["เสื้อโปโลผ้าถัก Compact Knit", "tops", 690, "โปโลผ้าถักเนื้อละเอียด แมตช์ได้ทั้งลุคทำงานและวันหยุด", ["top-03-forest.png", "Forest Green", "FG", "#243E2C"], ["top-03-sand.png", "Sand", "SD", "#C8B99F"]],
  ["เสื้อคลุม Utility Overshirt", "tops", 990, "โอเวอร์เชิ้ตน้ำหนักเบาทรงบ็อกซี เพิ่มเลเยอร์ให้ลุคประจำวัน", ["top-04-olive.png", "Muted Olive", "MO", "#66705A"], ["top-04-navy.png", "Navy", "NV", "#253247"]],
  ["เสื้อแขนยาวลายทาง Breton", "tops", 590, "เสื้อคอกลมแขนยาวผ้าคอตตอนนุ่ม ลายทางคลาสสิก", ["top-05-navy-stripe.png", "Navy Stripe", "NS", "#293A55"], ["top-05-red-stripe.png", "Red Stripe", "RS", "#9F4B3D"]],
  ["กางเกงยีนส์ทรงตรง Relaxed", "bottoms", 990, "เดนิมทรงตรงผ่อนคลาย เคลื่อนไหวง่ายและเข้ากับเสื้อทุกแบบ", ["bottom-01-indigo.png", "Medium Indigo", "MI", "#526D8A"], ["bottom-01-black.png", "Washed Black", "WB", "#343536"]],
  ["กางเกง Easy Pleated ขากว้าง", "bottoms", 890, "กางเกงจีบหน้าขากว้าง ผ้าทิ้งตัวและเอวหลังยืด", ["bottom-02-charcoal.png", "Charcoal", "CH", "#444548"], ["bottom-02-taupe.png", "Warm Taupe", "WT", "#A08E79"]],
  ["กางเกง Utility Cargo ทรง Tapered", "bottoms", 990, "คาร์โก้ทรงเทเปอร์พร้อมกระเป๋าเรียบแบน", ["bottom-03-olive.png", "Muted Olive", "MO", "#65705A"], ["bottom-03-black.png", "Matte Black", "MB", "#222426"]],
  ["กางเกงขาสั้น Nylon Easy", "bottoms", 590, "กางเกงขาสั้นไนลอนน้ำหนักเบา แห้งไว", ["bottom-04-navy.png", "Deep Navy", "DN", "#27364B"], ["bottom-04-terracotta.png", "Terracotta", "TC", "#B45F45"]],
  ["กางเกง Jersey Jogger", "bottoms", 690, "จ็อกเกอร์เจอร์ซีย์เนื้อนุ่ม ทรงเรียบคม", ["bottom-05-gray.png", "Heather Gray", "HG", "#9B9B98"], ["bottom-05-forest.png", "Forest Green", "FG", "#294638"]],
];

export const productData = catalog.map(([name, category, price, description, ...colorRows], index) => {
  const itemNo = index < 5 ? index + 1 : index - 4;
  const prefix = category === "tops" ? "TOP" : "BOT";
  const sku = prefix + String(itemNo).padStart(3, "0");
  const colors = colorRows.map(([file, colorName, code, hex]) => {
    const baseName = file.replace(".png", "");
    const images = [
      DETAIL_ASSET + baseName + "-front.png",
      DETAIL_ASSET + baseName + "-back.png",
      DETAIL_ASSET + baseName + "-detail.png",
    ];
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
    tags: [{ text: "NEW COLLECTION", bg: "bg-primary" }],
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
