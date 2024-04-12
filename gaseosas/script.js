
const productContainer = document.querySelector(".product-container");

const data = [
  {
      "id": 1,
      "nombre": "Almojabana express presentacion: 1 kl",
      "img": "../assets/harina_almojabanas.jpeg",
      "idCategoria": "otros"
  },
  {
      "id": 2,
      "nombre": "Buñuelo express presentacion: 1kl",
      "img": "../assets/harina_buñuelos.jpeg",
      "idCategoria": "otros"
  },
  {
      "id": 3,
      "nombre": "Empanada express presentacion: 1kl",
      "img": "../assets/harina_empanadas.jpeg",
      "idCategoria": "otros"
  },
  {
      "id": 4,
      "nombre": "Almidon express presentacion: 1kl",
      "img": "../assets/harina_almidon.jpeg",
      "idCategoria": "otros"
  },
  {
      "id": 5,
      "nombre": "Fecula express presentacion: 1kl",

      "img": "../assets/harina_fecula.jpeg",
      "idCategoria": "otros"
  },
  {
      "id": 6,
      "nombre": "Jugo Nutiva vaso presentacion x 180ml",
      "img": "../assets/jugos_nutiva_vaso.jpeg",
      "idCategoria": "bebidas"
  },
  {
      "id": 7,
      "nombre": "Jugo Nutiva tetra presentacion 200ml",

      "img": "../assets/jugos_nutiva_tetra.jpeg",
      "idCategoria": "bebidas"
  },
  {
      "id": 8,
      "nombre": "Jugo Nutiva botella Presentacion x 250 ml",

      "img": "../assets/jugos_nutiva_botella.jpeg",
      "idCategoria": "bebidas"
  },
  {
      "id": 10,
      "nombre": "Aloe Vera Nutiva botella presentacion 250 ml y 500 ml",

      "img": "https://www.alimentosnutiva.com/wp-content/uploads/2023/11/aloesplash2.png",
      "idCategoria": "bebidas"
  },
  {
      "id": 11,
      "nombre": "Jugo Nutiva botella presentacion 500ml",

      "img": "../assets/jugos_nutiva_botella_500.jpeg",
      "idCategoria": "bebidas"
  },
  {
      "id": 12,
      "nombre": "Te Nutiva botella Presentacion x 250 ml",

      "img": "https://www.alimentosnutiva.com/wp-content/uploads/2023/10/te.png",
      "idCategoria": "bebidas"
  },
  {
      "id": 13,
      "nombre": "Bebida Energizante Nutiva botella presentacion 500 ml",
      "img": "https://www.alimentosnutiva.com/wp-content/uploads/2023/11/naranjaspash.png",
      "idCategoria": "bebidas"
  },
  {
      "id": 14,
      "nombre": "Gaseosa Nutiva botella Presentacion x 400 ml",
      "img": "https://www.alimentosnutiva.com/wp-content/uploads/2023/10/gaseosa.png",
      "idCategoria": "bebidas"
  },
  {
      "id": 17,
      "nombre": "Coca Cola Presentacion: botella 1.5 lt botella 400 botella 250 ml",
      "img": "../assets/coca_cola.jpeg",
      "idCategoria": "bebidas"
  },

  {
      "id": 18,
      "nombre": "Leche en polvo Azucarada Rica Presentaciones en bolsa 900gr, 380gr y 200gr",
      "img": "https://almacencentral.com.co/wp-content/uploads/2018/06/ricaleche.jpg",
      "idCategoria": "panaderia"
  },

  {
      "id": 19,
      "nombre": "Leche en polvo Entera Rosalinda Presentaciones en bolsa 900gr, 380gr y 200gr",
      "img": "https://res.cloudinary.com/ddoatnjz6/image/upload/c_scale,w_1024,f_auto/Imagenes/09353-1.png",
      "idCategoria": "otros"
  },
  {
      "id": 20,
      "nombre": "Mezcla lactea en polvo La Pecosita Presentaciones en bolsa 800gr y 380gr",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "otros"
  },
  {
      "id": 21,
      "nombre": "Mezcla lactea en polvo La Pecosita Presentaciones en bolsa papel x 5kl y 1kl",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "otros"
  },
  {
      "id": 22,
      "nombre": "Chocolate de mesa con azucar Al Gusto Presentacion por 500 gr y 250 gr",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "otros"
  },
  {
      "id": 23,
      "nombre": "Galleta Caritas Presentacion Domo por 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 24,
      "nombre": "Galleta Coronas Presentacion Domo por 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 25,
      "nombre": "Galleta deditos Presentacion Domo por 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 26,
      "nombre": "Galleta Corazon Presentacion Domo por 60 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 27,
      "nombre": "Galleta Girasol Presentacion Domo por 100 y 200 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 28,
      "nombre": "Galleta cuca Presentacion bolsa x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 29,
      "nombre": "Galleta punto rojo Presentacion bolsa x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 30,
      "nombre": "Torta Maria Luisa Presentacion torta x 16 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 31,
      "nombre": "Torta Maria Luisa Presentacion domo x 40 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 32,
      "nombre": "Torta Maria Luisa Nelson Presentacion paquete x 10 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 33,
      "nombre": "Torta mantecada Presentacion domo x 14 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 34,
      "nombre": "Torta Envinada Presentacion domo x 14 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 35,
      "nombre": "Pera Presentacion domo x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 36,
      "nombre": "Rollo Presentacion domo x 10 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 37,
      "nombre": "Gelatina blanca Presentacion domo x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 38,
      "nombre": "Pastel enrollado Presentacion domo x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 39,
      "nombre": "Pastel de guayaba Presentacion domo x 60 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 40,
      "nombre": "Pastel Chicharron de guayaba Presentacion domo x 7 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 41,
      "nombre": "Pastel Pañoleta de arequipe Presentacion domo x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 42,
      "nombre": "Pastel de guayaba Presentacion domo x 14 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 43,
      "nombre": "Pastel de guayaba Presentacion domo x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 44,
      "nombre": "Pastel encarcelado de guayaba y arequipe Presentacion paquete x 8 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 45,
      "nombre": "Merengues Presentacion domo x 60 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 46,
      "nombre": "Masmelos Presentacion domo x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "panaderia"
  },
  {
      "id": 47,
      "nombre": "Tetero Minisigui Presentacion paquete x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 48,
      "nombre": "Pitillo Minisigui Presentacion paquete x 20 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 49,
      "nombre": "Vaso Minisigui Presentacion paquete x 20 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 50,
      "nombre": "Tamarindo Presentacion domo x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 51,
      "nombre": "Panela Galleta Presentacion domo x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 52,
      "nombre": "Barquillo Presentacion domo x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 53,
      "nombre": "Panela Cuadrada Presentacion domo x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 54,
      "nombre": "Vaso de arequipe Presentacion x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 55,
      "nombre": "Vaso cono de galleta relleno de arequipe Presentacion domo x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 56,
      "nombre": "Dulce Ducrem Presentacion x 36 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 57,
      "nombre": "Chocmelo Presentacion domo x 65 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 58,
      "nombre": "Bola chicle fuego Presentacion domo x 80 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 59,
      "nombre": "Bola Anisada Presentacion domo x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 60,
      "nombre": "Bola almendra Presentacion domo x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 61,
      "nombre": "Bola Coco Presentacion domo x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 62,
      "nombre": "Bola Mango Biche Presentacion domo x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 63,
      "nombre": "Boloncho chicle Presentacion domo x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 64,
      "nombre": "Bola Chicle Presentacion domo x 80 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 65,
      "nombre": "Figura moneda menta Presentacion domo x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 66,
      "nombre": "Cigarrillo menta Presentacion domo x 80 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 67,
      "nombre": "Mazapan Presentacion domo x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 68,
      "nombre": "Chipirrin Presentacion domo x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 69,
      "nombre": "Paleta azucarada Presentacion paquete x 20 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 70,
      "nombre": "Huevo sorpresa Presentacion caja x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 71,
      "nombre": "Tooth Brush y paste candy (cepillo) Presentacion caja x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 72,
      "nombre": "Gummy ball sandia Presentacion domo goma gigante y pequeña x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 73,
      "nombre": "Gummy ball ojos Presentacion domo goma gigante y pequeña x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 74,
      "nombre": "Panderos Presentacion tarro x 200 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 75,
      "nombre": "Mini copa de chocolate Presentacion tarro x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 76,
      "nombre": "Polvo acido Presentacion maya x 15 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 77,
      "nombre": "Pastillas Presentacion bolsa x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 78,
      "nombre": "Maní dulce Presentacion paquete x 20 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 79,
      "nombre": "Quipitos Presentacion caja x 24 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 80,
      "nombre": "Leche condensada Presentacion tubito x 25 gr, ristra x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 81,
      "nombre": "Oka Loka nanos Presentacion bolsa x 24 cajitas",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 82,
      "nombre": "Frunas original Presentacion bolsa x 32 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 83,
      "nombre": "Barrilete Presentacion bolsax 40 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 84,
      "nombre": "Sparkies linea Presentacion bolsa x 70 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 85,
      "nombre": "Chupeta Corazon Presentacion bolsa x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 86,
      "nombre": "Chupeta labios rojos Presentacion bolsa x 40 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 87,
      "nombre": "Goma mora Presentacion domo x 120 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 88,
      "nombre": "Goma Ratón Presentacion domo x 60 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 89,
      "nombre": "Mini Goma Presentacion domo x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 90,
      "nombre": "Goma ojos Presentacion domo x 60 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 91,
      "nombre": "Goma chupo Presentacion domo x 60 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 92,
      "nombre": "Goma dientes Presentacion domo x 60 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 93,
      "nombre": "Goma casco sandía Presentacion domo x 60 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 94,
      "nombre": "Goma surtida Presentacion domo x 60unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 95,
      "nombre": "Goma trolli Presentación paquetes surtidos",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 96,
      "nombre": "Roscas pan de Yuca Presentacion paquete x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 97,
      "nombre": "Papa chiss limon- pimienta Presentacion paquete x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 98,
      "nombre": "Pasabocas chiss limon Presentacion paquete x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 99,
      "nombre": "Pasabocas limón Presentacion paquete x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 100,
      "nombre": "Crispetas Presentacion paquete x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 101,
      "nombre": "Gaminas-ripio papa Presentacion paquete x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 102,
      "nombre": "Trocillitos limon y pollo Presentacion paquete x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 103,
      "nombre": "Galleta Ritz queso Presentacion paquete x 6 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 104,
      "nombre": "Galleta mini chips Presentacion paquete x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 105,
      "nombre": "Galleta Ducales Presentacion paquete x 9 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 106,
      "nombre": "Galleta club social Presentacion paquete x 9 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 107,
      "nombre": "Galleta club social Presentacion paquete x 9 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 108,
      "nombre": "Gelatina Estrella Presentacion paquete x 45 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 109,
      "nombre": "Gelatina de frutas Presentacion paquete x 20 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 110,
      "nombre": "Gela Toy, con sorpresa Presentacion paquete x 20 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 111,
      "nombre": "Gela Play Presentacion paquete x 25 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 112,
      "nombre": "Doritos queso Presentacion paquete x 10 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 113,
      "nombre": "De Todito Limon Presentacion paquete x 6 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 114,
      "nombre": "De Todito BBQ Presentacion paquete x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 115,
      "nombre": "Choclitos Limon Presentacion paquete x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 116,
      "nombre": "Lonchera Yupi Presentacion paquete x 25 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 117,
      "nombre": "Choco Ramo Presentacion paquete x 5 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 118,
      "nombre": "Mr. Brown minix Presentacion paquete x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 119,
      "nombre": "Cheese Tris Presentacion paquete x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 120,
      "nombre": "Mini chocoso Presentacion paquete x 20 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 121,
      "nombre": "Chocoso Presentacion paquete x 5 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 122,
      "nombre": "Pinguinos minix Presentacion paquete x 12 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 123,
      "nombre": "Submarinos Presentacion paquete x 6 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 124,
      "nombre": "Bocadillo azucarado Presentacion paquete x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 125,
      "nombre": "Bocadillo marqueta Presentacion paquete x 30 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 126,
      "nombre": "Bocadillo manjar Presentacion paquete x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 127,
      "nombre": "Menta Helada Ice Mint paquete x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 128,
      "nombre": "Confite moritas Presentacion paquete x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 129,
      "nombre": "Confite Fruticas rellenas Presentacion paquete x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 130,
      "nombre": "Big Bom XXL Presentacion paquete x 48 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 131,
      "nombre": "Confite Coffee Star Presentacion paquete x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 132,
      "nombre": "Chupeta Pink- Blue Hearts Presentacion paquete x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 133,
      "nombre": "Mordisquetas Presentacion paquete x 24 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 134,
      "nombre": "Bon Bon Bum Presentacion paquete x 24 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 135,
      "nombre": "Menta Helada Presentacion paquete x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 136,
      "nombre": "Masmelo Millows Presentacion paquete x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 137,
      "nombre": " Confite surtido Halloween Presentacion paquete x 200 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 138,
      "nombre": "Coffee Delight Presentacion paquete x 100 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 139,
      "nombre": "Nucita Presentacion paquete x 18 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 140,
      "nombre": "Choco Disk Presentacion caja x 18 unds y ristra x 6 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 141,
      "nombre": "Chupeta mangoos Presentacion paquete x 48 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 142,
      "nombre": "Nucita Presentacion paquete x 18 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 143,
      "nombre": "Chupetoon Presentacion paquete x 48 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 144,
      "nombre": "Trident individual Presentacion caja x 60 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "dulces"
  },
  {
      "id": 145,
      "nombre": "Encendedores Presentacion caja x 50 unds",
      "img": "https://licoresdelasabana.com/wp-content/uploads/2019/08/Papa-Margarita-Limon.jpg",
      "idCategoria": "otros"
  }
]

const loadDrinksProduct = async () => {
  const dataFiltrada = data.filter(p => p.idCategoria === "bebidas")
  dataFiltrada.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const imageElement = document.createElement("img");
      imageElement.src = product.img;
      imageElement.alt = product.nombre;

      const nameElement = document.createElement("h2");
      nameElement.textContent = product.nombre;


      productElement.appendChild(imageElement);
      productElement.appendChild(nameElement);

      productContainer.appendChild(productElement);
  });
}

loadDrinksProduct()
