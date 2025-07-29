
import { Product } from '@/context/CartContext';

// Helper function to create product data
const createProduct = (
  id: number, 
  name: string, 
  season: 'invierno' | 'verano' | 'primavera' | 'otoño' | 'todo-el-año' | 'multi-estacion' | 'coleccion-especial', 
  articleNumber: string, 
  imagePath: string,
  detailImages: string[],
  type?: string,
  category?: 'camisa' | 'pantalon' | 'ambo' | null,
  pantalonType?: 'vestir' | 'jeans' | null,
  camisaType?: 'lisa' | 'fantasia' | 'estampada' | 'manga-corta' | null
): Product => ({
  id,
  name,
  season,
  articleNumber,
  image: imagePath,
  images: detailImages,
  type: type || null,
  category: category || null,
  pantalonType: pantalonType || null,
  camisaType: camisaType || null
});

// Products data
export const products: Product[] = [
  // Invierno products
  createProduct(
    1, 
    'Saco Cotton Rayon Azul', 
    'invierno', 
    '2070', 
    '/images/S-INV/1.jpg',
    [
      '/images/S-INV/1.jpg',
      '/images/S-INV//2.jpg',
      '/images/S-INV/3.jpg'
    ],
    'saco'
  ),
  createProduct(
    3, 
    'Saco Espiga Beige', 
    'invierno', 
    '2055', 
    '/images/S-INV/7.jpg',
    [
      '/images/S-INV/7.jpg',
      '/images/S-INV/8.jpg',
      '/images/S-INV/9.jpg'
    ],
    'saco'
  ),
  createProduct(
    5, 
    'Saco Lana Micro Espiga Gris', 
    'invierno', 
    '2059', 
    '/images/S-INV/13.jpg',
    [
      '/images/S-INV/13.jpg',
      '/images/S-INV/14.jpg',
      '/images/S-INV/15.jpg'
    ],
    'saco'
  ),
  createProduct(
    6, 
    'Saco Pick n Pick Beige Negro', 
    'invierno', 
    '2060', 
    '/images/S-INV/16.jpg',
    [
      '/images/S-INV/16.jpg',
      '/images/S-INV/17.jpg',
      '/images/S-INV/18.jpg'
    ],
    'saco'
  ),
  createProduct(
    7, 
    'Saco Sport', 
    'invierno', 
    '2035', 
    '/images/S-INV/19.jpg',
    [
      '/images/S-INV/19.jpg',
      '/images/S-INV/20.jpg',
      '/images/S-INV/21.jpg'
    ],
    'saco'
  ),
  createProduct(
    8, 
    'Saco Pana Rayas Negro/Gris', 
    'invierno', 
    '99', 
    '/images/S-INV/22.jpg',
    [
      '/images/S-INV/22.jpg',
      '/images/S-INV/23.jpg',
      '/images/S-INV/24.jpg'
    ],
    'saco'
  ),
  createProduct(
    9, 
    'Saco Cuero Liso Negro', 
    'invierno', 
    '2009', 
    '/images/S-INV/25.jpg',
    [
      '/images/S-INV/25.jpg',
      '/images/S-INV/26.jpg',
      '/images/S-INV/27.jpg'
    ],
    'saco'
  ),
  createProduct(
    10, 
    'Saco Cuero Liso Azul', 
    'invierno', 
    '2010', 
    '/images/S-INV/28.jpg',
    [
      '/images/S-INV/28.jpg',
      '/images/S-INV/29.jpg',
      '/images/S-INV/30.jpg'
    ],
    'saco'
  ),
  createProduct(
    11, 
    'Saco Cuero Labrado Negro', 
    'invierno', 
    '2011', 
    '/images/S-INV/31.jpg',
    [
      '/images/S-INV/31.jpg',
      '/images/S-INV/32.jpg',
      '/images/S-INV/33.jpg'
    ],
    'saco'
  ),
  createProduct(
    12, 
    'Gaban Con Cierre Negro', 
    'invierno', 
    '9030', 
    '/images/ABR/1.jpg',
    [
      '/images/ABR/1.jpg',
      '/images/ABR/2.jpg',
      '/images/ABR/3.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    13, 
    'Gaban Con Cierre Azul', 
    'invierno', 
    '9031', 
    '/images/ABR/4.jpg',
    [
      '/images/ABR/5.jpg',
      '/images/ABR/6.jpg',
      '/images/ABR/7.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    14, 
    'Gaban Con Cierre Gris Medio', 
    'invierno', 
    '9032', 
    '/images/ABR/10.jpg',
    [
      '/images/ABR/10.jpg',
      '/images/ABR/11.jpg',
      '/images/ABR/12.jpg'
    ],
    'abrigo'
  ),
    createProduct(
    15, 
    'Gaban Con Cierre Camel', 
    'invierno', 
    '9033', 
    '/images/ABR/7.jpg',
    [
      '/images/ABR/7.jpg',
      '/images/ABR/8.jpg',
      '/images/ABR/9.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    16, 
    'SobreTodo Pick n Pick', 
    'invierno', 
    '9022', 
    '/images/ABR/13.jpg',
    [
      '/images/ABR/13.jpg',
      '/images/ABR/14.jpg',
      '/images/ABR/15.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    17, 
    'SobreTodo Espigado Gris', 
    'invierno', 
    '9019', 
    '/images/ABR/16.jpg',
    [
      '/images/ABR/16.jpg',
      '/images/ABR/17.jpg',
      '/images/ABR/18.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    18, 
    'Trench Roma Gris', 
    'invierno', 
    '9012', 
    '/images/ABR/19.jpg',
    [
      '/images/ABR/19.jpg',
      '/images/ABR/20.jpg',
      '/images/ABR/21.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    19, 
    'Gaban Recto Negro', 
    'invierno', 
    '9013', 
    '/images/ABR/22.jpg',
    [
      '/images/ABR/22.jpg',
      '/images/ABR/23.jpg',
      '/images/ABR/24.jpg'
    ],
    'abrigo'
  ),
  
  
  // Verano products
  createProduct(
    21, 
    'Smoking Brocato Negro', 
    'verano', 
    '927', 
    '/images/S-VER/1.jpg',
    [
      '/images/S-VER/1.jpg',
      '/images/S-VER/2.jpg',
      '/images/S-VER/3.jpg'
    ],
    'saco'
  ),
  createProduct(
    22, 
    'Saco Fill A Fill Azul', 
    'verano', 
    '2110', 
    '/images/S-VER/4.jpg',
    [
      '/images/S-VER/4.jpg',
      '/images/S-VER/5.jpg',
      '/images/S-VER/6.jpg'
    ],
    'saco'
  ),
  createProduct(
    23, 
    'Saco Pick N Pick Azul', 
    'verano', 
    '2108', 
    '/images/S-VER/7.jpg',
    [
      '/images/S-VER/7.jpg',
      '/images/S-VER/8.jpg',
      '/images/S-VER/9.jpg'
    ],
    'saco'
  ),
  createProduct(
    24, 
    'Saco Cloque Tiza Azul', 
    'verano', 
    '2109', 
    '/images/S-VER/10.jpg',
    [
      '/images/S-VER/10.jpg',
      '/images/S-VER/11.jpg',
      '/images/S-VER/12.jpg'
    ],
    'saco'
  ),

   // Ambo products
  createProduct(
    26, 
    'Espiga Gris', 
    'otoño', 
    '792', 
    '/images/AMBOS/13.jpg',
    [
      '/images/AMBOS/13.jpg',
      '/images/AMBOS/14.jpg',
      '/images/AMBOS/15.jpg'
    ],
    'ambo',
    'ambo'
  ),
  createProduct(
    27, 
    'Liso Azul Contraste', 
    'otoño', 
    '794', 
    '/images/AMBOS/16.jpg',
    [
      '/images/AMBOS/16.jpg',
      '/images/AMBOS/17.jpg',
      '/images/AMBOS/18.jpg'
    ],
    'ambo',
    'ambo'
  ),
  createProduct(
    28, 
    'Cotton Negro', 
    'otoño', 
    '610', 
    '/images/AMBOS/10.jpg',
    [
      '/images/AMBOS/10.jpg',
      '/images/AMBOS/11.jpg',
      '/images/AMBOS/12.jpg'
    ],
    'ambo',
    'ambo'
  ),
  createProduct(
    29, 
    'Super 100 Negro', 
    'otoño', 
    '600', 
    '/images/AMBOS/4.jpg',
    [
      '/images/AMBOS/4.jpg',
      '/images/AMBOS/5.jpg',
      '/images/AMBOS/6.jpg'
    ],
    'ambo',
    'ambo'
  ),
  createProduct(
    30, 
    'Super 100 Negro 2', 
    'otoño', 
    '602', 
    '/images/AMBOS/7.jpg',
    [
      '/images/AMBOS/7.jpg',
      '/images/AMBOS/8.jpg',
      '/images/AMBOS/9.jpg'
    ],
    'ambo',
    'ambo'
  ),
  createProduct(
    32, 
    'Rathier Labrado Negro', 
    'otoño', 
    '796', 
    '/images/AMBOS/22.jpg',
    [
      '/images/AMBOS/22.jpg',
      '/images/AMBOS/23.jpg',
      '/images/AMBOS/24.jpg'
    ],
    'ambo',
    'ambo'
  ),

  // Camisa ROCHAS ESTAMPADAS products
  createProduct(
    33, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8160', 
    '/images/CAM/EST/1.jpg',
    [
      '/images/CAM/EST/1.jpg',
      '/images/CAM/EST/2.jpg',
      '/images/CAM/EST/3.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    34, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8161', 
    '/images/CAM/EST/4.jpg',
    [
      '/images/CAM/EST/4.jpg',
      '/images/CAM/EST/5.jpg',
      '/images/CAM/EST/6.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    35, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8162', 
    '/images/CAM/EST/7.jpg',
    [
      '/images/CAM/EST/7.jpg',
      '/images/CAM/EST/8.jpg',
      '/images/CAM/EST/9.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    36, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8163', 
    '/images/CAM/EST/10.jpg',
    [
      '/images/CAM/EST/10.jpg',
      '/images/CAM/EST/11.jpg',
      '/images/CAM/EST/12.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    37, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8164', 
    '/images/CAM/EST/13.jpg',
    [
      '/images/CAM/EST/13.jpg',
      '/images/CAM/EST/14.jpg',
      '/images/CAM/EST/15.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    38, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8165', 
    '/images/CAM/EST/16.jpg',
    [
      '/images/CAM/EST/16.jpg',
      '/images/CAM/EST/17.jpg',
      '/images/CAM/EST/18.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    39, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8169', 
    '/images/CAM/EST/19.jpg',
    [
      '/images/CAM/EST/19.jpg',
      '/images/CAM/EST/20.jpg',
      '/images/CAM/EST/21.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    40, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8166', 
    '/images/CAM/EST/22.jpg',
    [
      '/images/CAM/EST/22.jpg',
      '/images/CAM/EST/23.jpg',
      '/images/CAM/EST/24.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    41, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8167', 
    '/images/CAM/EST/25.jpg',
    [
      '/images/CAM/EST/25.jpg',
      '/images/CAM/EST/26.jpg',
      '/images/CAM/EST/27.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    42, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8168', 
    '/images/CAM/EST/28.jpg',
    [
      '/images/CAM/EST/28.jpg',
      '/images/CAM/EST/29.jpg',
      '/images/CAM/EST/30.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    43, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8151', 
    '/images/CAM/EST/31.jpg',
    [
      '/images/CAM/EST/31.jpg',
      '/images/CAM/EST/32.jpg',
      '/images/CAM/EST/33.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    44, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8149', 
    '/images/CAM/EST/34.jpg',
    [
      '/images/CAM/EST/34.jpg',
      '/images/CAM/EST/35.jpg',
      '/images/CAM/EST/36.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    45, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8144', 
    '/images/CAM/EST/37.jpg',
    [
      '/images/CAM/EST/37.jpg',
      '/images/CAM/EST/38.jpg',
      '/images/CAM/EST/39.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    46, 
    'ROCHAS Estampada', 
    'multi-estacion', 
    '8147', 
    '/images/CAM/EST/40.jpg',
    [
      '/images/CAM/EST/40.jpg',
      '/images/CAM/EST/41.jpg',
      '/images/CAM/EST/42.jpg'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),

 // Camisa ROCHAS Manga Corta products
  createProduct(
    47, 
    'ROCHAS Manga Corta', 
    'multi-estacion', 
    '5021', 
    '/images/CAM/MA-C/1.jpg',
    [
      '/images/CAM/MA-C/1.jpg',
      '/images/CAM/MA-C/2.jpg',
      '/images/CAM/MA-C/3.jpg'
    ],
    null,
    'camisa',
    null,
    'manga-corta'
  ),
  createProduct(
    48, 
    'ROCHAS Manga Corta', 
    'multi-estacion', 
    '5023', 
    '/images/CAM/MA-C/4.jpg',
    [
      '/images/CAM/MA-C/4.jpg',
      '/images/CAM/MA-C/5.jpg',
      '/images/CAM/MA-C/6.jpg'
    ],
    null,
    'camisa',
    null,
    'manga-corta'
  ),
  createProduct(
    49, 
    'ROCHAS Manga Corta', 
    'multi-estacion', 
    '5025', 
    '/images/CAM/MA-C/7.jpg',
    [
      '/images/CAM/MA-C/7.jpg',
      '/images/CAM/MA-C/8.jpg',
      '/images/CAM/MA-C/9.jpg'
    ],
    null,
    'camisa',
    null,
    'manga-corta'
  ),
  createProduct(
    50, 
    'ROCHAS Manga Corta', 
    'multi-estacion', 
    '5020', 
    '/images/CAM/MA-C/10.jpg',
    [
      '/images/CAM/MA-C/10.jpg',
      '/images/CAM/MA-C/11.jpg',
      '/images/CAM/MA-C/12.jpg'
    ],
    null,
    'camisa',
    null,
    'manga-corta'
  ),


  // Camisa ROCHAS LISA products
  createProduct(
    51, 
    'Rochas Lisa', 
    'multi-estacion', 
    '8012', 
    '/images/CAM/LISA/1.jpg',
    [
      '/images/CAM/LISA/1.jpg',
      '/images/CAM/LISA/2.jpg',
      '/images/CAM/LISA/3.jpg'
    ],
    null,
    'camisa',
    null,
    'lisa'
  ),
  createProduct(
    52, 
    'Rochas Lisa', 
    'multi-estacion', 
    '8108', 
    '/images/CAM/LISA/4.jpg',
    [
      '/images/CAM/LISA/4.jpg',
      '/images/CAM/LISA/5.jpg',
      '/images/CAM/LISA/6.jpg'
    ],
    null,
    'camisa',
    null,
    'lisa'
  ),
  createProduct(
    53, 
    'Rochas Lisa', 
    'multi-estacion', 
    '8109', 
    '/images/CAM/LISA/7.jpg',
    [
      '/images/CAM/LISA/7.jpg',
      '/images/CAM/LISA/8.jpg',
      '/images/CAM/LISA/9.jpg'
    ],
    null,
    'camisa',
    null,
    'lisa'
  ),


 // Camisa ROCHAS FANTASIA products
 createProduct(
  54, 
  'ROCHAS Fantasia', 
  'multi-estacion', 
  '8127', 
  '/images/CAM/FANT/1.jpg',
  [
    '/images/CAM/FANT/1.jpg',
    '/images/CAM/FANT/2.jpg',
    '/images/CAM/FANT/3.jpg'
  ],
  null,
  'camisa',
  null,
  'fantasia'
),
createProduct(
  55, 
  'ROCHAS Fantasia', 
  'multi-estacion', 
  '8133', 
  '/images/CAM/FANT/4.jpg',
  [
    '/images/CAM/FANT/4.jpg',
    '/images/CAM/FANT/5.jpg',
    '/images/CAM/FANT/6.jpg'
  ],
  null,
  'camisa',
  null,
  'fantasia'
),
createProduct(
  56, 
  'ROCHAS Fantasia', 
  'multi-estacion', 
  '8111', 
  '/images/CAM/FANT/7.jpg',
  [
    '/images/CAM/FANT/7.jpg',
    '/images/CAM/FANT/8.jpg',
    '/images/CAM/FANT/9.jpg'
  ],
  null,
  'camisa',
  null,
  'fantasia'
),
createProduct(
  57, 
  'ROCHAS Fantasia', 
  'multi-estacion', 
  '8134', 
  '/images/CAM/FANT/10.jpg',
  [
    '/images/CAM/FANT/10.jpg',
    '/images/CAM/FANT/11.jpg',
    '/images/CAM/FANT/12.jpg'
  ],
  null,
  'camisa',
  null,
  'fantasia'
),
createProduct(
  58, 
  'ROCHAS Fantasia', 
  'multi-estacion', 
  '8128', 
  '/images/CAM/FANT/13.jpg',
  [
    '/images/CAM/FANT/13.jpg',
    '/images/CAM/FANT/14.jpg',
    '/images/CAM/FANT/15.jpg'
  ],
  null,
  'camisa',
  null,
  'fantasia'
),
createProduct(
  59, 
  'ROCHAS Fantasia', 
  'multi-estacion', 
  '8131', 
  '/images/CAM/FANT/16.jpg',
  [
    '/images/CAM/FANT/16.jpg',
    '/images/CAM/FANT/17.jpg',
    '/images/CAM/FANT/18.jpg'
  ],
  null,
  'camisa',
  null,
  'fantasia'
),
createProduct(
  60, 
  'ROCHAS Fantasia', 
  'multi-estacion', 
  '8112', 
  '/images/CAM/FANT/19.jpg',
  [
    '/images/CAM/FANT/19.jpg',
    '/images/CAM/FANT/20.jpg',
    '/images/CAM/FANT/21.jpg'
  ],
  null,
  'camisa',
  null,
  'fantasia'
),

// Camisa DIOR Manga Corta products
createProduct(
  61, 
  'Dior Manga Corta', 
  'multi-estacion', 
  '5019', 
  '/images/CAM/D-MA-C/1.jpg',
  [
    '/images/CAM/D-MA-C/1.jpg',
    '/images/CAM/D-MA-C/2.jpg',
    '/images/CAM/D-MA-C/3.jpg'
  ],
  null,
  'camisa',
  null,
  'manga-corta'
),
createProduct(
  62, 
  'Dior Manga Corta', 
  'multi-estacion', 
  '5017', 
  '/images/CAM/D-MA-C/4.jpg',
  [
    '/images/CAM/D-MA-C/4.jpg',
    '/images/CAM/D-MA-C/5.jpg',
    '/images/CAM/D-MA-C/6.jpg'
  ],
  null,
  'camisa',
  null,
  'manga-corta'
),
createProduct(
  63, 
  'Dior Manga Corta', 
  'multi-estacion', 
  '5018', 
  '/images/CAM/D-MA-C/7.jpg',
  [
    '/images/CAM/D-MA-C/7.jpg',
    '/images/CAM/D-MA-C/8.jpg',
    '/images/CAM/D-MA-C/9.jpg'
  ],
  null,
  'camisa',
  null,
  'manga-corta'
),
createProduct(
  64, 
  'Dior Manga Corta', 
  'multi-estacion', 
  '5016', 
  '/images/CAM/D-MA-C/10.jpg',
  [
    '/images/CAM/D-MA-C/10.jpg',
    '/images/CAM/D-MA-C/11.jpg',
    '/images/CAM/D-MA-C/12.jpg'
  ],
  null,
  'camisa',
  null,
  'manga-corta'
),
createProduct(
  65, 
  'Dior Manga Corta', 
  'multi-estacion', 
  '5009', 
  '/images/CAM/D-MA-C/13.jpg',
  [
    '/images/CAM/D-MA-C/13.jpg',
    '/images/CAM/D-MA-C/14.jpg',
    '/images/CAM/D-MA-C/15.jpg'
  ],
  null,
  'camisa',
  null,
  'manga-corta'
),


// Camisa ROCHAS LISA products
createProduct(
  66, 
  'Dior Slim Fit', 
  'multi-estacion', 
  '4021', 
  '/images/CAM/D-SLIM/1.jpg',
  [
    '/images/CAM/D-SLIM/1.jpg',
    '/images/CAM/D-SLIM/2.jpg',
    '/images/CAM/D-SLIM/3.jpg'
  ],
  null,
  'camisa',
  null,
  'lisa'
),
createProduct(
  67, 
  'Dior Slim Fit', 
  'multi-estacion', 
  '4027', 
  '/images/CAM/D-SLIM/4.jpg',
  [
    '/images/CAM/D-SLIM/4.jpg',
    '/images/CAM/D-SLIM/5.jpg',
    '/images/CAM/D-SLIM/6.jpg'
  ],
  null,
  'camisa',
  null,
  'lisa'
),
createProduct(
  68, 
  'Dior Slim Fit', 
  'multi-estacion', 
  '4028', 
  '/images/CAM/D-SLIM/7.jpg',
  [
    '/images/CAM/D-SLIM/7.jpg',
    '/images/CAM/D-SLIM/8.jpg',
    '/images/CAM/D-SLIM/9.jpg'
  ],
  null,
  'camisa',
  null,
  'lisa'
),


  // Pantalon Jeans products
  createProduct(
    69, 
    'Jean Slim Fit', 
    'todo-el-año', 
    '5001', 
    '/images/P-JEAN/1.jpg',
    [
      '/images/P-JEAN/1.jpg',
      '/images/P-JEAN/2.jpg',
      '/images/P-JEAN/3.jpg'
    ],
    null,
    'pantalon',
    'jeans'
  ),
  createProduct(
    70, 
    'Jean Slim Fit', 
    'todo-el-año', 
    '5000', 
    '/images/P-JEAN/4.jpg',
    [
      '/images/P-JEAN/4.jpg',
      '/images/P-JEAN/5.jpg',
      '/images/P-JEAN/6.jpg'
    ],
    null,
    'pantalon',
    'jeans'
  ),
  createProduct(
    71, 
    'Jean Slim Fit', 
    'todo-el-año', 
    '5002', 
    '/images/P-JEAN/7.jpg',
    [
      '/images/P-JEAN/7.jpg',
      '/images/P-JEAN/8.jpg',
      '/images/P-JEAN/9.jpg'
    ],
    null,
    'pantalon',
    'jeans'
  ),
  createProduct(
    72, 
    'Jean Slim Fit', 
    'todo-el-año', 
    '5003', 
    '/images/P-JEAN/10.jpg',
    [
      '/images/P-JEAN/10.jpg',
      '/images/P-JEAN/11.jpg',
      '/images/P-JEAN/12.jpg'
    ],
    null,
    'pantalon',
    'jeans'
  ),
  createProduct(
    73, 
    'Jean Slim Fit', 
    'todo-el-año', 
    '5005', 
    '/images/P-JEAN/13.jpg',
    [
      '/images/P-JEAN/13.jpg',
      '/images/P-JEAN/14.jpg',
      '/images/P-JEAN/15.jpg'
    ],
    null,
    'pantalon',
    'jeans'
  ),
  createProduct(
    74, 
    'Jean Slim Fit', 
    'todo-el-año', 
    '5004', 
    '/images/P-JEAN/16.jpg',
    [
      '/images/P-JEAN/16.jpg',
      '/images/P-JEAN/17.jpg',
      '/images/P-JEAN/18.jpg'
    ],
    null,
    'pantalon',
    'jeans'
  ),

    // Pantalon Vestir products
    createProduct(
      75, 
      'Pantalon Vestir Super 100', 
      'coleccion-especial', 
      '54', 
      '/images/P-VEST/1.jpg',
      [
        '/images/P-VEST/1.jpg',
        '/images/P-VEST/2.jpg'
      ],
      null,
      'pantalon',
      'vestir'
    ),
    createProduct(
      76, 
      'Pantalon Vestir Super 100', 
      'coleccion-especial', 
      '52', 
      '/images/P-VEST/3.jpg',
      [
        '/images/P-VEST/3.jpg',
        '/images/P-VEST/4.jpg'
      ],
      null,
      'pantalon',
      'vestir'
    ),
    createProduct(
      77, 
      'Pantalon Vestir Super 100', 
      'coleccion-especial', 
      '53', 
      '/images/P-VEST/5.jpg',
      [
        '/images/P-VEST/5.jpg',
        '/images/P-VEST/6.jpg'
      ],
      null,
      'pantalon',
      'vestir'
    ),
    createProduct(
      78, 
      'Mecanico Melange Azul Oscuro', 
      'otoño', 
      '625', 
      '/images/AMBOS/25.jpg',
      [
        '/images/AMBOS/25.jpg',
        '/images/AMBOS/26.jpg',
        '/images/AMBOS/27.jpg'
      ],
      'ambo',
      'ambo'
    ),
    createProduct(
      79, 
      'Mecanico Melange Azul Claro', 
      'otoño', 
      '626', 
      '/images/AMBOS/28.jpg',
      [
        '/images/AMBOS/28.jpg',
        '/images/AMBOS/29.jpg',
        '/images/AMBOS/30.jpg'
      ],
      'ambo',
      'ambo'
    ),
    createProduct(
      81, 
      'Linea Punto Azul Noche', 
      'otoño', 
      '773', 
      '/images/AMBOS/34.jpg',
      [
        '/images/AMBOS/34.jpg',
        '/images/AMBOS/35.jpg',
        '/images/AMBOS/36.jpg'
      ],
      'ambo',
      'ambo'
    ),
    createProduct(
      85, 
      'Fantasia Ambo Azul', 
      'otoño', 
      '777', 
      '/images/AMBOS/46.jpg',
      [
        '/images/AMBOS/46.jpg',
        '/images/AMBOS/47.jpg',
        '/images/AMBOS/48.jpg'
      ],
      'ambo',
      'ambo'
    ),
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsBySeason = (season: 'invierno' | 'verano' | 'primavera' | 'otoño' | 'todo-el-año' | 'multi-estacion' | 'coleccion-especial'): Product[] => {
  return products.filter(product => product.season === season);
};

export const getProductsByCategory = (category: 'camisa' | 'pantalon' | 'ambo'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByPantalonType = (type: 'vestir' | 'jeans'): Product[] => {
  return products.filter(product => product.category === 'pantalon' && product.pantalonType === type);
};

export const getProductsByCamisaType = (type: 'lisa' | 'fantasia' | 'estampada' | 'manga-corta'): Product[] => {
  return products.filter(product => product.category === 'camisa' && product.camisaType === type);
};

export const getProductsByType = (type: string): Product[] => {
  return products.filter(product => product.type === type);
};