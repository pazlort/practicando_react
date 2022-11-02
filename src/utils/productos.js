const products = [
  {
    id: 1,
    name: 'Bolsa De 25 Globos Perlados Nro 12', 
    images: "https://http2.mlstatic.com/D_NQ_NP_2X_973759-MLA47066303527_082021-F.webp", 
    category: 'globos',
    price: 'ARS 780',
    stock: 100,
    link: 'https://articulo.mercadolibre.com.ar/MLA-916022485-bolsa-de-25-globos-perlados-12-fiesta-decoracion-cumple-_JM?variation=94007090562&hide_psmb=true#reco_item_pos=0&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=bcde8834-0e50-493d-9afc-8475e5f56b30&tendency_print_id=ee96faea-412f-4ead-aae7-c6947bb4b17e'
  },
  {
    id: 2,
    name: 'Globos Impresos Personajes Temáticos X10u Aptos Aire O Helio', 
    images: "https://http2.mlstatic.com/D_NQ_NP_627645-MLA51496559291_092022-O.webp" , 
    category: 'globos',
    price: 'ARS 680',
    stock: 100,
    link:'https://articulo.mercadolibre.com.ar/MLA-1163460066-globos-impresos-personajes-tematicos-x10u-aptos-aire-o-helio-_JM?variation=175212005396&hide_psmb=true#reco_item_pos=16&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=7f24436b-8265-4783-aa5e-7de7dae92f9d&tendency_print_id=983175e3-4e5a-4f68-a0b6-a667c2fe1de9'
  },
  {
    id: 3,
    name: 'Set 14 Globos Metalizados Estrella Corazón Confetti Perlados', 
    images: "https://http2.mlstatic.com/D_NQ_NP_2X_604558-MLA46499081931_062021-F.webp", 
    category: 'globos',
    price: 'ARS 780',
    stock: 100,
    link:'https://articulo.mercadolibre.com.ar/MLA-906540477-set-14-globos-metalizados-estrella-corazon-confetti-perlados-_JM?variation=88934442971&hide_psmb=true#reco_item_pos=2&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=bcde8834-0e50-493d-9afc-8475e5f56b30&tendency_print_id=ee96faea-412f-4ead-aae7-c6947bb4b17e'
  },
  {
    id: 4,
    name: 'Globos Perlados 12 Pulgadas X25 Unidades', 
    images: "https://http2.mlstatic.com/D_NQ_NP_2X_929376-MLA41513196868_042020-F.webp", 
    category: 'globos',
    price: 'ARS 750',
    stock: 100,
    link:'https://articulo.mercadolibre.com.ar/MLA-850912783-globos-perlados-12-pulgadas-x25-unidades-cotillon-cumpleanos-_JM?variation=54418160798&hide_psmb=true#reco_item_pos=3&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=bcde8834-0e50-493d-9afc-8475e5f56b30&tendency_print_id=ee96faea-412f-4ead-aae7-c6947bb4b17e'
  },
  {
    id: 5,
    name: 'Globos Chrome Cromados Crome Brillantes X50 Uni 10¨pulgadas', 
    images: "https://http2.mlstatic.com/D_NQ_NP_2X_755680-MLA50315515984_062022-F.webp", 
    category: 'globos',
    price: 'ARS 1950',
    stock: 100,
    link: 'https://articulo.mercadolibre.com.ar/MLA-1142620521-globos-chrome-cromados-crome-brillantes-x50-uni-10pulgadas-_JM?variation=174647586655&hide_psmb=true#reco_item_pos=4&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=bcde8834-0e50-493d-9afc-8475e5f56b30&tendency_print_id=ee96faea-412f-4ead-aae7-c6947bb4b17e'
  },
  {
    id: 6,
    name: 'Set 10 Globo Halloween Deco345 Calabaza Esqueleto Fantasma', 
    images: "https://http2.mlstatic.com/D_NQ_NP_791865-MLA52094030498_102022-O.webp", 
    category: 'globos',
    price: 'ARS 1476',
    stock: 100,
    link:'https://articulo.mercadolibre.com.ar/MLA-928416466-set-10-globo-halloween-deco345-calabaza-esqueleto-fantasma-_JM?hide_psmb=true#reco_item_pos=6&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=bcde8834-0e50-493d-9afc-8475e5f56b30&tendency_print_id=ee96faea-412f-4ead-aae7-c6947bb4b17e'
  },
  {
    id: 7,
    name: 'Set 10 Globo Halloween Deco345 Calabaza Esqueleto Fantasma', 
    images: "https://http2.mlstatic.com/D_NQ_NP_871045-MLA44766236272_012021-O.webp", 
    category: 'globos',
    price: 'ARS 580',
    stock: 100,
    link:'https://articulo.mercadolibre.com.ar/MLA-906553459-set-de-10-globos-transparentes-con-confetti-y-perlados-_JM?variation=74623439330&hide_psmb=true#reco_item_pos=7&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=bcde8834-0e50-493d-9afc-8475e5f56b30&tendency_print_id=ee96faea-412f-4ead-aae7-c6947bb4b17e'
  },
  {
    id: 8,
    name: 'Globos Perlados 12 Pulgadas X 25 Un', 
    images: "https://http2.mlstatic.com/D_NQ_NP_972312-MLA51264958206_082022-O.webp" , 
    category: 'globos',
    price: 'ARS 899',
    stock: 100,
    link:'https://articulo.mercadolibre.com.ar/MLA-1157350750-globos-perlados-12-pulgadas-x-25-un-cotillon-carioca-fiesta-_JM?variation=175099662870&hide_psmb=true#reco_item_pos=8&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=bcde8834-0e50-493d-9afc-8475e5f56b30&tendency_print_id=ee96faea-412f-4ead-aae7-c6947bb4b17e'
  },
  {
    id: 9,
    name: '10 Globos Burbuja Cristal Con Luz Transparente Led Luminoso', 
    images:  "https://http2.mlstatic.com/D_NQ_NP_2X_682878-MLA46797730023_072021-F.webp" , 
    category: 'globos',
    price: 'ARS 3850',
    stock: 100,
    link:'https://articulo.mercadolibre.com.ar/MLA-923971310-10-globos-burbuja-cristal-con-luz-transparente-led-luminoso-_JM?variation=174892598874&hide_psmb=true#reco_item_pos=10&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=bcde8834-0e50-493d-9afc-8475e5f56b30&tendency_print_id=ee96faea-412f-4ead-aae7-c6947bb4b17e'
  },
  {
    id: 10,
    name: 'Arco Globos Orgánico Pastel', 
    images:  "https://http2.mlstatic.com/D_NQ_NP_903788-MLA51471805589_092022-O.webp" , 
    category: 'globos',
    price: 'ARS 3380',
    stock: 100,
    link: 'https://articulo.mercadolibre.com.ar/MLA-1164890541-arco-globos-organico-pastel-cumpleanos-fiesta-cotillon-deco-_JM?hide_psmb=true#reco_item_pos=12&reco_backend=best-seller&reco_backend_type=low_level&reco_client=highlights-rankings&reco_id=bcde8834-0e50-493d-9afc-8475e5f56b30&tendency_print_id=ee96faea-412f-4ead-aae7-c6947bb4b17e'
  },
]

export default products