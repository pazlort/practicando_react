const products = [
  {
    id: 1,
    name: "Bolsa De 25 Globos Perlados Nro 12", 
    images: ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo1.png?alt=media&token=9b7ac0e5-62ed-4866-a0f1-4edb068ba55a"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },
    price: 780,
    stock: 5,
  },
  {
    id: 2,
    name: "Globos Impresos Personajes Temáticos X10u Aptos Aire O Helio", 
    images: ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo2.png?alt=media&token=e4fe1b48-0635-4209-ad31-a2dfb4e41d9e"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },
    price: 680,
    stock: 0,
  },
  {
    id: 3,
    name: "Set 14 Globos Metalizados Estrella Corazón Confetti Perlados", 
    images: ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo3.png?alt=media&token=3f974493-41a7-4fdf-8e22-7691c43cb9f5"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },
    price: 780,
    stock: 10,
  },
  {
    id: 4,
    name: "Globos Perlados 12 Pulgadas X25u", 
    images: ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo4.png?alt=media&token=8ab67e56-0319-4d15-a2d5-095b72315efd"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },
    price: 750,
    stock: 100,
  },
  {
    id: 5,
    name: "Globos Cromados Brillantes X50u 10¨pulgadas", 
    images: ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo5.png?alt=media&token=ad1bda45-0345-4d5f-b650-b866a22ff153"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },
    price: 1950,
    stock: 100,
  },
  {
    id: 6,
    name: "Set 10 Globo Halloween Calabaza Esqueleto Fantasma", 
    images: ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo6.png?alt=media&token=5f8080dd-af42-4487-8ac0-7d2f6f5a3d2c"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },
    price: 1476,
    stock: 100,
  },
  {
    id: 7,
    name: "Set De 10 Globos Transparentes Con Confetti y Perlados", 
    images: ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo7.png?alt=media&token=223e1d74-1726-47e0-8c65-3c528557ee3d"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },
    price: 580,
    stock: 100,
  },
  {
    id: 8,
    name: "Globos Perlados 12 Pulgadas X25u", 
    images: ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo8.png?alt=media&token=6077c0ab-81cb-4857-830a-6cbb01cc6596"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },
    price: 899,
    stock: 100,
  },
  {
    id: 9,
    name: "10 Globos Burbuja Cristal Con Luz Transparente Led Luminoso", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo9.png?alt=media&token=5f1a37bf-cc6c-49eb-ac31-533346ad777d"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },    
    price: 3850,
    stock: 100,
  },
  {
    id: 10,
    name: "Arco Globos Orgánico Pastel", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/globos%2Fglobo10.png?alt=media&token=835a6cc1-6561-4e0a-af29-ef0e5dea2c70"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 1,
    category: {
      name: "globos",
      id: 1
    },    
    price: 3380,
    stock: 100,
  },
  {
    id: 11,
    name: "Banderin Guirnalda Colores Pasteles Feliz Cumple", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin1.png?alt=media&token=429de167-9b23-4071-97d1-4abed1625cf7"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 490,
    stock: 100,
  },
  {
    id: 12,
    name: "Banderin Feliz Cumple Happy Birthday Rosa Gold Pastel", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin2.png?alt=media&token=1edebc88-87e0-42f2-bc0d-b0b02bd033b6"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 467,
    stock: 100,
  },
  {
    id: 13,
    name: "Trio Guirnaldas Baby Shower Personalizada Con Nombre", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin3.png?alt=media&token=4b6205af-f804-43bf-8f31-e5452c221895"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 2000,
    stock: 100,
  },
  {
    id: 14,
    name: " Trio De Guirnaldas Dinosaurios, Hojas Y Banderín Dinos", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin4.png?alt=media&token=b81f06e9-0847-48d6-9e8d-fd0f0358a3cd"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 2000,
    stock: 100,
  },
  {
    id: 15,
    name: "Banderin Guirnalda Argentina 2,80 Cm", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin5.png?alt=media&token=0a9ad117-da51-4bea-9400-af0a564bce65"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 850,
    stock: 100,
  },
  {
    id: 16,
    name: " Halloween Banderinnes Varios Diseños", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin6.png?alt=media&token=124a65fe-1e95-42c5-ab4d-9e9e923cd562"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 833,
    stock: 100,
  },
  {
    id: 17,
    name: "Banderin De Cumpleaños Super Hero ", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin7.png?alt=media&token=f687fd0d-8406-4519-9a07-7ef5f3077287"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 820,
    stock: 100,
  },
  {
    id: 18,
    name: "Banderin Cola De Sirena 1.60mts X 2u ", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin8.png?alt=media&token=2d2c5da7-f51d-4653-bd23-fe5f7cde643ap"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 815,
    stock: 100,
  },
  {
    id: 19,
    name: " Banderín Feliz Cumpleaños - Buzz Lightyear", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin9.png?alt=media&token=b5869297-014d-40f4-b2ee-ad95b7697bed"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 790,
    stock: 100,
  },
  {
    id: 20,
    name: "Banderin Plastico Calada Mexicano", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/banderines%2Fbanderin10.png?alt=media&token=f0c52b93-3fd8-4477-b3d1-eb0abbbb9697"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 2,
    category: {
      name: "banderines",
      id: 2
    },
    price: 752,
    stock: 100,
  },
  {
    id: 21,
    name: "Adorno Para Torta En Telgopor Y Goma Eva", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper1.png?alt=media&token=8f70a634-1451-4535-a7f9-cf77784f7c82"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price: 728,
    stock: 100,
  },
  {
    id: 22,
    name: " Adorno Para Torta Cumple 5 Jugadores Futbol + Arco + Pelota", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper2.png?alt=media&token=1dbfcb0d-d0b1-416d-91ff-5652ed2f1973"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price: 461,
    stock: 100,
  },
  {
    id: 23,
    name: "Adorno Para Torta Harry Potter + Vela + Bengala + Sticker", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper3.png?alt=media&token=cb618260-c865-49ab-9eba-ec013cf8817a"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price: 1990,
    stock: 100,
  },
  {
    id: 24,
    name: " Adorno Para Torta River Plate + Bengala + Vela", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper4.png?alt=media&token=737a75e2-6aa3-4cdd-8d5c-04de31d623ed"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price: 1990,
    stock: 100,
  },
  {
    id: 25,
    name: " Cake Topper Stranger Things Adorno Torta Cumpleaños", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper5.png?alt=media&token=4b0e00ec-49c2-4482-b09f-684ccdc071c3"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price: 720,
    stock: 100,
  },
  {
    id: 26,
    name: "Cake Topper Bluey Adorno Torta Cumpleaños", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper6.png?alt=media&token=544ee16a-4777-41be-91f4-d40a0b7dcba1"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price: 390,
    stock: 100,
  },
  {
    id: 27,
    name: "Adorno Para Torta Con Luz Mickey Mouse", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper7.png?alt=media&token=b5944205-b372-4447-a37f-adce2631fca1"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price: 565,
    stock: 100,
  },
  {
    id: 28,
    name: "Adorno Para Torta De Unicornios", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper8.png?alt=media&token=4c68173e-f605-41fe-ab19-5d66c7b90cc8"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price: 520,
    stock: 100,
  },
  {
    id: 29,
    name: "Mariposa Para Torta Topper x6u rosa Gold Plata Dorado", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper9.png?alt=media&token=f50e8ad1-8c1d-42cb-b719-53a2bcdedb34"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price: 550,
    stock: 100,
  },
  {
    id: 30,
    name: "Kit Topper Globos 5 Decoracion Torta Chrome Látex Cristal", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/toopers%2Ftopper10.png?alt=media&token=9f1f0516-a83d-444e-bcda-75b6b6138bd9"], 
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 3,
    category: {
      name: "toppers",
      id: 3
    },
    price:548,
    stock: 100,
  },
  {
    id: 31,
    name: "Velas Finitas Gibreadas Brillo X12u Varios Colores", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas1.png?alt=media&token=8529d5d6-80a5-47d8-890e-f74c48cbfe73"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 685,
    stock: 100,
  },
    {
    id: 32,
    name: "Vela Numérica Plata", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas2.png?alt=media&token=92241d7c-db7d-4649-a5e3-678c0710c232"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 260,
    stock: 100,
  },
  {
    id: 33,
    name: "Velas Finitas 17cm Blister x24u Varios Colores", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas3.png?alt=media&token=97af0989-7a02-4343-8fe2-6f8b3bfa430f"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 387,
    stock: 100,
  },
  {
    id: 34,
    name: "Velas Sparkles Números Azul Cumpleaños", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas4.png?alt=media&token=b50e0c16-9e3c-4d71-8a45-937462c8bbf4"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 335,
    stock: 100,
  },
  {
    id: 35,
    name: "Pack De 4 bengalas colores varios", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas5.png?alt=media&token=d3e580cf-9289-411e-9170-b7f9b311ed86"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 500,
    stock: 100,
  },
  {
    id: 36,
    name: "Vela Numero Gibré Dorado-plateado-rose-celeste", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas6.png?alt=media&token=ff2e5cf7-e76c-40aa-bc7b-5b71a99166f3"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 300,
    stock: 100,
  },
  {
    id: 37,
    name: "Pack Set Velas Magicas Cumpleaños X10u Multicolor", 
    images: ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas7.png?alt=media&token=31fb42f2-f605-497d-bf8d-0b9ea5a31c1d"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 350,
    stock: 100,
  },
  {
    id: 38,
    name: "Pack Velas Corazon Y Estrella", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas8.png?alt=media&token=a1426a63-0ae6-406c-8b12-6677a0a5bd85"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 480,
    stock: 100,
  },
  {
    id: 39,
    name: "Vela Dorada Números N°4 (12 Cm.) X1u", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas9.png?alt=media&token=c10b7eb6-20c1-4f8c-94b8-2673f6016281"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 317,
    stock: 100,
  },
  {
    id: 40,
    name: "Vela Flor Musical Rosa", 
    images:  ["https://firebasestorage.googleapis.com/v0/b/tp-final-coder.appspot.com/o/velas%2Fvelas10.png?alt=media&token=7a46fa88-d4b1-4296-a9d5-46da74700757"],
    detail: "Cupcake ipsum dolor sit amet jelly beans jujubes. I love cupcake cotton candy lollipop toffee tiramisu I love toffee sesame snaps. I love I love cupcake I love cake. Croissant jelly-o cupcake biscuit sweet gummies. Tart pastry cake danish pudding. Dragée lemon drops I love wafer gummi bears. Oat cake chocolate bar bonbon marzipan I love. Icing danish liquorice cotton candy I love dragée.",
    categoryId: 4,
    category: {
      name: "velasYbengalas",
      id: 4
    },
    price: 936,
    stock: 100,
  },
]

export default products