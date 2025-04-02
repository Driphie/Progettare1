
import { Product } from '@/context/CartContext';

// Helper function to create product data
const createProduct = (
  id: number, 
  name: string, 
  season: 'invierno' | 'verano', 
  articleNumber: string, 
  imagePath: string,
  detailImages: string[],
  type?: string,
  category?: 'camisa' | 'pantalon' | null,
  pantalonType?: 'vestir' | 'jeans' | null
): Product => ({
  id,
  name,
  season,
  articleNumber,
  image: imagePath,
  images: detailImages,
  type: type || null,
  category: category || null,
  pantalonType: pantalonType || null
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
      '../src/images/S-INV/1.jpg',
      '../src/images/S-INV/2.jpg',
      '../src/images/S-INV/3.jpg'
    ],
    'saco'
  ),
  createProduct(
    2, 
    'Saco Espiga Marron', 
    'invierno', 
    '2054', 
    '../src/images/S-INV/4.jpg',
    [
      '../src/images/S-INV/4.jpg',
      '../src/images/S-INV/5.jpg',
      '../src/images/S-INV/6.jpg'
    ],
    'saco'
  ),
  createProduct(
    3, 
    'Saco Espiga Beige', 
    'invierno', 
    '2055', 
    '../src/images/S-INV/7.jpg',
    [
      '../src/images/S-INV/7.jpg',
      '../src/images/S-INV/8.jpg',
      '../src/images/S-INV/9.jpg'
    ],
    'saco'
  ),
  createProduct(
    4, 
    'Saco Espiga Ancha Gris', 
    'invierno', 
    '2057', 
    '../src/images/S-INV/10.jpg',
    [
      '../src/images/S-INV/10.jpg',
      '../src/images/S-INV/11.jpg',
      '../src/images/S-INV/12.jpg'
    ],
    'saco'
  ),
  createProduct(
    5, 
    'Saco Lana Micro Espiga Gris', 
    'invierno', 
    '2059', 
    '../src/images/S-INV/13.jpg',
    [
      '../src/images/S-INV/13.jpg',
      '../src/images/S-INV/14.jpg',
      '../src/images/S-INV/15.jpg'
    ],
    'saco'
  ),
  createProduct(
    6, 
    'Saco Pick n Pick Beige Negro', 
    'invierno', 
    '2060', 
    '../src/images/S-INV/16.jpg',
    [
      '../src/images/S-INV/16.jpg',
      '../src/images/S-INV/17.jpg',
      '../src/images/S-INV/18.jpg'
    ],
    'saco'
  ),
  createProduct(
    7, 
    'Saco Sport', 
    'invierno', 
    '2035', 
    '../src/images/S-INV/19.jpg',
    [
      '../src/images/S-INV/19.jpg',
      '../src/images/S-INV/20.jpg',
      '../src/images/S-INV/21.jpg'
    ],
    'saco'
  ),
  createProduct(
    8, 
    'Saco Pana Rayas Negro/Gris', 
    'invierno', 
    '99', 
    '../src/images/S-INV/22.jpg',
    [
      '../src/images/S-INV/22.jpg',
      '../src/images/S-INV/23.jpg',
      '../src/images/S-INV/24.jpg'
    ],
    'saco'
  ),
  createProduct(
    9, 
    'Saco Cuero Liso Negro', 
    'invierno', 
    '2009', 
    '../src/images/S-INV/25.jpg',
    [
      '../src/images/S-INV/25.jpg',
      '../src/images/S-INV/26.jpg',
      '../src/images/S-INV/27.jpg'
    ],
    'saco'
  ),
  createProduct(
    10, 
    'Saco Cuero Liso Azul', 
    'invierno', 
    '2010', 
    '../src/images/S-INV/28.jpg',
    [
      '../src/images/S-INV/28.jpg',
      '../src/images/S-INV/29.jpg',
      '../src/images/S-INV/30.jpg'
    ],
    'saco'
  ),
  createProduct(
    11, 
    'Saco Cuero Labrado Negro', 
    'invierno', 
    '2011', 
    '../src/images/S-INV/31.jpg',
    [
      '../src/images/S-INV/31.jpg',
      '../src/images/S-INV/32.jpg',
      '../src/images/S-INV/33.jpg'
    ],
    'saco'
  ),
  createProduct(
    12, 
    'Gaban Con Cierre Negro', 
    'invierno', 
    '9030', 
    '../src/images/ABR/1.jpg',
    [
      '../src/images/ABR/1.jpg',
      '../src/images/ABR/2.jpg',
      '../src/images/ABR/3.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    13, 
    'Gaban Con Cierre Azul', 
    'invierno', 
    '9031', 
    '../src/images/ABR/4.jpg',
    [
      '../src/images/ABR/5.jpg',
      '../src/images/ABR/6.jpg',
      '../src/images/ABR/7.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    14, 
    'Gaban Con Cierre Gris Medio', 
    'invierno', 
    '9032', 
    '../src/images/ABR/10.jpg',
    [
      '../src/images/ABR/10.jpg',
      '../src/images/ABR/11.jpg',
      '../src/images/ABR/12.jpg'
    ],
    'abrigo'
  ),
    createProduct(
    15, 
    'Gaban Con Cierre Camel', 
    'invierno', 
    '9033', 
    '../src/images/ABR/7.jpg',
    [
      '../src/images/ABR/7.jpg',
      '../src/images/ABR/8.jpg',
      '../src/images/ABR/9.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    16, 
    'SobreTodo Pick n Pick', 
    'invierno', 
    '9022', 
    '../src/images/ABR/13.jpg',
    [
      '../src/images/ABR/13.jpg',
      '../src/images/ABR/14.jpg',
      '../src/images/ABR/15.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    17, 
    'SobreTodo Espigado Gris', 
    'invierno', 
    '9019', 
    '../src/images/ABR/16.jpg',
    [
      '../src/images/ABR/16.jpg',
      '../src/images/ABR/17.jpg',
      '../src/images/ABR/18.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    18, 
    'Trench Roma Gris', 
    'invierno', 
    '9012', 
    '../src/images/ABR/19.jpg',
    [
      '../src/images/ABR/19.jpg',
      '../src/images/ABR/20.jpg',
      '../src/images/ABR/21.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    19, 
    'Gaban Recto Negro', 
    'invierno', 
    '9013', 
    '../src/images/ABR/22.jpg',
    [
      '../src/images/ABR/22.jpg',
      '../src/images/ABR/23.jpg',
      '../src/images/ABR/24.jpg'
    ],
    'abrigo'
  ),
  createProduct(
    20, 
    'Campera Cuadro Gris', 
    'invierno', 
    '1005', 
    '../src/images/ABR/25.jpg',
    [
      '../src/images/ABR/25.jpg',
      '../src/images/ABR/26.jpg',
      '../src/images/ABR/27.jpg'
    ],
    'abrigo'
  ),
  
  
  // Verano products
  createProduct(
    21, 
    'Smoking Brocato Negro', 
    'verano', 
    '927', 
    '../src/images/S-VER/1.jpg',
    [
      '../src/images/S-VER/1.jpg',
      '../src/images/S-VER/2.jpg',
      '../src/images/S-VER/3.jpg'
    ],
    'saco'
  ),
  createProduct(
    22, 
    'Saco Fill A Fill Azul', 
    'verano', 
    '2110', 
    '../src/images/S-VER/4.jpg',
    [
      '../src/images/S-VER/4.jpg',
      '../src/images/S-VER/5.jpg',
      '../src/images/S-VER/6.jpg'
    ],
    'saco'
  ),
  createProduct(
    23, 
    'Saco Pick N Pick Azul', 
    'verano', 
    '2108', 
    '../src/images/S-VER/7.jpg',
    [
      '../src/images/S-VER/7.jpg',
      '../src/images/S-VER/8.jpg',
      '../src/images/S-VER/9.jpg'
    ],
    'saco'
  ),
  createProduct(
    24, 
    'Saco Cloque Tiza Azul', 
    'verano', 
    '2109', 
    '../src/images/S-VER/10.jpg',
    [
      '../src/images/S-VER/10.jpg',
      '../src/images/S-VER/11.jpg',
      '../src/images/S-VER/12.jpg'
    ],
    'saco'
  ),
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsBySeason = (season: 'invierno' | 'verano'): Product[] => {
  return products.filter(product => product.season === season);
};

export const getProductsByCategory = (category: 'camisa' | 'pantalon'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByPantalonType = (type: 'vestir' | 'jeans'): Product[] => {
  return products.filter(product => product.category === 'pantalon' && product.pantalonType === type);
};
