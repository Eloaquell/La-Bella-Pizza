/* =========================================================
   LA BELLA PIZZA — SCRIPT.JS
   Versão estática funcional: index + cardápio + entregas
   ========================================================= */

"use strict";

const PIZZAS = [
  {id:1,nome:'Margherita Clássica',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/Pizza Margherita.png ",precos:{P:38.90,M:48.90,G:58.90,GG:68.90},tags:['🍕 Tradicional'],popular:20},
  {id:2,nome:'Calabresa Especial',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/calabresa.png",precos:{P:39.20,M:49.20,G:59.20,GG:69.20},tags:['🍕 Tradicional'],popular:19},
  {id:3,nome:'Portuguesa',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/portuguesa.png",precos:{P:39.50,M:49.50,G:59.50,GG:69.50},tags:['🍕 Tradicional'],popular:18},
  {id:4,nome:'Napolitana',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/napolitana.png",precos:{P:39.80,M:49.80,G:59.80,GG:69.80},tags:['🍕 Tradicional'],popular:17},
  {id:5,nome:'Milho com Bacon',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/milho e bacon.png",precos:{P:40.10,M:50.10,G:60.10,GG:70.10},tags:['🍕 Tradicional'],popular:16},
  {id:6,nome:'Presunto e Mussarela',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/Presunto e Muçarela.png",precos:{P:40.40,M:50.40,G:60.40,GG:70.40},tags:['🍕 Tradicional'],popular:15},
  {id:7,nome:'Bacon Tradicional',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/Bacon.png",precos:{P:40.70,M:50.70,G:60.70,GG:70.70},tags:['🍕 Tradicional'],popular:14},
  {id:8,nome:'Pepperoni Clássica',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/pepperoni.png",precos:{P:41.00,M:51.00,G:61.00,GG:71.00},tags:['🍕 Tradicional'],popular:13},
  {id:9,nome:'Alho e Óleo',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/alhoeoleo.png",precos:{P:41.30,M:51.30,G:61.30,GG:71.30},tags:['🍕 Tradicional'],popular:12},
  {id:10,nome:'Baiana',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/baiana.png",precos:{P:41.60,M:51.60,G:61.60,GG:71.60},tags:['🍕 Tradicional'],popular:11},
  {id:11,nome:'Lombo Canadense',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/lombocanadense.png",precos:{P:41.90,M:51.90,G:61.90,GG:71.90},tags:['🍕 Tradicional'],popular:10},
  {id:12,nome:'Atum com Cebola',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/atumcomcebola.webp",precos:{P:42.20,M:52.20,G:62.20,GG:72.20},tags:['🍕 Tradicional'],popular:9},
  {id:13,nome:'Frango Cremoso',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/frangocremoso.webp",precos:{P:42.50,M:52.50,G:62.50,GG:72.50},tags:['🍕 Tradicional'],popular:8},
  {id:14,nome:'Bacon com Ovos',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/baconcomovos.webp",precos:{P:42.80,M:52.80,G:62.80,GG:72.80},tags:['🍕 Tradicional'],popular:7},
  {id:15,nome:'Calabresa Acebolada',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/calabresa.png",precos:{P:43.10,M:53.10,G:63.10,GG:73.10},tags:['🍕 Tradicional'],popular:6},
  {id:16,nome:'Presunto Especial',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/presuntodacasa.webp",precos:{P:43.40,M:53.40,G:63.40,GG:73.40},tags:['🍕 Tradicional'],popular:5},
  {id:17,nome:'Mussarela da Casa',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/mussareladacasa.webp",precos:{P:43.70,M:53.70,G:63.70,GG:73.70},tags:['🍕 Tradicional'],popular:4},
  {id:18,nome:'Siciliana',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/siciliana.webp",precos:{P:44.00,M:54.00,G:64.00,GG:74.00},tags:['🍕 Tradicional'],popular:3},
  {id:19,nome:'Toscana',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/toscana.webp",precos:{P:44.30,M:54.30,G:64.30,GG:74.30},tags:['🍕 Tradicional'],popular:2},
  {id:20,nome:'Moda da Casa',descricao:'Molho de tomate artesanal, queijo selecionado e ingredientes clássicos.',categoria:"tradicional",imagem:"images/modadacasa.png",precos:{P:44.60,M:54.60,G:64.60,GG:74.60},tags:['🍕 Tradicional'],popular:1},
  {id:21,nome:'Quatro Queijos',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/quatroqueijos.png",precos:{P:42.90,M:52.90,G:62.90,GG:72.90},tags:['⭐ Especial'],popular:20},
  {id:22,nome:'Frango com Catupiry',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/frangocomcatupiry.png",precos:{P:43.20,M:53.20,G:63.20,GG:73.20},tags:['⭐ Especial'],popular:19},
  {id:23,nome:'Lombo com Catupiry',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/lombocomcatupiry.webp",precos:{P:43.50,M:53.50,G:63.50,GG:73.50},tags:['⭐ Especial'],popular:18},
  {id:24,nome:'Carne Seca com Requeijão',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/carnesecacomrequeijao.webp",precos:{P:43.80,M:53.80,G:63.80,GG:73.80},tags:['⭐ Especial'],popular:17},
  {id:25,nome:'Camarão Cremoso',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/camarao-cremoso.jpg",precos:{P:44.10,M:54.10,G:64.10,GG:74.10},tags:['⭐ Especial'],popular:16},
  {id:26,nome:'Pepperoni Supremo',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/pepperoni-supremo.jpg",precos:{P:44.40,M:54.40,G:64.40,GG:74.40},tags:['⭐ Especial'],popular:15},
  {id:27,nome:'Brócolis com Bacon',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/brocolis-com-bacon.jpg",precos:{P:44.70,M:54.70,G:64.70,GG:74.70},tags:['⭐ Especial'],popular:14},
  {id:28,nome:'Frango Cheddar',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/frango-cheddar.jpg",precos:{P:45.00,M:55.00,G:65.00,GG:75.00},tags:['⭐ Especial'],popular:13},
  {id:29,nome:'Costela Desfiada',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/costela-desfiada.jpg",precos:{P:45.30,M:55.30,G:65.30,GG:75.30},tags:['⭐ Especial'],popular:12},
  {id:30,nome:'Parmegiana',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/parmegiana.jpg",precos:{P:45.60,M:55.60,G:65.60,GG:75.60},tags:['⭐ Especial'],popular:11},
  {id:31,nome:'Mexicana',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/mexicana.jpg",precos:{P:45.90,M:55.90,G:65.90,GG:75.90},tags:['⭐ Especial'],popular:10},
  {id:32,nome:'Calabresa com Cheddar',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/calabresa-com-cheddar.jpg",precos:{P:46.20,M:56.20,G:66.20,GG:76.20},tags:['⭐ Especial'],popular:9},
  {id:33,nome:'Lombo Barbecue',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/lombo-barbecue.jpg",precos:{P:46.50,M:56.50,G:66.50,GG:76.50},tags:['⭐ Especial'],popular:8},
  {id:34,nome:'Filé ao Molho Madeira',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/file-ao-molho-madeira.jpg",precos:{P:46.80,M:56.80,G:66.80,GG:76.80},tags:['⭐ Especial'],popular:7},
  {id:35,nome:'Bacon e Gorgonzola',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/bacon-e-gorgonzola.jpg",precos:{P:47.10,M:57.10,G:67.10,GG:77.10},tags:['⭐ Especial'],popular:6},
  {id:36,nome:'Frango com Milho Premium',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/frango-com-milho-premium.jpg",precos:{P:47.40,M:57.40,G:67.40,GG:77.40},tags:['⭐ Especial'],popular:5},
  {id:37,nome:'Crocante de Cebola',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/crocante-de-cebola.jpg",precos:{P:47.70,M:57.70,G:67.70,GG:77.70},tags:['⭐ Especial'],popular:4},
  {id:38,nome:'Alho-Poró com Queijo',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/alho-poro-com-queijo.jpg",precos:{P:48.00,M:58.00,G:68.00,GG:78.00},tags:['⭐ Especial'],popular:3},
  {id:39,nome:'Linguiça Artesanal',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/linguica-artesanal.jpg",precos:{P:48.30,M:58.30,G:68.30,GG:78.30},tags:['⭐ Especial'],popular:2},
  {id:40,nome:'Cinco Queijos',descricao:'Combinação especial de ingredientes frescos e queijo cremoso.',categoria:"especial",imagem:"images/pizzas/cinco-queijos.jpg",precos:{P:48.60,M:58.60,G:68.60,GG:78.60},tags:['⭐ Especial'],popular:1},
  {id:41,nome:'La Bella Premium',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/la-bella-premium.jpg",precos:{P:49.90,M:59.90,G:69.90,GG:79.90},tags:['👑 Premium'],popular:20},
  {id:42,nome:'Parma com Rúcula',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/parma-com-rucula.jpg",precos:{P:50.20,M:60.20,G:70.20,GG:80.20},tags:['👑 Premium'],popular:19},
  {id:43,nome:'Burrata Mediterrânea',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/modadacasa.png",precos:{P:50.50,M:60.50,G:70.50,GG:80.50},tags:['👑 Premium'],popular:18},
  {id:44,nome:'Trufada de Cogumelos',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/trufada-de-cogumelos.jpg",precos:{P:50.80,M:60.80,G:70.80,GG:80.80},tags:['👑 Premium'],popular:17},
  {id:45,nome:'Filé Mignon com Brie',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/file-mignon-com-brie.jpg",precos:{P:51.10,M:61.10,G:71.10,GG:81.10},tags:['👑 Premium'],popular:16},
  {id:46,nome:'Salmão Defumado',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/salmao-defumado.jpg",precos:{P:51.40,M:61.40,G:71.40,GG:81.40},tags:['👑 Premium'],popular:15},
  {id:47,nome:'Camarão ao Pesto',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/camarao-ao-pesto.jpg",precos:{P:51.70,M:61.70,G:71.70,GG:81.70},tags:['👑 Premium'],popular:14},
  {id:48,nome:'Prosciutto e Figo',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/prosciutto-e-figo.jpg",precos:{P:52.00,M:62.00,G:72.00,GG:82.00},tags:['👑 Premium'],popular:13},
  {id:49,nome:'Pistache e Burrata',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/pistache-e-burrata.jpg",precos:{P:52.30,M:62.30,G:72.30,GG:82.30},tags:['👑 Premium'],popular:12},
  {id:50,nome:'Brie com Damasco',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/brie-com-damasco.jpg",precos:{P:52.60,M:62.60,G:72.60,GG:82.60},tags:['👑 Premium'],popular:11},
  {id:51,nome:'Costela Premium',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/costela-premium.jpg",precos:{P:52.90,M:62.90,G:72.90,GG:82.90},tags:['👑 Premium'],popular:10},
  {id:52,nome:'Tomate Confit',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/tomate-confit.jpg",precos:{P:53.20,M:63.20,G:73.20,GG:83.20},tags:['👑 Premium'],popular:9},
  {id:53,nome:'Pesto Genovês',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/pesto-genoves.jpg",precos:{P:53.50,M:63.50,G:73.50,GG:83.50},tags:['👑 Premium'],popular:8},
  {id:54,nome:'Funghi Especial',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/funghi-especial.jpg",precos:{P:53.80,M:63.80,G:73.80,GG:83.80},tags:['👑 Premium'],popular:7},
  {id:55,nome:'Parma com Burrata',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/parma-com-burrata.jpg",precos:{P:54.10,M:64.10,G:74.10,GG:84.10},tags:['👑 Premium'],popular:6},
  {id:56,nome:'Cordeiro Mediterrâneo',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/cordeiro-mediterraneo.jpg",precos:{P:54.40,M:64.40,G:74.40,GG:84.40},tags:['👑 Premium'],popular:5},
  {id:57,nome:'Gorgonzola com Pera',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/gorgonzola-com-pera.jpg",precos:{P:54.70,M:64.70,G:74.70,GG:84.70},tags:['👑 Premium'],popular:4},
  {id:58,nome:'Alcachofra Nobre',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/alcachofra-nobre.jpg",precos:{P:55.00,M:65.00,G:75.00,GG:85.00},tags:['👑 Premium'],popular:3},
  {id:59,nome:'Lagosta da Costa',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/lagosta-da-costa.jpg",precos:{P:55.30,M:65.30,G:75.30,GG:85.30},tags:['👑 Premium'],popular:2},
  {id:60,nome:'Ouro da Casa',descricao:'Ingredientes selecionados e acabamento gourmet da casa.',categoria:"premium",imagem:"images/pizzas/ouro-da-casa.jpg",precos:{P:55.60,M:65.60,G:75.60,GG:85.60},tags:['👑 Premium'],popular:1},
  {id:61,nome:'Vegetariana Garden',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/vegetariana-garden.jpg",precos:{P:41.90,M:51.90,G:61.90,GG:71.90},tags:['🌿 Vegetariana'],popular:20},
  {id:62,nome:'Caprese',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/caprese.jpg",precos:{P:42.20,M:52.20,G:62.20,GG:72.20},tags:['🌿 Vegetariana'],popular:19},
  {id:63,nome:'Rúcula com Tomate Seco',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/rucula-com-tomate-seco.jpg",precos:{P:42.50,M:52.50,G:62.50,GG:72.50},tags:['🌿 Vegetariana'],popular:18},
  {id:64,nome:'Cogumelos da Mata',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/cogumelos-da-mata.jpg",precos:{P:42.80,M:52.80,G:62.80,GG:72.80},tags:['🌿 Vegetariana'],popular:17},
  {id:65,nome:'Brócolis Cremoso',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/brocolis-cremoso.jpg",precos:{P:43.10,M:53.10,G:63.10,GG:73.10},tags:['🌿 Vegetariana'],popular:16},
  {id:66,nome:'Abobrinha Grelhada',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/abobrinha-grelhada.jpg",precos:{P:43.40,M:53.40,G:63.40,GG:73.40},tags:['🌿 Vegetariana'],popular:15},
  {id:67,nome:'Milho Verde',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/milho-verde.jpg",precos:{P:43.70,M:53.70,G:63.70,GG:73.70},tags:['🌿 Vegetariana'],popular:14},
  {id:68,nome:'Palmito com Alho-Poró',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/palmito-com-alho-poro.jpg",precos:{P:44.00,M:54.00,G:64.00,GG:74.00},tags:['🌿 Vegetariana'],popular:13},
  {id:69,nome:'Mediterrânea Veggie',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/mediterranea-veggie.jpg",precos:{P:44.30,M:54.30,G:64.30,GG:74.30},tags:['🌿 Vegetariana'],popular:12},
  {id:70,nome:'Quatro Vegetais',descricao:'Legumes frescos, ervas aromáticas e queijos selecionados.',categoria:"vegetariana",imagem:"images/pizzas/quatro-vegetais.jpg",precos:{P:44.60,M:54.60,G:64.60,GG:74.60},tags:['🌿 Vegetariana'],popular:11},
  {id:71,nome:'Chocolate com Morango',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/chocolate-com-morango.jpg",precos:{P:39.90,M:49.90,G:59.90,GG:69.90},tags:['🍫 Doce'],popular:20},
  {id:72,nome:'Brigadeiro',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/brigadeiro.jpg",precos:{P:40.20,M:50.20,G:60.20,GG:70.20},tags:['🍫 Doce'],popular:19},
  {id:73,nome:'Banana com Canela',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/banana-com-canela.jpg",precos:{P:40.50,M:50.50,G:60.50,GG:70.50},tags:['🍫 Doce'],popular:18},
  {id:74,nome:'Romeu e Julieta',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/romeu-e-julieta.jpg",precos:{P:40.80,M:50.80,G:60.80,GG:70.80},tags:['🍫 Doce'],popular:17},
  {id:75,nome:'Chocolate Branco',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/chocolate-branco.jpg",precos:{P:41.10,M:51.10,G:61.10,GG:71.10},tags:['🍫 Doce'],popular:16},
  {id:76,nome:'Prestígio',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/prestigio.jpg",precos:{P:41.40,M:51.40,G:61.40,GG:71.40},tags:['🍫 Doce'],popular:15},
  {id:77,nome:'Doce de Leite com Coco',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/doce-de-leite-com-coco.jpg",precos:{P:41.70,M:51.70,G:61.70,GG:71.70},tags:['🍫 Doce'],popular:14},
  {id:78,nome:'Nutella com Avelã',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/nutella-com-avela.jpg",precos:{P:42.00,M:52.00,G:62.00,GG:72.00},tags:['🍫 Doce'],popular:13},
  {id:79,nome:'Paçoca Cremosa',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/pacoca-cremosa.jpg",precos:{P:42.30,M:52.30,G:62.30,GG:72.30},tags:['🍫 Doce'],popular:12},
  {id:80,nome:'Maçã com Canela',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/maca-com-canela.jpg",precos:{P:42.60,M:52.60,G:62.60,GG:72.60},tags:['🍫 Doce'],popular:11},
  {id:81,nome:'Sensação',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/sensacao.jpg",precos:{P:42.90,M:52.90,G:62.90,GG:72.90},tags:['🍫 Doce'],popular:10},
  {id:82,nome:'Oreo Crocante',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/oreo-crocante.jpg",precos:{P:43.20,M:53.20,G:63.20,GG:73.20},tags:['🍫 Doce'],popular:9},
  {id:83,nome:'Churros',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/churros.jpg",precos:{P:43.50,M:53.50,G:63.50,GG:73.50},tags:['🍫 Doce'],popular:8},
  {id:84,nome:'Confete Colorido',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/confete-colorido.jpg",precos:{P:43.80,M:53.80,G:63.80,GG:73.80},tags:['🍫 Doce'],popular:7},
  {id:85,nome:'Beijinho',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/beijinho.jpg",precos:{P:44.10,M:54.10,G:64.10,GG:74.10},tags:['🍫 Doce'],popular:6},
  {id:86,nome:'Banana Nevada',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/banana-nevada.jpg",precos:{P:44.40,M:54.40,G:64.40,GG:74.40},tags:['🍫 Doce'],popular:5},
  {id:87,nome:'Limão Trufado',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/limao-trufado.jpg",precos:{P:44.70,M:54.70,G:64.70,GG:74.70},tags:['🍫 Doce'],popular:4},
  {id:88,nome:'Caramelo Salgado',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/caramelo-salgado.jpg",precos:{P:45.00,M:55.00,G:65.00,GG:75.00},tags:['🍫 Doce'],popular:3},
  {id:89,nome:'Crocante de Amendoim',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/crocante-de-amendoim.jpg",precos:{P:45.30,M:55.30,G:65.30,GG:75.30},tags:['🍫 Doce'],popular:2},
  {id:90,nome:'Frutas Vermelhas',descricao:'Cobertura doce cremosa preparada para finalizar sua refeição.',categoria:"doce",imagem:"images/pizzas/frutas-vermelhas.jpg",precos:{P:45.60,M:55.60,G:65.60,GG:75.60},tags:['🍫 Doce'],popular:1},
  {id:91,nome:'Água Mineral',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/agua-mineral.jpg",precos:{P:5.00,M:5.00,G:5.00,GG:5.00},tags:["🥤 Bebida"],popular:20},
  {id:92,nome:'Água com Gás',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/agua-com-gas.jpg",precos:{P:6.00,M:6.00,G:6.00,GG:6.00},tags:["🥤 Bebida"],popular:19},
  {id:93,nome:'Coca-Cola Lata',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/coca-cola-lata.jpg",precos:{P:6.50,M:6.50,G:6.50,GG:6.50},tags:["🥤 Bebida"],popular:18},
  {id:94,nome:'Coca-Cola Zero',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/coca-cola-zero.jpg",precos:{P:6.50,M:6.50,G:6.50,GG:6.50},tags:["🥤 Bebida"],popular:17},
  {id:95,nome:'Guaraná Lata',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/guarana-lata.jpg",precos:{P:6.00,M:6.00,G:6.00,GG:6.00},tags:["🥤 Bebida"],popular:16},
  {id:96,nome:'Fanta Laranja',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/fanta-laranja.jpg",precos:{P:6.00,M:6.00,G:6.00,GG:6.00},tags:["🥤 Bebida"],popular:15},
  {id:97,nome:'Sprite Lata',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/sprite-lata.jpg",precos:{P:6.00,M:6.00,G:6.00,GG:6.00},tags:["🥤 Bebida"],popular:14},
  {id:98,nome:'Soda Italiana',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/soda-italiana.jpg",precos:{P:12.00,M:12.00,G:12.00,GG:12.00},tags:["🥤 Bebida"],popular:13},
  {id:99,nome:'Suco de Laranja',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/suco-de-laranja.jpg",precos:{P:9.00,M:9.00,G:9.00,GG:9.00},tags:["🥤 Bebida"],popular:12},
  {id:100,nome:'Suco de Uva',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/suco-de-uva.jpg",precos:{P:9.00,M:9.00,G:9.00,GG:9.00},tags:["🥤 Bebida"],popular:11},
  {id:101,nome:'Limonada Suíça',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/limonada-suica.jpg",precos:{P:10.00,M:10.00,G:10.00,GG:10.00},tags:["🥤 Bebida"],popular:10},
  {id:102,nome:'Chá Gelado de Limão',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/cha-gelado-de-limao.jpg",precos:{P:7.00,M:7.00,G:7.00,GG:7.00},tags:["🥤 Bebida"],popular:9},
  {id:103,nome:'Chá Gelado de Pêssego',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/cha-gelado-de-pessego.jpg",precos:{P:7.00,M:7.00,G:7.00,GG:7.00},tags:["🥤 Bebida"],popular:8},
  {id:104,nome:'Milk-shake de Chocolate',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/milk-shake-de-chocolate.jpg",precos:{P:15.00,M:15.00,G:15.00,GG:15.00},tags:["🥤 Bebida"],popular:7},
  {id:105,nome:'Milk-shake de Morango',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/milk-shake-de-morango.jpg",precos:{P:15.00,M:15.00,G:15.00,GG:15.00},tags:["🥤 Bebida"],popular:6},
  {id:106,nome:'Suco de Maracujá',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/suco-de-maracuja.jpg",precos:{P:9.00,M:9.00,G:9.00,GG:9.00},tags:["🥤 Bebida"],popular:5},
  {id:107,nome:'Suco de Abacaxi',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/suco-de-abacaxi.jpg",precos:{P:9.00,M:9.00,G:9.00,GG:9.00},tags:["🥤 Bebida"],popular:4},
  {id:108,nome:'Tônica Lata',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/tonica-lata.jpg",precos:{P:7.00,M:7.00,G:7.00,GG:7.00},tags:["🥤 Bebida"],popular:3},
  {id:109,nome:'Refrigerante Cola 1L',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/refrigerante-cola-1l.jpg",precos:{P:12.00,M:12.00,G:12.00,GG:12.00},tags:["🥤 Bebida"],popular:2},
  {id:110,nome:'Refrigerante Guaraná 1L',descricao:"Bebida selecionada para acompanhar sua pizza.",categoria:"bebidas",imagem:"images/bebidas/refrigerante-guarana-1l.jpg",precos:{P:11.00,M:11.00,G:11.00,GG:11.00},tags:["🥤 Bebida"],popular:1}
];





const money = value => Number(value || 0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const safe = value => String(value ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const getJSON = (key,fallback) => { try { const v=localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } };
const setJSON = (key,value) => { try { localStorage.setItem(key,JSON.stringify(value)); } catch {} };

const ThemeManager = {
  key:"labellapizza_theme",
  init(){
    const saved = (()=>{try{return localStorage.getItem(this.key)}catch{return null}})();
    const prefers = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.apply(saved || (prefers ? "dark":"light"));
  },
  apply(theme){
    document.documentElement.setAttribute("data-theme",theme);
    try{localStorage.setItem(this.key,theme)}catch{}
    const btn=document.getElementById("theme-btn");
    if(btn){btn.textContent=theme==="dark"?"☀️":"🌙";btn.setAttribute("aria-label",theme==="dark"?"Ativar tema claro":"Ativar tema escuro");}
  },
  toggle(){this.apply(document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark");}
};

const CartManager = {
  key:"labellapizza_cart",
  items:[],
  load(){this.items=getJSON(this.key,[]); if(!Array.isArray(this.items))this.items=[];},
  save(){setJSON(this.key,this.items);this.updateBadge();},
  count(){return this.items.reduce((s,i)=>s+i.qty,0);},
  total(){return this.items.reduce((s,i)=>s+i.price*i.qty,0);},
  add(pizza,size="M",qty=1,note=""){
    const key=`${pizza.id}-${size}-${note.trim().toLowerCase()}`;
    const found=this.items.find(i=>i.key===key);
    if(found) found.qty+=qty;
    else this.items.push({key,id:pizza.id,name:pizza.nome,size,price:pizza.precos[size],qty,note});
    this.save(); this.render(); notify(`${pizza.nome} foi adicionado ao carrinho.`);
  },
  change(key,delta){
    const item=this.items.find(i=>i.key===key); if(!item)return;
    item.qty+=delta; if(item.qty<=0)this.remove(key); else this.save();
    this.render();
  },
  remove(key){this.items=this.items.filter(i=>i.key!==key);this.save();this.render();},
  clear(){this.items=[];this.save();this.render();},
  updateBadge(){const el=document.getElementById("cart-count");if(el)el.textContent=this.count();},
  render(){
    const box=document.getElementById("cart-items"), total=document.getElementById("cart-total");
    if(!box)return;
    if(!this.items.length){box.innerHTML='<div class="cart-empty">🛒<br><br>Seu carrinho está vazio.<br>Escolha uma pizza no cardápio.</div>';}
    else box.innerHTML=this.items.map(i=>`
      <div class="cart-item">
        <div class="cart-item-info"><div class="cart-item-title">${safe(i.name)}</div><div class="cart-item-price">${safe(i.size)} • ${money(i.price)}${i.note?`<br>Obs.: ${safe(i.note)}`:""}</div></div>
        <div class="cart-item-actions">
          <div class="cart-item-quantity"><button class="quantity-btn" data-cart-minus="${safe(i.key)}">−</button><strong>${i.qty}</strong><button class="quantity-btn" data-cart-plus="${safe(i.key)}">+</button></div>
          <button class="cart-item-remove" data-cart-remove="${safe(i.key)}" aria-label="Remover item">🗑️</button>
        </div>
      </div>`).join("");
    if(total)total.textContent=money(this.total());
    this.updateBadge();
  }
};

function openCart(){const d=document.getElementById("cart-drawer");if(d){d.classList.add("active");d.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");CartManager.render();}}
function closeCart(){const d=document.getElementById("cart-drawer");if(d){d.classList.remove("active");d.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");}}
function notify(message,type="success"){
  const n=document.createElement("div");n.className=`notification notification-${type}`;n.innerHTML=`<i>${type==="success"?"✓":"!"}</i><span>${safe(message)}</span>`;document.body.appendChild(n);setTimeout(()=>n.remove(),3200);
}

const Navbar = {
  init(){
    const mobile=document.getElementById("mobile-menu"), button=document.getElementById("mobile-menu-btn");
    if(button&&mobile)button.addEventListener("click",()=>mobile.classList.toggle("active"));
    document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobile?.classList.remove("active")));
    const cart=document.getElementById("cart-btn"), close=document.getElementById("cart-close");
    cart?.addEventListener("click",openCart);close?.addEventListener("click",closeCart);
    document.getElementById("cart-drawer")?.addEventListener("click",e=>{if(e.target.id==="cart-drawer")closeCart();});
    document.addEventListener("click",e=>{
      const plus=e.target.closest("[data-cart-plus]"),minus=e.target.closest("[data-cart-minus]"),remove=e.target.closest("[data-cart-remove]");
      if(plus)CartManager.change(plus.dataset.cartPlus,1);
      if(minus)CartManager.change(minus.dataset.cartMinus,-1);
      if(remove)CartManager.remove(remove.dataset.cartRemove);
    });
    document.getElementById("cart-clear")?.addEventListener("click",()=>CartManager.clear());
    document.getElementById("theme-btn")?.addEventListener("click",()=>ThemeManager.toggle());
  }
};

function createPizzaCard(pizza,featured=false){
  const card=document.createElement("article");card.className=featured?"pizza-card":"menu-item";
  const first=Object.keys(pizza.precos)[1] || "M";
  card.innerHTML=`
    <div class="pizza-image"><img loading="lazy" src="${safe(pizza.imagem || 'images/pizzas/placeholder.jpg')}" alt="${safe(pizza.nome)}" ><span class="pizza-badge">${safe(pizza.categoria)}</span></div>
    <div class="pizza-info">
      <h3>${safe(pizza.nome)}</h3><p class="pizza-desc">${safe(pizza.descricao)}</p>
      <div class="card-tags">${pizza.tags.map(t=>`<span class="card-tag">${safe(t)}</span>`).join("")}</div>
      ${pizza.categoria==="bebidas" ? "" : `<div class="size-row">${Object.entries(pizza.precos).map(([s,p])=>`<button type="button" class="size-option ${s===first?"active":""}" data-size="${s}">${s}<br>${money(p)}</button>`).join("")}</div>`}
      <textarea class="card-note" rows="1" placeholder="Observação (opcional)"></textarea>
      <div class="pizza-footer"><strong class="pizza-price">${money(pizza.precos[first])}</strong><button class="btn btn-buy" type="button">Adicionar</button></div>
    </div>`;
  let selected=first;
  card.querySelectorAll(".size-option").forEach(b=>b.addEventListener("click",()=>{
    selected=b.dataset.size;card.querySelectorAll(".size-option").forEach(x=>x.classList.remove("active"));b.classList.add("active");card.querySelector(".pizza-price").textContent=money(pizza.precos[selected]);
  }));
  card.querySelector(".btn-buy").addEventListener("click",()=>CartManager.add(pizza,selected,1,card.querySelector(".card-note").value));
  return card;
}

function initHome(){
  const grid=document.getElementById("featured-pizzas"); if(!grid)return;
  PIZZAS.slice(0,6).forEach(p=>grid.appendChild(createPizzaCard(p,true)));
}

const FilterManager = {
  category:"todas",query:"",sort:"popular",
  init(){
    const grid=document.getElementById("menu-grid");if(!grid)return;
    document.querySelectorAll("[data-category]").forEach(b=>b.addEventListener("click",()=>{
      this.category=b.dataset.category;document.querySelectorAll("[data-category]").forEach(x=>x.classList.remove("active"));b.classList.add("active");this.render();
    }));
    document.getElementById("menu-search")?.addEventListener("input",e=>{this.query=e.target.value.trim().toLowerCase();this.render();});
    document.getElementById("menu-sort")?.addEventListener("change",e=>{this.sort=e.target.value;this.render();});
    this.render();
  },
  render(){
    let data=PIZZAS.filter(p=>this.category==="todas"||p.categoria===this.category)
      .filter(p=>(p.nome+" "+p.descricao+" "+p.tags.join(" ")).toLowerCase().includes(this.query));
    if(this.sort==="low")data.sort((a,b)=>a.precos.P-b.precos.P);
    if(this.sort==="high")data.sort((a,b)=>b.precos.P-a.precos.P);
    if(this.sort==="az")data.sort((a,b)=>a.nome.localeCompare(b.nome,"pt-BR"));
    if(this.sort==="popular")data.sort((a,b)=>b.popular-a.popular);
    const grid=document.getElementById("menu-grid");grid.innerHTML="";
    if(!data.length)grid.innerHTML='<div class="empty-state">😕<br><br>Nenhum item encontrado.</div>';
    else data.forEach(p=>grid.appendChild(createPizzaCard(p)));
    const count=document.getElementById("result-count");if(count)count.textContent=`Mostrando ${data.length} de ${PIZZAS.length} itens`;
  }
};

const CEPService = {
  async fill(){
    const input=document.getElementById("cep");if(!input)return;
    const cep=input.value.replace(/\D/g,"");if(cep.length!==8)return;
    const fields={rua:"logradouro",bairro:"bairro",cidade:"localidade"};
    try{
      const res=await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if(!res.ok)throw new Error();
      const data=await res.json();if(data.erro)throw new Error();
      Object.entries(fields).forEach(([id,key])=>{const el=document.getElementById(id);if(el)el.value=data[key]||"";});
      notify("Endereço encontrado pelo CEP.");
    }catch{notify("Não foi possível consultar o CEP. Preencha o endereço manualmente.","error");}
  }
};

const OrderForm = {
  step:1,
  init(){
    const form=document.getElementById("order-form");if(!form)return;
    document.querySelectorAll("[data-next]").forEach(b=>b.addEventListener("click",()=>this.next()));
    document.querySelectorAll("[data-prev]").forEach(b=>b.addEventListener("click",()=>this.prev()));
    form.addEventListener("submit",e=>{e.preventDefault();this.submit();});
    document.getElementById("cep")?.addEventListener("blur",()=>CEPService.fill());
    document.getElementById("pagamento")?.addEventListener("change",e=>{document.getElementById("troco").style.display=e.target.value==="dinheiro"?"block":"none";});
    document.getElementById("forma-retirada")?.addEventListener("change",e=>{const addressIds=["cep","rua","numero","bairro"];addressIds.forEach(id=>{const el=document.getElementById(id);if(el)el.required=e.target.value==="entrega";});});
    this.renderStep();
    this.renderCheckout();
  },
  validate(){
    const section=document.querySelector(`.form-step[data-step="${this.step}"]`);if(!section)return true;
    const required=[...section.querySelectorAll("[required]")];
    for(const el of required){if(!el.value.trim()){el.focus();notify("Preencha os campos obrigatórios.","error");return false;}}
    if(this.step===1){
      const tel=document.getElementById("telefone").value.replace(/\D/g,"");if(tel.length<10){notify("Informe um telefone válido.","error");return false;}
    }
    if(this.step===2 && document.getElementById("forma-retirada").value==="entrega"){
      const cep=document.getElementById("cep").value.replace(/\D/g,"");if(cep.length!==8){notify("Informe um CEP válido.","error");return false;}
    }
    return true;
  },
  next(){if(this.validate()&&this.step<3){this.step++;this.renderStep();this.renderCheckout();}},
  prev(){if(this.step>1){this.step--;this.renderStep();}},
  renderStep(){
    document.querySelectorAll(".form-step").forEach(s=>s.classList.toggle("active",Number(s.dataset.step)===this.step));
    document.querySelectorAll(".step-pill").forEach(s=>s.classList.toggle("active",Number(s.dataset.pill)===this.step));
    if(this.step===3)this.renderCheckout();
  },
  renderCheckout(){
    const box=document.getElementById("checkout-summary");if(!box)return;
    const delivery=document.getElementById("forma-retirada")?.value==="entrega"?5:0;
    const subtotal=CartManager.total(), total=subtotal+delivery;
    box.innerHTML=`<div class="summary-line"><span>Itens</span><strong>${CartManager.count()}</strong></div><div class="summary-line"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="summary-line"><span>Entrega</span><strong>${delivery?money(delivery):"Grátis"}</strong></div><div class="summary-line total"><span>Total</span><strong>${money(total)}</strong></div>`;
  },
  submit(){
    if(!this.validate())return;
    if(!CartManager.items.length){notify("Adicione pelo menos um item ao carrinho.","error");return;}
    const number=String(Math.floor(1000+Math.random()*9000)), now=new Date();
    const delivery=document.getElementById("forma-retirada").value==="entrega"?5:0;
    const order={number,nome:document.getElementById("nome").value,total:CartManager.total()+delivery,createdAt:now.toISOString(),status:0};
    setJSON("labellapizza_last_order",order);
    const summary=document.getElementById("success-summary");if(summary)summary.textContent=`Olá, ${order.nome}. Total do pedido: ${money(order.total)}. Previsão: 35–45 minutos.`;
    const num=document.getElementById("success-number");if(num)num.textContent=`Pedido #${order.number}`;
    document.getElementById("success-modal")?.classList.add("active");
    document.body.classList.add("modal-open");
    CartManager.clear();
    updateTracking(order);
    notify("Pedido confirmado!");
  }
};

function updateTracking(order){
  const num=document.getElementById("tracking-number"),time=document.getElementById("tracking-time");
  if(num)num.textContent=`Pedido #${order.number} • ${order.nome}`;
  if(time)time.textContent="Acompanhe as etapas abaixo. O status avança automaticamente nesta simulação.";
  const steps=["Recebido","Preparando","Assando","Saiu para entrega","Entregue"];
  let index=Number(order.status)||0;
  const apply=()=>{
    document.querySelectorAll("[data-track]").forEach((s,i)=>{s.classList.toggle("active",i===index);s.classList.toggle("completed",i<index);});
    const fill=document.getElementById("progress-fill");if(fill)fill.style.width=`${(index/4)*100}%`;
    const status=document.getElementById("current-status");if(status)status.textContent=steps[index];
  };
  apply();
  if(!window.__trackingTimer){window.__trackingTimer=setInterval(()=>{
    const current=getJSON("labellapizza_last_order",null);if(!current)return;
    if(current.status<4){current.status++;setJSON("labellapizza_last_order",current);index=current.status;apply();}else{clearInterval(window.__trackingTimer);window.__trackingTimer=null;}
  },5000);}
}

function initTracking(){
  const order=getJSON("labellapizza_last_order",null);if(order)updateTracking(order);
}

function initStoreStatus(){
  const status=document.getElementById("store-status"),detail=document.getElementById("store-status-detail"),dot=document.getElementById("status-dot");if(!status)return;
  const hour=new Date().getHours(),open=hour>=18&&hour<23;
  status.textContent=open?"ABERTO — Entregas disponíveis":"FECHADO — Abrimos às 18h";
  detail.textContent=open?"Previsão: 35–45 min":"Pedidos online ficam disponíveis para a próxima abertura.";
  dot?.classList.toggle("closed",!open);
}

function initModal(){
  document.querySelectorAll("[data-close-modal]").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".modal.active")?.classList.remove("active");document.body.classList.remove("modal-open");}));
  document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m){m.classList.remove("active");document.body.classList.remove("modal-open");}}));
  document.getElementById("go-checkout")?.addEventListener("click",closeCart);
}

function initLoader(){
  const loader=document.getElementById("loader");if(!loader)return;
  const text=document.getElementById("loader-text"), progress=document.getElementById("loader-progress");
  const phrases=["Aquecendo o forno. 🔥","Preparando a massa artesanal. 🫓","Adicionando ingredientes frescos. 🍅","Espalhando o molho especial. ❤️","Gratinando com amor. 🧀","Cortando em fatias perfeitas. 🍕","Sua pizza está quase pronta. ⏰","Bem-vindo à La Bella Pizza! 🇮🇹"];
  const start=performance.now();
  const tick=now=>{
    const percent=Math.min(100,((now-start)/5000)*100);
    if(progress)progress.style.width=`${percent}%`;
    if(text)text.textContent=phrases[Math.min(phrases.length-1,Math.floor(percent/(100/phrases.length)))];
    if(percent<100)requestAnimationFrame(tick);
    else setTimeout(()=>loader.classList.add("hidden"),150);
  };
  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded",()=>{
  ThemeManager.init();
  CartManager.load();
  Navbar.init();
  CartManager.render();
  initHome();
  FilterManager.init();
  OrderForm.init();
  initTracking();
  initStoreStatus();
  initModal();
  initLoader();
});
