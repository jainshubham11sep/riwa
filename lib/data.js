// All imagery is sourced from Unsplash (royalty-free).
// Kurti / traditional Indian ethnic wear + HD garment-manufacturing photos.
// These photo IDs are stable Unsplash URLs that have been verified to resolve.

const HD = "auto=format&fit=crop&w=2000&q=85";
const LG = "auto=format&fit=crop&w=1400&q=85";

export const FALLBACK_IMAGE = `https://images.unsplash.com/photo-1743229995505-d6374996df1c?${LG}`;

export const HERO_IMAGES = [
  {
    // Woman in traditional Indian kurti attire — main hero portrait
    src: `https://images.unsplash.com/photo-1743229995505-d6374996df1c?${HD}`,
    alt: "Woman in traditional Indian kurti attire",
  },
  {
    // Portrait of a happy Indian woman in ethnic kurta
    src: `https://images.unsplash.com/photo-1508465818649-14a170138405?${HD}`,
    alt: "Portrait of a happy Indian woman wearing ethnic kurta",
  },
  {
    // Woman wearing beautiful traditional Indian kurti set
    src: `https://images.unsplash.com/photo-1743090834072-4f70339bc917?${HD}`,
    alt: "Woman wearing beautiful traditional Indian kurti set",
  },
];

export const FACTORY_IMAGES = [
  {
    // Workers sewing clothes in a garment factory
    src: `https://images.unsplash.com/photo-1741183392804-a37864e6a6d9?${HD}`,
    alt: "Workers sewing kurtis and garments in a factory setting",
  },
  {
    // Woman working in an Indian garment factory
    src: `https://images.unsplash.com/photo-1741176505195-e2b04b203643?${HD}`,
    alt: "Woman operator working at a kurti manufacturing unit in India",
  },
  {
    // Woman sewing at a textile factory
    src: `https://images.unsplash.com/photo-1741275271362-bb17c416dca9?${HD}`,
    alt: "Woman sewing at a textile factory producing kurtis",
  },
  {
    // Seamstress at a sewing machine
    src: `https://images.unsplash.com/photo-1741275269919-7a45627bd454?${HD}`,
    alt: "Seamstress working at an industrial sewing machine stitching kurtis",
  },
  {
    // Woman working in a textile factory
    src: `https://images.unsplash.com/photo-1742967416368-bbc8a227ae39?${HD}`,
    alt: "Woman working in a kurti textile factory",
  },
  {
    // Woman in textile factory — different angle
    src: `https://images.unsplash.com/photo-1742203099574-097bb23d9362?${HD}`,
    alt: "Garment worker producing kurtis at a textile factory",
  },
  {
    // Woman working in textile factory with materials
    src: `https://images.unsplash.com/photo-1741176507345-dd8587f1a175?${HD}`,
    alt: "Worker handling kurti fabric and materials at the factory",
  },
  {
    // Woman working in an industrial factory setting
    src: `https://images.unsplash.com/photo-1742967419263-490f1958fb2c?${HD}`,
    alt: "Woman working in an industrial kurti manufacturing setting",
  },
];

export const CATEGORIES = [
  {
    slug: "womenswear",
    name: "Womenswear",
    short: "Kurtis, co-ords and contemporary silhouettes rooted in Jaipur's heritage.",
    description:
      "Contemporary womenswear — from everyday kurtis and kurta sets to occasion kaftans — inspired by Jaipur's textile heritage and designed for comfort and global appeal. Every piece is manufactured in accordance with international export standards.",
    image: `https://images.unsplash.com/photo-1743229995505-d6374996df1c?${HD}`,
    gallery: [
      `https://images.unsplash.com/photo-1743090834072-4f70339bc917?${LG}`,
      `https://images.unsplash.com/photo-1753996131416-e8b679994f6b?${LG}`,
      `https://images.unsplash.com/photo-1656238364721-cbf52d389583?${LG}`,
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
    image: `https://images.unsplash.com/photo-1746258290503-454a87d1e6cd?${HD}`,
    gallery: [
      `https://images.unsplash.com/photo-1734613876170-079f67aa0d15?${LG}`,
      `https://images.unsplash.com/photo-1508465818649-14a170138405?${LG}`,
      `https://images.unsplash.com/photo-1656238364721-cbf52d389583?${LG}`,
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
    image: `https://images.unsplash.com/photo-1734613876170-079f67aa0d15?${HD}`,
    gallery: [
      `https://images.unsplash.com/photo-1753996131416-e8b679994f6b?${LG}`,
      `https://images.unsplash.com/photo-1743229995505-d6374996df1c?${LG}`,
      `https://images.unsplash.com/photo-1743090834072-4f70339bc917?${LG}`,
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
    image: `https://images.unsplash.com/photo-1746258290503-454a87d1e6cd?${HD}`,
    gallery: [
      `https://images.unsplash.com/photo-1656238364721-cbf52d389583?${LG}`,
      `https://images.unsplash.com/photo-1508465818649-14a170138405?${LG}`,
      `https://images.unsplash.com/photo-1743090834072-4f70339bc917?${LG}`,
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
    image: `https://images.unsplash.com/photo-1741176507345-dd8587f1a175?${HD}`,
    gallery: [
      `https://images.unsplash.com/photo-1742967419263-490f1958fb2c?${LG}`,
      `https://images.unsplash.com/photo-1742203099574-097bb23d9362?${LG}`,
      `https://images.unsplash.com/photo-1742967416368-bbc8a227ae39?${LG}`,
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
    image: `https://images.unsplash.com/photo-1741183392804-a37864e6a6d9?${HD}`,
    gallery: [
      `https://images.unsplash.com/photo-1741275271362-bb17c416dca9?${LG}`,
      `https://images.unsplash.com/photo-1741275269919-7a45627bd454?${LG}`,
      `https://images.unsplash.com/photo-1741176505195-e2b04b203643?${LG}`,
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
