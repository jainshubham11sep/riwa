// All imagery sourced from local product photos in /public/images/.

export const FALLBACK_IMAGE = `/images/Dresses.jpeg`;

export const HERO_IMAGES = [
  {
    src: `/images/Dresses.jpeg`,
    alt: "Dresses by Riwa India",
  },
  {
    src: `/images/Tops.jpeg`,
    alt: "Tops by Riwa India",
  },
  {
    src: `/images/Jackets.jpeg`,
    alt: "Jackets by Riwa India",
  },
];

export const FACTORY_IMAGES = [
  {
    src: `/images/labour%201.jpeg`,
    alt: "Workers producing garments at Riwa India",
  },
  {
    src: `/images/labour%202.jpeg`,
    alt: "Manufacturing in progress at Riwa India",
  },
  {
    src: `/images/Dresses2.jpeg`,
    alt: "Dresses production at Riwa India",
  },
  {
    src: `/images/Tops_2.jpeg`,
    alt: "Tops production at Riwa India",
  },
  {
    src: `/images/Jackets.jpeg`,
    alt: "Jackets by Riwa India",
  },
  {
    src: `/images/Menswear.png`,
    alt: "Menswear by Riwa India",
  },
  {
    src: `/images/Kidswear.jpeg`,
    alt: "Kidswear by Riwa India",
  },
  {
    src: `/images/Bags.jpeg`,
    alt: "Bags by Riwa India",
  },
];

export const CATEGORIES = [
  {
    slug: "womenswear",
    name: "Womenswear",
    short: "Kurtis, co-ords and contemporary silhouettes rooted in Jaipur's heritage.",
    description:
      "Contemporary womenswear — from everyday kurtis and kurta sets to occasion kaftans — inspired by Jaipur's textile heritage and designed for comfort and global appeal. Every piece is manufactured in accordance with international export standards.",
    image: `/images/Dresses.jpeg`,
    subcategories: [
      { name: "Tops", images: [`/images/Tops.jpeg`, `/images/Tops_2.jpeg`] },
      { name: "Dresses", images: [`/images/Dresses.jpeg`, `/images/Dresses2.jpeg`] },
      { name: "Jackets", images: [`/images/Jackets.jpeg`] },
    ],
    highlights: [
      "Kurtis, kurta sets, co-ords, dresses and kaftans",
      "Hand block-printed, screen-printed and embroidered options",
      "Size sets from XS to 3XL on request",
    ],
  },
  {
    slug: "menswear",
    name: "Menswear",
    short: "Kurta pyjamas, shirts and timeless tailoring with handcrafted detail.",
    description:
      "Modern menswear — kurta pyjamas, bandis, shirts and overshirts — blending timeless design with handcrafted detailing. Produced with strict adherence to global quality and export compliance requirements.",
    image: `/images/Menswear.png`,
    subcategories: [
      { name: "Menswear", images: [`/images/Menswear.png`] },
    ],
    highlights: [
      "Kurta sets, Nehru jackets, shirts and resort wear",
      "Hand block prints and fine woven yarn-dyed fabrics",
      "Full fit grading for international size charts",
    ],
  },
  {
    slug: "kidswear",
    name: "Kidswear",
    short: "Soft, skin-friendly fabrics with playful ethnic prints.",
    description:
      "Soft, comfortable kidswear — including ethnic kurti sets, frocks and dungarees — made with skin-friendly fabrics and playful prints. Carefully crafted following all necessary export standards and safety compliances.",
    image: `/images/Kidswear.jpeg`,
    subcategories: [
      { name: "Kidswear", images: [`/images/Kidswear.jpeg`] },
    ],
    highlights: [
      "Infant, toddler and youth ranges",
      "AZO-free dyes and certified soft cottons",
      "Ethnic kurti sets, frocks and dungarees",
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    short: "Handcrafted dupattas, stoles and details for the modern wardrobe.",
    description:
      "Handcrafted accessories — dupattas, stoles, scarves, totes and pouches — designed to complement modern lifestyles. Developed with precision and aligned with international export quality and compliance norms.",
    image: `/images/Scarves%20%26%20Accessories.jpeg`,
    subcategories: [
      { name: "Bags", images: [`/images/Bags.jpeg`] },
      { name: "Scarves & Accessories", images: [`/images/Scarves%20%26%20Accessories.jpeg`] },
      { name: "Wash Bags & Accessories", images: [`/images/Wash%20bags%20%26%20Accessories.jpeg`] },
    ],
    highlights: [
      "Dupattas, stoles, scarves, totes and pouches",
      "Hand block-printed and quilted options",
      "Custom labelling and gift-ready packaging",
    ],
  },
  {
    slug: "home-furnishings",
    name: "Home Furnishings",
    short: "Traditional techniques, contemporary aesthetics.",
    description:
      "Elegant home textiles — bed linen, quilts, cushions and table textiles — combining traditional techniques with contemporary aesthetics. Manufactured in compliance with global export standards for quality and durability.",
    image: `/images/Bedding%20Sets.jpeg`,
    subcategories: [
      { name: "Bedding Sets", images: [`/images/Bedding%20Sets.jpeg`] },
      { name: "Table Linens", images: [`/images/Table%20Linens.jpeg`, `/images/Table%20Linens%202.jpeg`] },
      { name: "Curtains", images: [`/images/Curtains.jpeg`] },
    ],
    highlights: [
      "Bed linen, quilts, cushions and table textiles",
      "GOTS-friendly organic cotton options",
      "Custom colourways and print scaling",
    ],
  },
  {
    slug: "printed-fabrics",
    name: "Printed Fabrics",
    short: "Custom block and screen prints by the metre.",
    description:
      "Custom-developed fabrics featuring exclusive block and screen prints tailored to buyer requirements. Produced in line with international export parameters and quality compliances.",
    image: `/images/labour%202.jpeg`,
    subcategories: [
      { name: "Block Printing", images: [`/images/labour%201.jpeg`, `/images/labour%202.jpeg`] },
      { name: "Table Linens", images: [`/images/Table%20Linens.jpeg`, `/images/Table%20Linens%202.jpeg`] },
    ],
    highlights: [
      "Cotton, silk, linen and viscose bases",
      "Hand block, screen and discharge printing",
      "Custom repeats developed to your brief",
    ],
  },
];

export const CAPABILITIES = [
  {
    title: "In-house block printing",
    body: "Wooden blocks are hand-carved and printed by generational artisans on natural fibre fabrics, producing the slight, living variations that mark a true handcrafted textile.",
  },
  {
    title: "Screen printing",
    body: "Registered multi-colour screen printing for sharp, repeatable prints at scale — ideal for placement prints, all-overs and engineered panels on kurtis and separates.",
  },
  {
    title: "Cut, make & trim",
    body: "Integrated CMT lines with patternmakers, graders, sample rooms and dedicated finishing for woven, knit and blended fabrics across kurtis, shirts and dresses.",
  },
  {
    title: "Custom fabric development",
    body: "Greige sourcing, dyeing and finishing to your colour standards with buyer-specific print libraries and fibre blends.",
  },
  {
    title: "Quality & compliance",
    body: "Inline and final inspections, AQL audits, and adherence to international export standards — with third-party testing on request.",
  },
  {
    title: "Export & logistics",
    body: "FOB / CIF shipping via approved carriers, full documentation and transparent timelines from sampling to port.",
  },
];
