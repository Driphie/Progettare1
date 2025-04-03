
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ProductGrid from '@/components/ProductGrid';
import { getProductsByType } from '@/data/products';

const AmbosPage = () => {
  const allAmbos = getProductsByType('ambo');
  const [season, setSeason] = useState<string>('all');
  
  const filteredAmbos = season === 'all' 
    ? allAmbos 
    : allAmbos.filter(product => product.season === season);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Ambos</h1>

      <ProductGrid products={filteredAmbos} />
    </div>
  );
};

export default AmbosPage;
