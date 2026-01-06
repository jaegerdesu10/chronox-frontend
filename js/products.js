const products = [
  {
  id: "1",
  name: "Patek Nautilus Flyback Chronograph",
  price: 153517347,
  description: "Rose gold single-subdial chronograph with black gradient dial, offering a clean design with inner hours and outer minutes tracking.",
  details: [
    "Brand: Patek Philippe",
    "Case Size: 40.5mm",
    "Water Resistance: 120m",
    "Movement: Caliber CH 28-520 C Automatic",
    "Crystal: Sapphire"
  ],
  category: "Patek Philippe",
  image: "pics/1.webp"
},
{
  id: "2",
  name: "Zenith Chronomaster Sport El Primero",
  price: 1604152,
  description: "Historic automatic chronograph with tri-tone overlapping subdials, white dial, and ceramic bezel. Pays homage to the first El Primero movement.",
  details: [
    "Brand: Zenith",
    "Case Size: 41mm",
    "Water Resistance: 100m",
    "Movement: El Primero 3600 Automatic",
    "Crystal: Sapphire"
  ],
  category: "Zenith",
  image: "pics/2.webp"
},
{
  id: "3",
  name: "Rolex Cellini Moonphase",
  price: 39010060,
  description: "Elegant leather-dress Rolex with moonphase, onion crown, and sapphire caseback. Unique in Rolex's lineup, featuring classic Cellini styling.",
  details: [
    "Brand: Rolex",
    "Case Size: 39mm",
    "Water Resistance: 50m",
    "Movement: Calibre 3195 Automatic",
    "Crystal: Sapphire"
  ],
  category: "Rolex",
  image: "pics/3.webp"
},
{
  id: "4",
  name: "Patek Philippe Calatrava",
  price: 56918230,
  description: "Iconic dress watch with precious metal case, clean dial, open case-back, and premium leather strap. A timeless classic in luxury watchmaking.",
  details: [
    "Brand: Patek Philippe",
    "Case Size: 39mm",
    "Water Resistance: 30m",
    "Movement: Caliber 324 S C Automatic",
    "Crystal: Sapphire"
  ],
  category: "Patek Philippe",
  image: "pics/4.webp"
},
  {
    id: "5",
    name: "Glashütte Original SeaQ 39-11",
    price: 13124880,
    description: "A high-end dive watch slimmed down for daily wear. At 39.5mm, the SeaQ is slightly smaller than a Submariner and powered by Glashütte’s in-house 39-11 automatic movement with 40-hour power reserve.",
    details: [
      "Brand: Glashütte Original",
      "Case Size: 39.5mm",
      "Water Resistance: 200m",
      "Movement: Glashütte 39-11 Automatic",
      "Crystal: Sapphire"
    ],
    category: "Glashütte Original",
    image: "pics/5.webp"
  },
  {
    id: "6",
    name: "Tudor Black Bay 58",
    price: 5541616,
    description: "A vintage-inspired dive watch honoring the 1958 Tudor Oyster Prince Submariner 'Big Crown.' Features a 39mm case, vintage lume, and riveted bracelet for collectors and enthusiasts.",
    details: [
      "Brand: Tudor",
      "Case Size: 39mm",
      "Water Resistance: 200m",
      "Movement: Tudor Caliber MT5402 Automatic",
      "Crystal: Sapphire"
    ],
    category: "Tudor",
    image: "pics/6.webp"
  },
  {
    id: "7",
    name: "DOXA Sub 300T Conquistador Orange",
    price: 2756225,
    description: "A dive watch with rich heritage dating back to 1968. Features a vintage-style turtle case, unique 7-link bracelet, and striking orange dial, water resistant to 1,200 meters.",
    details: [
      "Brand: DOXA",
      "Case Size: 42mm",
      "Water Resistance: 1,200m",
      "Movement: ETA 2824-2 Automatic",
      "Crystal: Sapphire"
    ],
    category: "DOXA",
    image: "pics/7.webp"
  },
{
  id: "8",
  name: "H. Moser & Cie Endeavor",
  price: 35291344,
  description: "Minimalist dress watch featuring a smoked Fume dial, polished white gold hands, and showcase of fine movement finishing on the reverse.",
  details: [
    "Brand: H. Moser & Cie",
    "Case Size: 40mm",
    "Water Resistance: 30m",
    "Movement: Calibre HMC 200 Automatic",
    "Crystal: Sapphire"
  ],
  category: "H. Moser & Cie",
  image: "pics/8.webp"
},
{
  id: "9",
  name: "Carpenter M23 Brooklyn Field",
  price: 683588,
  description: "US-based field watch inspired by pocket watches. Wire lugs, extended thin indices, and Miyota automatic movement combine heritage with modern style.",
  details: [
    "Brand: Carpenter",
    "Case Size: 40mm",
    "Water Resistance: 50m",
    "Movement: Miyota 821A Automatic",
    "Crystal: Sapphire"
  ],
  category: "Carpenter",
  image: "pics/9.webp"
},
{
  id: "10",
  name: "Brew Metric",
  price: 576036,
  description: "Retro-modern microbrand chronograph with coffee-inspired design, integrated bracelet, and Seiko Mecha-Quartz movement for mechanical feel.",
  details: [
    "Brand: Brew",
    "Case Size: 36mm",
    "Water Resistance: 50m",
    "Movement: VK68 Mecha-Quartz",
    "Crystal: Sapphire"
  ],
  category: "Brew",
  image: "pics/10.webp"
},
  {
  id: "11",
  name: "Parmigiani Tonda PF GMT Rattrapante",
  price: 37916320,
  description: "A high-luxury steel sports watch with integrated bracelet, fluted bezel, and exquisitely finished Grain d'Orge dial. Features dual-time skeletonized hands in white and rose gold.",
  details: [
    "Brand: Parmigiani Fleurier",
    "Case Size: 40mm",
    "Water Resistance: 200m",
    "Movement: PF051 manufacture",
    "Crystal: Sapphire"
  ],
  category: "Parmigiani Fleurier",
  image: "pics/11.webp"
},
{
  id: "12",
  name: "Audemars Piguet Royal Oak",
  price: 218748000,
  description: "A breathtaking skeleton sport watch fully made in ceramic with rose-gold accented dial and moon-phase at 6 o'clock, showcasing AP's mastery in watchmaking.",
  details: [
    "Brand: Audemars Piguet",
    "Case Size: 40mm",
    "Water Resistance: 30m",
    "Movement: AP5136",
    "Crystal: Sapphire"
  ],
  category: "Audemars Piguet",
  image: "pics/12.webp"
},
{
  id: "13",
  name: "Tag Heuer Carrera Heuer 02 Skeleton",
  price: 86040088,
  description: "A sturdy racing chronograph with a smoky sapphire dial, red hands for contrast, and a 45mm case that highlights its well-made skeleton chronograph design.",
  details: [
    "Brand: Tag Heuer",
    "Case Size: 45mm",
    "Water Resistance: 100m",
    "Movement: Calibre HEUER02 Automatic",
    "Crystal: Sapphire"
  ],
  category: "Tag Heuer",
  image: "pics/13.webp"
},
{
  id: "14",
  name: "Christopher Ward C60 Concept",
  price: 6343692,
  description: "An affordable skeleton tool watch with ample lume, unique design, and 300m water resistance. A great contrast of simplicity and finishing for enthusiasts.",
  details: [
    "Brand: Christopher Ward",
    "Case Size: 42mm",
    "Water Resistance: 300m",
    "Movement: Calibre SH21 Automatic",
    "Crystal: Sapphire"
  ],
  category: "Christopher Ward",
  image: "pics/14.webp"
},
{
  id: "15",
  name: "Patek Philippe Calatrava Skeleton",
  price: 163871419,
  description: "A stunning rose gold skeleton watch with hand-finished 240 SQU movement caged within the indices, featuring an elongated mesh bracelet for a striking luxury presence.",
  details: [
    "Brand: Patek Philippe",
    "Case Size: 39mm",
    "Water Resistance: 30m",
    "Movement: Caliber 240 SQU Automatic",
    "Crystal: Sapphire"
  ],
  category: "Patek Philippe",
  image: "pics/15.webp"
},
{
  id: "16",
  name: "IWC Big Pilot 52110 Calibre",
  price: 19395656,
  description: "Iconic pilot watch scaled down to 46.2mm for better wearability. Features oversized onion crown and leather strap, combining history and practicality for aviation enthusiasts.",
  details: [
    "Brand: IWC",
    "Case Size: 46.2mm",
    "Water Resistance: 60m",
    "Movement: 52110 Calibre",
    "Crystal: Sapphire"
  ],
  category: "IWC",
  image: "pics/16.webp"
},
{
  id: "17",
  name: "Farer Morgan Pilot",
  price: 1320000,
  description: "High-quality sub-$1000 pilot watch with mesh bracelet, blue dial, red-tipped second hand, and unique large window design for excellent legibility.",
  details: [
    "Brand: Farer",
    "Case Size: 39mm",
    "Water Resistance: 50m",
    "Movement: Sellita SW200-1 Automatic",
    "Crystal: Sapphire"
  ],
  category: "Farer",
  image: "pics/17.webp"
},
{
  id: "18",
  name: "Oris ProPilot X Calibre 400",
  price: 6270776,
  description: "Compact 39mm pilot watch with in-house movement and 5-day power reserve. Legible dial, airplane-inspired bracelet, and high-value proposition for pilots and collectors.",
  details: [
    "Brand: Oris",
    "Case Size: 39mm",
    "Water Resistance: 100m",
    "Movement: Calibre 400 Automatic",
    "Crystal: Sapphire"
  ],
  category: "Oris",
  image: "pics/18.webp"
},
{
  id: "19",
  name: "Rolex Daytona 4130",
  price: 21218556,
  description: "Iconic stainless steel racing chronograph, originally released in 1963. Worn by celebrities and collectors, it remains one of the most recognizable Rolex chronographs.",
  details: [
    "Brand: Rolex",
    "Case Size: 40mm",
    "Water Resistance: 100m",
    "Movement: Rolex Caliber 4130 Automatic",
    "Crystal: Sapphire"
  ],
  category: "Rolex",
  image: "pics/19.webp"
},
{
  id: "20",
  name: "Omega Co-Axial Master Chronometer",
  price: 9333248,
  description: "Famed first watch on the moon with 42mm case and slightly smaller wear due to tapered lugs. Hesalite crystal, iconic black dial, and recessed sub-registers make it a timeless chronograph.",
  details: [
    "Brand: Omega",
    "Case Size: 42mm",
    "Water Resistance: 50m",
    "Movement: Calibre 3861",
    "Crystal: Hesalite"
  ],
  category: "Omega",
  image: "pics/20.webp"
}
];

