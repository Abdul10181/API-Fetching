import React, { useEffect, useState } from 'react'
import Card from '../components/Card';   // ✅ Default import

function Products() {
    
  // API endpoint
  const baseurl = 'https://dummyjson.com/products';

  // State for holding product details
  const [items, setItems] = useState([]);

  // API Fetching
  const productFetching = async () => {
    try {
      const result = await fetch(baseurl);
      const arrayData = await result.json();
      console.log(arrayData.products);
      setItems(arrayData.products);
    } catch (err) {
      console.log("Error: " + err);
    }
  }

  // Fetch on mount
  useEffect(() => {//it is hook
    productFetching();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Card products={items} />
    </div>
  )
}

export default Products
