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
  {
    id: "p1",
    title: "Love Yourself: Tear",
    description: "BTS - Love Yourself: Tear album",
    price: 2499, // In cents (24.99 USD)
    discontinued: false,
    categories: ["c1"],
  },

  {
    id: "p2",
    title: "Map of the Soul: 7",
    description: "BTS - Map of the Soul: 7 album",
    price: 2999, // In cents (29.99 USD)
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p3",
    title: "The Album",
    description: "BLACKPINK - The Album",
    price: 2199, // In cents (21.99 USD)
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p4",
    title: "BTS Army Bomb Ver.3",
    description: "Official BTS Lightstick Version 3",
    price: 3999, // In cents (39.99 USD)
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p5",
    title: "EXO Photocards Set",
    description: "Set of 10 EXO photocards",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p6",
    title: "Stray Kids Poster",
    description: "Stray Kids official poster",
    price: 799, // In cents (7.99 USD)
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p7",
    title: "2023 K-Pop World Tour",
    description: "Tickets for the 2023 K-Pop World Tour",
    price: 6999, // In cents (69.99 USD)
    discontinued: false,
    categories: ["c6"],
  },

   {
    id: "p8",
    title: "Dynamite",
    description: "BTS - Dynamite Single",
    price: 899, // In cents (8.99 USD)
    discontinued: true,
    categories: ["c1"],
  },
  {
    id: "p9",
    title: "Twicetagram",
    description: "TWICE - Twicetagram album",
    price: 2699, // In cents (26.99 USD)
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p10",
    title: "NCT 127 Neo Zone",
    description: "NCT 127 - Neo Zone album",
    price: 2799, // In cents (27.99 USD)
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p11",
    title: "BTS Love Yourself: Answer",
    description: "BTS - Love Yourself: Answer album",
    price: 2599, // In cents (25.99 USD)
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p12",
    title: "Blackpink Hoodie",
    description: "Official BLACKPINK Hoodie",
    price: 4999, // In cents (49.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p13",
    title: "EXO Lightstick Keychain",
    description: "EXO Lightstick Keychain",
    price: 699, // In cents (6.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p14",
    title: "SuperM Beyond Live Concert DVD",
    description: "SuperM Beyond Live Concert DVD",
    price: 3599, // In cents (35.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p15",
    title: "NCT 127 World Tour Ticket",
    description: "NCT 127 World Tour Ticket",
    price: 7999, // In cents (79.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p16",
    title: "Red Velvet Photobook",
    description: "Red Velvet Photobook Collection",
    price: 3199, // In cents (31.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p17",
    title: "TWICE Encore Concert Ticket",
    description: "TWICE Encore Concert Ticket",
    price: 7499, // In cents (74.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p18",
    title: "GOT7 Breath of Love: Last Piece",
    description: "GOT7 Breath of Love: Last Piece album",
    price: 2299, // In cents (22.99 USD)
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p19",
    title: "TXT The Dream Chapter: Eternity",
    description: "TXT The Dream Chapter: Eternity album",
    price: 2399, // In cents (23.99 USD)
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p20",
    title: "ATEEZ Official Lightstick",
    description: "Official ATEEZ Lightstick",
    price: 3699, // In cents (36.99 USD)
    discontinued: false,
    categories: ["c3"],
  },

  {
    id: "p21",
    title: "TWICE Hoodie",
    description: "Official TWICE Hoodie",
    price: 4299, // In cents (42.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p22",
    title: "NCT Dream Keychain Set",
    description: "Set of 3 NCT Dream Keychains",
    price: 1699, // In cents (16.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p23",
    title: "ITZY Lightstick",
    description: "Official ITZY Lightstick",
    price: 3899, // In cents (38.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p24",
    title: "ATEEZ Lightstick Ver. 2",
    description: "Official ATEEZ Lightstick Version 2",
    price: 4299, // In cents (42.99 USD)
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p25",
    title: "Red Velvet Lightstick",
    description: "Official Red Velvet Lightstick",
    price: 3799, // In cents (37.99 USD)
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p26",
    title: "Stray Kids Lightstick",
    description: "Official Stray Kids Lightstick",
    price: 4099, // In cents (40.99 USD)
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p27",
    title: "BTS Photocards Set",
    description: "Set of 7 BTS photocards",
    price: 799, // In cents (7.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p28",
    title: "EXO Lomo Cards",
    description: "Set of 20 EXO Lomo Cards",
    price: 599, // In cents (5.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p29",
    title: "Blackpink Polaroid Set",
    description: "Set of 5 Blackpink Polaroid Photos",
    price: 999, // In cents (9.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p30",
    title: "GOT7 Merch Set",
    description: "Set of GOT7 Merchandise",
    price: 4499, // In cents (44.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p31",
    title: "MAMAMOO Official Poster",
    description: "MAMAMOO Official Poster",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p32",
    title: "ATEEZ Treasure EP.FIN Merch",
    description: "ATEEZ Treasure EP.FIN Merchandise",
    price: 3799, // In cents (37.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p33",
    title: "TWICE Candy Bong Z Lightstick",
    description: "Official TWICE Candy Bong Z Lightstick",
    price: 4999, // In cents (49.99 USD)
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p34",
    title: "Stray Kids Lightstick Ver. 2",
    description: "Official Stray Kids Lightstick Version 2",
    price: 4399, // In cents (43.99 USD)
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p35",
    title: "BLACKPINK Hammer Lightstick",
    description: "Official BLACKPINK Hammer Lightstick",
    price: 4799, // In cents (47.99 USD)
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p36",
    title: "Red Velvet Photocards Set",
    description: "Set of 10 Red Velvet photocards",
    price: 1299, // In cents (12.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p37",
    title: "NCT Dream Polaroid Set",
    description: "Set of 7 NCT Dream Polaroid Photos",
    price: 999, // In cents (9.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p38",
    title: "SuperM Photocard Collection",
    description: "SuperM Photocard Collection",
    price: 699, // In cents (6.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p39",
    title: "BTS Photocards Set",
    description: "Set of 10 BTS photocards",
    price: 1199, // In cents (11.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p40",
    title: "TWICE Fancy You Photocards",
    description: "Set of 7 TWICE Fancy You photocards",
    price: 799, // In cents (7.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p41",
    title: "EXO Obsession Photocard Set",
    description: "Set of 12 EXO Obsession photocards",
    price: 1499, // In cents (14.99 USD)
    discontinued: false,
    categories: ["c4"],
  },

  // Products for category c5 (Posters)
  {
    id: "p42",
    title: "ATEEZ Official Poster Set",
    description: "Set of 3 ATEEZ Official Posters",
    price: 1899, // In cents (18.99 USD)
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p43",
    title: "Red Velvet Poster",
    description: "Red Velvet Official Poster",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p44",
    title: "Stray Kids I Am WHO Poster",
    description: "Stray Kids I Am WHO Official Poster",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p45",
    title: "GOT7 Photocards Set",
    description: "Set of 8 GOT7 photocards",
    price: 999, // In cents (9.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p46",
    title: "ITZY Not Shy Photocards",
    description: "Set of 6 ITZY Not Shy photocards",
    price: 699, // In cents (6.99 USD)
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p47",
    title: "NCT Dream Photocard Set",
    description: "Set of 9 NCT Dream photocards",
    price: 1099, // In cents (10.99 USD)
    discontinued: false,
    categories: ["c4"],
  },

  {
    id: "p48",
    title: "Blackpink Poster Set",
    description: "Set of 3 Blackpink Posters",
    price: 1799, // In cents (17.99 USD)
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p49",
    title: "Super Junior Poster",
    description: "Super Junior Official Poster",
    price: 799, // In cents (7.99 USD)
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p50",
    title: "IZ*ONE Oneiric Diary Poster",
    description: "IZ*ONE Oneiric Diary Official Poster",
    price: 899, // In cents (8.99 USD)
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p51",
    title: "Red Velvet Concert Ticket",
    description: "Red Velvet Solo Concert Ticket",
    price: 7999, // In cents (79.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p52",
    title: "Stray Kids World Tour Ticket",
    description: "Stray Kids World Tour 2023 Ticket",
    price: 8499, // In cents (84.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p53",
    title: "NCT Dream Official Lightstick",
    description: "NCT Dream Official Lightstick",
    price: 3699, // In cents (36.99 USD)
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p51",
    title: "Red Velvet World Tour 2023",
    description: "Tickets for Red Velvet World Tour 2023",
    price: 8499, // In cents (84.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p52",
    title: "BTS World Tour 2023 - New York",
    description: "BTS World Tour 2023 in New York",
    price: 15999, // In cents (159.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p53",
    title: "ATEEZ The Fellowship: Map the Treasure",
    description: "ATEEZ The Fellowship: Map the Treasure Concert Tickets",
    price: 6999, // In cents (69.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p54",
    title: "TWICE 2023 World Tour",
    description: "Tickets for TWICE 2023 World Tour",
    price: 8999, // In cents (89.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p55",
    title: "BTS Love Yourself World Tour",
    description: "Tickets for BTS Love Yourself World Tour",
    price: 11999, // In cents (119.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p51",
    title: "Red Velvet Concert Ticket",
    description: "Red Velvet Solo Concert Ticket",
    price: 7999, // In cents (79.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p52",
    title: "EXO - Obsession Hoodie",
    description: "EXO - Obsession Hoodie",
    price: 4799, // In cents (47.99 USD)
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p53",
    title: "EXO Planet #6 Ticket",
    description: "EXO Planet #6 Concert Ticket",
    price: 8999, // In cents (89.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  {
    id: "p54",
    title: "TWICE Encore Concert Ticket",
    description: "TWICE Encore Concert Ticket",
    price: 7499, // In cents (74.99 USD)
    discontinued: false,
    categories: ["c6"],
  },
  
  
];
