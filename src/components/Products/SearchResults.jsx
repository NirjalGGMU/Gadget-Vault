import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Heading from '../Shared/Heading';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    // Get all products (you can import this from your Products component)
    const allProducts = JSON.parse(localStorage.getItem('allProducts')) || [];
    
    // Filter products based on search query
    const filtered = allProducts.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="py-10">
      <div className="container">
        <Heading 
          title={`Search Results for "${searchQuery}"`} 
          subtitle={`${filteredProducts.length} products found`} 
        />
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No products found matching your search.
          </div>
        ) : (
          <ProductCard data={filteredProducts} />
        )}
      </div>
    </div>
  );
};

export default SearchResults;