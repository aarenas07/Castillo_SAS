
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
        "img": "../assets/mezcla_la_pecosita_800gr.jpeg",
        "idCategoria": "otros"
    },
    {
        "id": 21,
        "nombre": "Mezcla lactea en polvo La Pecosita Presentaciones en bolsa papel x 5kl y 1kl",
        "img": "../assets/leche_la_pecosita_5kl.jpeg",
        "idCategoria": "otros"
    },
    {
        "id": 22,
        "nombre": "Chocolate de mesa con azucar Al Gusto Presentacion por 500 gr y 250 gr",
        "img": "https://gracol.com.co/wp-content/uploads/2024/02/Al-Gusto.png",
        "idCategoria": "otros"
    },
    {
        "id": 23,
        "nombre": "Galleta Caritas Presentacion Domo por 100 unds",
        "img": "../assets/galletas_caritas.jpeg",
        "idCategoria": "panaderia"
    },
    {
        "id": 24,
        "nombre": "Galleta Coronas Presentacion Domo por 50 unds",
        "img": "../assets/galletas_coronas.jpeg",
        "idCategoria": "panaderia"
    },
    {
        "id": 25,
        "nombre": "Galleta deditos Presentacion Domo por 100 unds",
        "img": "https://dulceria.co/wp-content/uploads/2019/10/22-3-600x600.jpg",
        "idCategoria": "panaderia"
    },
    {
        "id": 26,
        "nombre": "Galleta Corazon Presentacion Domo por 60 unds",
        "img": "../assets/galletas_corazon.jpeg",
        "idCategoria": "panaderia"
    },
    {
        "id": 27,
        "nombre": "Galleta Girasol Presentacion Domo por 100 y 200 unds",
        "img": "https://dulceria.co/wp-content/uploads/2019/10/19-1.jpg",
        "idCategoria": "panaderia"
    },
    {
        "id": 28,
        "nombre": "Galleta cuca Presentacion bolsa x 30 unds",
        "img": "https://www.soldeoriente.co/shared/rs.php?rsid=1789",
        "idCategoria": "panaderia"
    },
    {
        "id": 29,
        "nombre": "Galleta punto rojo Presentacion bolsa x 30 unds",
        "img": "../assets/galletas_punto_rojo.jpeg",
        "idCategoria": "panaderia"
    },
    {
        "id": 30,
        "nombre": "Torta Maria Luisa Presentacion torta x 16 unds",
        "img": "https://reposteriamarialuisa.com/wp-content/uploads/2020/08/Marialuisa-de-arequipe-fondo-Blanco.jpg",
        "idCategoria": "panaderia"
    },
    {
        "id": 31,
        "nombre": "Torta Maria Luisa Presentacion domo x 40 unds",
        "img": "../assets/torta_maria_luisa_x40uds.jpeg",
        "idCategoria": "panaderia"
    },
    {
        "id": 32,
        "nombre": "Torta Maria Luisa Nelson Presentacion paquete x 10 unds",
        "img": "../assets/galletas_nelson.jpeg",
        "idCategoria": "panaderia"
    },
    {
        "id": 33,
        "nombre": "Torta mantecada Presentacion domo x 14 unds",
        "img": "../assets/torta_mantecada.jpeg",
        "idCategoria": "panaderia"
    },
    {
        "id": 34,
        "nombre": "Torta Envinada Presentacion domo x 14 unds",
        "img": "../assets/torta_envinada.jpeg",
        "idCategoria": "panaderia"
    },
    {
        "id": 35,
        "nombre": "Pera Presentacion domo x 12 unds",
        "img": "../assets/pera.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 36,
        "nombre": "Rollo Presentacion domo x 10 unds",
        "img": "../assets/rollo.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 37,
        "nombre": "Gelatina blanca Presentacion domo x 30 unds",
        "img": "../assets/gelatina_blanca.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 38,
        "nombre": "Pastel enrollado Presentacion domo x 12 unds",
        "img": "../assets/pastel_enrollado.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 39,
        "nombre": "Pastel de guayaba Presentacion domo x 60 unds",
        "img": "../assets/pastel_guayaba.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 40,
        "nombre": "Pastel Chicharron de guayaba Presentacion domo x 7 unds",
        "img": "../assets/pastel_guayaba_chicharron.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 41,
        "nombre": "Pastel Pañoleta de arequipe Presentacion domo x 12 unds",
        "img": "../assets/pastel_pañoleta.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 42,
        "nombre": "Pastel de guayaba Presentacion domo x 14 unds",
        "img": "../assets/pastel_guayaba_x14.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 43,
        "nombre": "Pastel de guayaba Presentacion domo x 30 unds",
        "img": "../assets/pastel_guayaba_x30.jpg",
        "idCategoria": "panaderia"
    },
    {
        "id": 44,
        "nombre": "Pastel encarcelado de guayaba y arequipe Presentacion paquete x 8 unds",
        "img": "../assets/pastel_encarcelado.jpg",
        "idCategoria": "panaderia"
    },
    {
        "id": 45,
        "nombre": "Merengues Presentacion domo x 60 unds",
        "img": "../assets/merengues.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 46,
        "nombre": "Masmelos Presentacion domo x 50 unds",
        "img": "../assets/masmelos.png",
        "idCategoria": "panaderia"
    },
    {
        "id": 47,
        "nombre": "Tetero Minisigui Presentacion paquete x 12 unds",
        "img": "../assets/tetero_minisigui.png",
        "idCategoria": "dulces"
    },
    {
        "id": 48,
        "nombre": "Pitillo Minisigui Presentacion paquete x 20 unds",
        "img": "../assets/pitillo_minisigui.png",
        "idCategoria": "dulces"
    },
    {
        "id": 49,
        "nombre": "Vaso Minisigui Presentacion paquete x 20 unds",
        "img": "../assets/vaso_minisigui.png",
        "idCategoria": "dulces"
    },
    {
        "id": 50,
        "nombre": "Tamarindo Presentacion domo x 50 unds",
        "img": "../assets/tamarindo.png",
        "idCategoria": "dulces"
    },
    {
        "id": 51,
        "nombre": "Panela Galleta Presentacion domo x 50 unds",
        "img": "../assets/panela_galleta.png",
        "idCategoria": "dulces"
    },
    {
        "id": 52,
        "nombre": "Barquillo Presentacion domo x 50 unds",
        "img": "../assets/barquillo.png",
        "idCategoria": "dulces"
    },
    {
        "id": 53,
        "nombre": "Panela Cuadrada Presentacion domo x 50 unds",
        "img": "../assets/panela_cuadrada.png",
        "idCategoria": "dulces"
    },
    {
        "id": 54,
        "nombre": "Vaso de arequipe Presentacion x 30 unds",
        "img": "../assets/vaso_arequipe.png",
        "idCategoria": "dulces"
    },
    {
        "id": 55,
        "nombre": "Vaso cono de galleta relleno de arequipe Presentacion domo x 12 unds",
        "img": "../assets/vaso_galleta_relleno.jpg",
        "idCategoria": "dulces"
    },
    {
        "id": 56,
        "nombre": "Dulce Ducrem Presentacion x 36 unds",
        "img": "../assets/dulce_ducream.png",
        "idCategoria": "dulces"
    },
    {
        "id": 57,
        "nombre": "Chocmelo Presentacion domo x 65 unds",
        "img": "../assets/chocmelo.png"
    },
    {
        "id": 58,
        "nombre": "Bola chicle fuego Presentacion domo x 80 unds",
        "img": "../assets/bola_chicle_fuego.png",
        "idCategoria": "dulces"
    },
    {
        "id": 59,
        "nombre": "Bola Anisada Presentacion domo x 100 unds",
        "img": "../assets/bola_anisada.png",
        "idCategoria": "dulces"
    },
    {
        "id": 60,
        "nombre": "Bola almendra Presentacion domo x 100 unds",
        "img": "../assets/bola_almendra.png",
        "idCategoria": "dulces"
    },
    {
        "id": 61,
        "nombre": "Bola Coco Presentacion domo x 50 unds",
        "img": "../assets/bola_coco.png",
        "idCategoria": "dulces"
    },
    {
        "id": 62,
        "nombre": "Bola Mango Biche Presentacion domo x 100 unds",
        "img": "../assets/bola_mango.png",
        "idCategoria": "dulces"
    },
    {
        "id": 63,
        "nombre": "Boloncho chicle Presentacion domo x 30 unds",
        "img": "../assets/boloncho.png",
        "idCategoria": "dulces"
    },
    {
        "id": 64,
        "nombre": "Bola Chicle Presentacion domo x 80 unds",
        "img": "../assets/bola_chicle_x80.png",
        "idCategoria": "dulces"
    },
    {
        "id": 65,
        "nombre": "Figura moneda menta Presentacion domo x 100 unds",
        "img": "../assets/figura_moneda.png",
        "idCategoria": "dulces"
    },
    {
        "id": 66,
        "nombre": "Cigarrillo menta Presentacion domo x 80 unds",
        "img": "../assets/cigarrillo_menta.png",
        "idCategoria": "dulces"
    },
    {
        "id": 67,
        "nombre": "Mazapan Presentacion domo x 50 unds",
        "img": "../assets/mazapan.png",
        "idCategoria": "dulces"
    },
    {
        "id": 68,
        "nombre": "Chipirrin Presentacion domo x 30 unds",
        "img": "../assets/chipirrin.png",
        "idCategoria": "dulces"
    },
    {
        "id": 69,
        "nombre": "Paleta azucarada Presentacion paquete x 20 unds",
        "img": "../assets/paleta_azucarada.png",
        "idCategoria": "dulces"
    },
    {
        "id": 70,
        "nombre": "Huevo sorpresa Presentacion caja x 12 unds",
        "img": "../assets/huevo_sorpresa.png",
        "idCategoria": "dulces"
    },
    {
        "id": 71,
        "nombre": "Tooth Brush y paste candy (cepillo) Presentacion caja x 30 unds",
        "img": "../assets/tooth_brush.png",
        "idCategoria": "dulces"
    },
    {
        "id": 72,
        "nombre": "Gummy ball sandia Presentacion domo goma gigante y pequeña x 50 unds",
        "img": "../assets/gummy_sandia.png",
        "idCategoria": "dulces"
    },
    {
        "id": 73,
        "nombre": "Gummy ball ojos Presentacion domo goma gigante y pequeña x 50 unds",
        "img": "../assets/gummy_ojos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 74,
        "nombre": "Panderos Presentacion tarro x 200 unds",
        "img": "../assets/panderos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 75,
        "nombre": "Mini copa de chocolate Presentacion tarro x 100 unds",
        "img": "../assets/mini_copa.png",
        "idCategoria": "dulces"
    },
    {
        "id": 76,
        "nombre": "Polvo acido Presentacion maya x 15 unds",
        "img": "../assets/polvo_acido.png",
        "idCategoria": "dulces"
    },
    {
        "id": 77,
        "nombre": "Pastillas Presentacion bolsa x 100 unds",
        "img": "../assets/pastilla.png",
        "idCategoria": "dulces"
    },
    {
        "id": 78,
        "nombre": "Maní dulce Presentacion paquete x 20 unds",
        "img": "../assets/mani_dulce.png",
        "idCategoria": "dulces"
    },
    {
        "id": 79,
        "nombre": "Quipitos Presentacion caja x 24 unds",
        "img": "../assets/quipitos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 80,
        "nombre": "Leche condensada Presentacion tubito x 25 gr, ristra x 12 unds",
        "img": "../assets/leche_condensada.jpg",
        "idCategoria": "dulces"
    },
    {
        "id": 81,
        "nombre": "Oka Loka nanos Presentacion bolsa x 24 cajitas",
        "img": "../assets/okaloka.png",
        "idCategoria": "dulces"
    },
    {
        "id": 82,
        "nombre": "Frunas original Presentacion bolsa x 32 unds",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbCws9GZYPC7uiQ-fb7TSlXsHYSOPW674VVyVvVIkDA&s",
        "idCategoria": "dulces"
    },
    {
        "id": 83,
        "nombre": "Barrilete Presentacion bolsax 40 unds",
        "img": "../assets/barrilete.png",
        "idCategoria": "dulces"
    },
    {
        "id": 84,
        "nombre": "Sparkies linea Presentacion bolsa x 70 unds",
        "img": "../assets/sparkies.png",
        "idCategoria": "dulces"
    },
    {
        "id": 85,
        "nombre": "Chupeta Corazon Presentacion bolsa x 50 unds",
        "img": "../assets/chupeta_corazon.png",
        "idCategoria": "dulces"
    },
    {
        "id": 86,
        "nombre": "Chupeta labios rojos Presentacion bolsa x 40 unds",
        "img": "../assets/chupeta_labios.png",
        "idCategoria": "dulces"
    },
    {
        "id": 87,
        "nombre": "Goma mora Presentacion domo x 120 unds",
        "img": "../assets/goma_mora.png",
        "idCategoria": "dulces"
    },
    {
        "id": 88,
        "nombre": "Goma Ratón Presentacion domo x 60 unds",
        "img": "../assets/goma_raton.png",
        "idCategoria": "dulces"
    },
    {
        "id": 89,
        "nombre": "Mini Goma Presentacion domo x 100 unds",
        "img": "../assets/mini_goma.png",
        "idCategoria": "dulces"
    },
    {
        "id": 90,
        "nombre": "Goma ojos Presentacion domo x 60 unds",
        "img": "../assets/goma_ojos_x60.png",
        "idCategoria": "dulces"
    },
    {
        "id": 91,
        "nombre": "Goma chupo Presentacion domo x 60 unds",
        "img": "../assets/goma_chupos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 92,
        "nombre": "Goma dientes Presentacion domo x 60 unds",
        "img": "../assets/goma_dientes.png",
        "idCategoria": "dulces"
    },
    {
        "id": 93,
        "nombre": "Goma casco sandía Presentacion domo x 60 unds",
        "img": "../assets/goma_casco_sandia.png",
        "idCategoria": "dulces"
    },
    {
        "id": 94,
        "nombre": "Goma surtida Presentacion domo x 60unds",
        "img": "../assets/goma_surtida.png",
        "idCategoria": "dulces"
    },
    {
        "id": 95,
        "nombre": "Goma trolli Presentación paquetes surtidos",
        "img": "../assets/goma_trolli.png",
        "idCategoria": "dulces"
    },
    {
        "id": 96,
        "nombre": "Roscas pan de Yuca Presentacion paquete x 12 unds",
        "img": "../assets/roscas_pandeyuca.jpg",
        "idCategoria": "dulces"
    },
    {
        "id": 97,
        "nombre": "Papa chiss limon- pimienta Presentacion paquete x 30 unds",
        "img": "../assets/papa_chiss.png",
        "idCategoria": "dulces"
    },
    {
        "id": 98,
        "nombre": "Pasabocas chiss limon Presentacion paquete x 30 unds",
        "img": "../assets/pasabocas_chiss.png",
        "idCategoria": "dulces"
    },
    {
        "id": 99,
        "nombre": "Pasabocas limón Presentacion paquete x 12 unds",
        "img": "../assets/pasabocas_limon.png",
        "idCategoria": "dulces"
    },
    {
        "id": 100,
        "nombre": "Crispetas Presentacion paquete x 30 unds",
        "img": "../assets/crispetas.png",
        "idCategoria": "dulces"
    },
    {
        "id": 101,
        "nombre": "Gaminas-ripio papa Presentacion paquete x 30 unds",
        "img": "../assets/gaminas_ripio.png",
        "idCategoria": "dulces"
    },
    {
        "id": 102,
        "nombre": "Trocillitos limon y pollo Presentacion paquete x 12 unds",
        "img": "../assets/trocillos_limon.png",
        "idCategoria": "dulces"
    },
    {
        "id": 103,
        "nombre": "Galleta Ritz queso Presentacion paquete x 6 unds",
        "img": "../assets/galletas_ritz.png",
        "idCategoria": "dulces"
    },
    {
        "id": 104,
        "nombre": "Galleta mini chips Presentacion paquete x 12 unds",
        "img": "../assets/minichips.png",
        "idCategoria": "dulces"
    },
    {
        "id": 105,
        "nombre": "Galleta Ducales Presentacion paquete x 9 unds",
        "img": "../assets/galletas_ducales.png",
        "idCategoria": "dulces"
    },
    {
        "id": 106,
        "nombre": "Galleta club social Presentacion paquete x 9 unds",
        "img": "../assets/galletas_clubsocial.png",
        "idCategoria": "dulces"
    },
    {
        "id": 108,
        "nombre": "Gelatina Estrella Presentacion paquete x 45 unds",
        "img": "../assets/gelatina_estrella.png",
        "idCategoria": "dulces"
    },
    {
        "id": 109,
        "nombre": "Gelatina de frutas Presentacion paquete x 20 unds",
        "img": "../assets/gelatina_frutas.png",
        "idCategoria": "dulces"
    },
    {
        "id": 110,
        "nombre": "Gela Toy, con sorpresa Presentacion paquete x 20 unds",
        "img": "../assets/gela_toy.png",
        "idCategoria": "dulces"
    },
    {
        "id": 111,
        "nombre": "Gela Play Presentacion paquete x 25 unds",
        "img": "../assets/gela_play.png",
        "idCategoria": "dulces"
    },
    {
        "id": 112,
        "nombre": "Doritos queso Presentacion paquete x 10 unds",
        "img": "../assets/doritos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 113,
        "nombre": "De Todito Limon Presentacion paquete x 6 unds",
        "img": "../assets/detodito.png",
        "idCategoria": "dulces"
    },
    {
        "id": 114,
        "nombre": "De Todito BBQ Presentacion paquete x 12 unds",
        "img": "../assets/detodito_bbq.png",
        "idCategoria": "dulces"
    },
    {
        "id": 115,
        "nombre": "Choclitos Limon Presentacion paquete x 12 unds",
        "img": "../assets/choclitos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 116,
        "nombre": "Lonchera Yupi Presentacion paquete x 25 unds",
        "img": "../assets/lonchera_yupi.png",
        "idCategoria": "dulces"
    },
    {
        "id": 117,
        "nombre": "Choco Ramo Presentacion paquete x 5 unds",
        "img": "../assets/chocoramo.png",
        "idCategoria": "dulces"
    },
    {
        "id": 118,
        "nombre": "Mr. Brown minix Presentacion paquete x 30 unds",
        "img": "../assets/mrbrown.png",
        "idCategoria": "dulces"
    },
    {
        "id": 119,
        "nombre": "Cheese Tris Presentacion paquete x 12 unds",
        "img": "../assets/cheesetris.png",
        "idCategoria": "dulces"
    },
    {
        "id": 120,
        "nombre": "Mini chocoso Presentacion paquete x 20 unds",
        "img": "../assets/mini_chocoso.png",
        "idCategoria": "dulces"
    },
    {
        "id": 121,
        "nombre": "Chocoso Presentacion paquete x 5 unds",
        "img": "../assets/chocoso.png",
        "idCategoria": "dulces"
    },
    {
        "id": 122,
        "nombre": "Pinguinos minix Presentacion paquete x 12 unds",
        "img": "../assets/pinguinos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 123,
        "nombre": "Submarinos Presentacion paquete x 6 unds",
        "img": "https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/7/7705326081223_24.jpg",
        "idCategoria": "dulces"
    },
    {
        "id": 124,
        "nombre": "Bocadillo azucarado Presentacion paquete x 50 unds",
        "img": "../assets/bocadillos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 125,
        "nombre": "Bocadillo marqueta Presentacion paquete x 30 unds",
        "img": "../assets/bocadillo_marqueta.png",
        "idCategoria": "dulces"
    },
    {
        "id": 126,
        "nombre": "Bocadillo manjar Presentacion paquete x 50 unds",
        "img": "../assets/bocadillo_manjar.png",
        "idCategoria": "dulces"
    },
    {
        "id": 127,
        "nombre": "Menta Helada Ice Mint paquete x 100 unds",
        "img": "../assets/icemint.png",
        "idCategoria": "dulces"
    },
    {
        "id": 128,
        "nombre": "Confite moritas Presentacion paquete x 100 unds",
        "img": "../assets/confite_moritas.png",
        "idCategoria": "dulces"
    },
    {
        "id": 129,
        "nombre": "Confite Fruticas rellenas Presentacion paquete x 100 unds",
        "img": "../assets/confite_fruticas.png",
        "idCategoria": "dulces"
    },
    {
        "id": 130,
        "nombre": "Big Bom XXL Presentacion paquete x 48 unds",
        "img": "../assets/bigboom.png",
        "idCategoria": "dulces"
    },
    {
        "id": 131,
        "nombre": "Confite Coffee Star Presentacion paquete x 100 unds",
        "img": "../assets/confite_coffe.png",
        "idCategoria": "dulces"
    },
    {
        "id": 132,
        "nombre": "Chupeta Pink- Blue Hearts Presentacion paquete x 50 unds",
        "img": "../assets/chupeta_pink.png",
        "idCategoria": "dulces"
    },
    {
        "id": 133,
        "nombre": "Mordisquetas Presentacion paquete x 24 unds",
        "img": "../assets/mordisquetas.png",
        "idCategoria": "dulces"
    },
    {
        "id": 134,
        "nombre": "Bon Bon Bum Presentacion paquete x 24 unds",
        "img": "../assets/bonbonbum.png",
        "idCategoria": "dulces"
    },
    {
        "id": 135,
        "nombre": "Menta Helada Presentacion paquete x 100 unds",
        "img": "../assets/menta_helada.png",
        "idCategoria": "dulces"
    },
    {
        "id": 136,
        "nombre": "Masmelo Millows Presentacion paquete x 50 unds",
        "img": "../assets/masmelos_millows.jpg",
        "idCategoria": "dulces"
    },
    {
        "id": 137,
        "nombre": " Confite surtido Halloween Presentacion paquete x 200 unds",
        "img": "../assets/confite_surtido.png",
        "idCategoria": "dulces"
    },
    {
        "id": 138,
        "nombre": "Coffee Delight Presentacion paquete x 100 unds",
        "img": "https://villavoexpress.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsiZGF0YSI6Mzc0NTYsInB1ciI6ImJsb2JfaWQifX0=--cac9526b85fbdc2e95472e4612c6696336c19e63/coffee-dle-light-caramelo-duro-de-cafe-por-100-unidades.png?locale=es",
        "idCategoria": "dulces"
    },
    {
        "id": 139,
        "nombre": "Nucita Presentacion paquete x 18 unds",
        "img": "../assets/nucita.png",
        "idCategoria": "dulces"
    },
    {
        "id": 140,
        "nombre": "Choco Disk Presentacion caja x 18 unds y ristra x 6 unds",
        "img": "../assets/chokodisk.png",
        "idCategoria": "dulces"
    },
    {
        "id": 141,
        "nombre": "Chupeta mangoos Presentacion paquete x 48 unds",
        "img": "../assets/mangoos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 147,
        "nombre": "Chaos presentacion paquete x 18 unds",
        "img": "../assets/chaos.png",
        "idCategoria": "dulces"
    },
    {
        "id": 143,
        "nombre": "Chupetoon Presentacion paquete x 48 unds",
        "img": "../assets/chupetoon.png",
        "idCategoria": "dulces"
    },
    {
        "id": 144,
        "nombre": "Trident individual Presentacion caja x 60 unds",
        "img": "../assets/trident.png",
        "idCategoria": "dulces"
    },
    {
        "id": 145,
        "nombre": "Encendedores Presentacion caja x 50 unds",
        "img": "../assets/encendedores.png",
        "idCategoria": "otros"
    }
]
const loadCandyProducts = async () => {
   
  const dataFiltrada = data.filter(p => p.idCategoria === "dulces")
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

loadCandyProducts()
