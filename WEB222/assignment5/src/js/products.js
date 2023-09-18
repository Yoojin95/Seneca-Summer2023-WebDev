/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  //Albums
  {
    id: "p1",
    title: "Love Yourself: Tear",
    description: "BTS - Love Yourself: Tear album",
    price: 2499, // In cents (24.99 USD)
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./asset/BTS.jpg",
  },
  {
    id: "p2",
    title: "The Album",
    description: "BLACKPINK - The Album",
    price: 2199, // In cents (21.99 USD)
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./asset/BLACKPINK.jpg",
  },
  {
    id: "p3",
    title: "Twicetagram",
    description: "TWICE - Twicetagram album",
    price: 2699, // In cents (26.99 USD)
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./asset/TWICE.jpg",

  },
  {
    id: "p4",
    title: "NCT 127 Neo Zone",
    description: "NCT 127 - Neo Zone album",
    price: 2799, // In cents (27.99 USD)
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./asset/NCT.jpg",

  },
  {
    id: "p5",
    title: "GOT7 Breath of Lovee",
    description: "GOT7 Breath of Love",
    price: 2299, // In cents (22.99 USD)
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./asset/GOT7.jpg",

  },
  {
    id: "p6",
    title: "EXO Lightstick Keychain",
    description: "EXO Lightstick Keychain",
    price: 699, // In cents (6.99 USD)
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./asset/EXO.jpg",

  },
  {
    id: "p7",
    title: "RED VELVET Feel My Rhythm",
    description: "The ReVe Festival 2022",
    price: 699, // In cents (6.99 USD)
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./asset/REDVELVET.jpg",
  },
  {
    id: "p8",
    title: "BTS Love Yourself: Answer",
    description: "BTS - Love Yourself: Answer album",
    price: 2599, // In cents (25.99 USD)
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./asset/BTS.jpg",
  },
  {
    id: "p9",
    title: "Dynamite",
    description: "BTS - Dynamite Single",
    price: 899, // In cents (8.99 USD)
    discontinued: true,
    categories: ["c1"],
    imageUrl: "./asset/BTS.jpg",
  },
  {
    id: "p10",
    title: "BORN PINK Standard Album",
    description: "BLACKPINK - Born Pink",
    price: 1999, // In cents (21.99 USD)
    discontinued: false,
    categories: ["c1"],
    imageUrl: "./asset/BLACKPINK.jpg",
  },

  // Merchandise
  {
    id: "p11",
    title: "GOT7 Merch Set",
    description: "Set of GOT7 Merchandise",
    price: 4499, // In cents (44.99 USD)
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./asset/NCT.jpg",
  },
  {
    id: "p12",
    title: "MAMAMOO Poster",
    description: "MAMAMOO Official Poster",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./asset/TWICE.jpg",
  },
  {
    id: "p13",
    title: "ATEEZ Treasure Merch",
    description: "ATEEZ Treasure EP.FIN Merchandise",
    price: 3799, // In cents (37.99 USD)
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./asset/REDVELVET.jpg",
  },
  {
    id: "p14",
    title: "Blackpink Hoodie",
    description: "Official BLACKPINK Hoodie",
    price: 4999, // In cents (49.99 USD)
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./asset/BLACKPINK.jpg",
  },
  {
    id: "p15",
    title: "EXO Lightstick Keychain",
    description: "EXO Lightstick Keychain",
    price: 699, // In cents (6.99 USD)
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./asset/EXO.jpg",
  },
  {
    id: "p16",
    title: "SuperM Live Concert DVD",
    description: "SuperM Beyond Live Concert DVD",
    price: 3599, // In cents (35.99 USD)
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./asset/NCT.jpg",
  },
  {
    id: "p17",
    title: "TWICE Hoodie",
    description: "Official TWICE Hoodie",
    price: 4299, // In cents (42.99 USD)
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./asset/TWICE.jpg",
  },
  {
    id: "p18",
    title: "NCT Dream Keychain Set",
    description: "Set of 3 NCT Dream Keychains",
    price: 1699, // In cents (16.99 USD)
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./asset/NCT.jpg",
  },
  {
    id: "p19",
    title: "ITZY Lightstick",
    description: "Official ITZY Lightstick",
    price: 3899, // In cents (38.99 USD)
    discontinued: false,
    categories: ["c2"],
    imageUrl: "./asset/BLACKPINK.jpg",
  },

  // Lightsticks
  {
    id: "p20",
    title: "BTS Lightstick",
    description: "Official BTS Lightstick",
    price: 3699, // In cents (36.99 USD)
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./asset/BTS.jpg",
  },
  {
    id: "p21",
    title: "REDVELVET Lightstick",
    description: "Official RedVelvet Lightstick",
    price: 3699, // In cents (36.99 USD)
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./asset/REDVELVET.jpg",
  },
  {
    id: "p22",
    title: "NCT Lightstick",
    description: "Official NCT Lightstick",
    price: 3699, // In cents (36.99 USD)
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./asset/NCT.jpg",
  },
  {
    id: "p23",
    title: "BLACKPINK Lightstick",
    description: "Official BLACKPINK Lightstick",
    price: 3699, // In cents (36.99 USD)
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./asset/BLACKPINK.jpg",
  },
  {
    id: "p24",
    title: "EXO Lightstick",
    description: "Official EXO Lightstick",
    price: 3699, // In cents (36.99 USD)
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./asset/EXO.jpg",
  },
  {
    id: "p25",
    title: "GOT7 Lightstick",
    description: "Official GOT7 Lightstick",
    price: 3699, // In cents (36.99 USD)
    discontinued: false,
    categories: ["c3"],
    imageUrl: "./asset/GOT7.jpg",
  },

  // PhotoCards
  {
    id: "p26",
    title: "Blackpink Polaroid Set",
    description: "Set of 5 Blackpink Polaroid Photos",
    price: 999, // In cents (9.99 USD)
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./asset/BLACKPINK.jpg",

  },
  {
    id: "p27",
    title: "Red Velvet Photobook",
    description: "Red Velvet Photobook Collection",
    price: 3199, // In cents (31.99 USD)
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./asset/REDVELVET.jpg",

  },
  {
    id: "p28",
    title: "BTS Photocards Set",
    description: "Set of 7 BTS photocards",
    price: 799, // In cents (7.99 USD)
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./asset/BTS.jpg",
  },
  {
    id: "p29",
    title: "EXO Lomo Cards",
    description: "Set of 20 EXO Lomo Cards",
    price: 599, // In cents (5.99 USD)
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./asset/EXO.jpg",
  },
  {
    id: "p30",
    title: "NCT Dream Polaroid Set",
    description: "Set of 7 NCT Dream Polaroid Photos",
    price: 999, // In cents (9.99 USD)
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./asset/NCT.jpg",
  },
  {
    id: "p31",
    title: "TWICE Dream Photocard Set",
    description: "TWICE Dream photocards",
    price: 1099, // In cents (10.99 USD)
    discontinued: false,
    categories: ["c4"],
    imageUrl: "./asset/TWICE.jpg",

  },


  // Posters
  {
    id: "p32",
    title: "EXO Official Poster Set",
    description: "Set of 3 EXO Official Posters",
    price: 1899, // In cents (18.99 USD)
    discontinued: false,
    categories: ["c5"],
    imageUrl: "./asset/EXO.jpg",
  },
  {
    id: "p33",
    title: "Red Velvet Poster",
    description: "Red Velvet Official Poster",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c5"],
    imageUrl: "./asset/REDVELVET.jpg",
  },
  {
    id: "p34",
    title: "NCT I Am WHO Poster",
    description: "NCT Official Poster",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c5"],
    imageUrl: "./asset/NCT.jpg",
  },
  {
    id: "p35",
    title: "GOT7 Official Poster Set",
    description: "Set of 3 GOT7 Official Posters",
    price: 1899, // In cents (18.99 USD)
    discontinued: false,
    categories: ["c5"],
    imageUrl: "./asset/GOT7.jpg",
  },
  {
    id: "p36",
    title: "BLACKPINK Poster",
    description: "BLACKPINK Official Poster",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c5"],
    imageUrl: "./asset/BLACKPINK.jpg",
  },
  {
    id: "p37",
    title: "BTS Poster",
    description: "BTS Official Poster",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c5"],
    imageUrl: "./asset/BTS.jpg",
  },

  // Concert Tickets
  {
    id: "p38",
    title: "Red Velvet Concert Ticket - Korea",
    description: "Red Velvet Solo Concert Ticket",
    price: 7999, // In cents (79.99 USD)
    discontinued: false,
    categories: ["c6"],
    imageUrl: "./asset/REDVELVET.jpg",

  },
  {
    id: "p39",
    title: "EXO World Tour Ticket - Canada",
    description: "EXO World Tour 2023 Ticket",
    price: 8499, // In cents (84.99 USD)
    discontinued: false,
    categories: ["c6"],
    imageUrl: "./asset/EXO.jpg",
  },
  {
    id: "p40",
    title: "NCT World Tour 2023 - New York",
    description: "NCT World Tour 2023 in New York",
    price: 15999, // In cents (159.99 USD)
    discontinued: false,
    categories: ["c6"],
    imageUrl: "./asset/NCT.jpg",
  },
  {
    id: "p41",
    title: "BLACKPINK The Fellowship - Mexico",
    description: "Map the Treasure Concert Tickets",
    price: 6999, // In cents (69.99 USD)
    discontinued: false,
    categories: ["c6"],
    imageUrl: "./asset/BLACKPINK.jpg",
  },
  {
    id: "p42",
    title: "TWICE 2023 World Tour - Brazil",
    description: "Tickets for TWICE 2023 World Tour",
    price: 8999, // In cents (89.99 USD)
    discontinued: false,
    categories: ["c6"],
    imageUrl: "./asset/TWICE.jpg",
  },
  {
    id: "p43",
    title: "BTS Love Yourself World Tour - Japan",
    description: "BTS Love Yourself World Tour",
    price: 11999, // In cents (119.99 USD)
    discontinued: false,
    categories: ["c6"],
    imageUrl: "./asset/BTS.jpg",
  },

];
