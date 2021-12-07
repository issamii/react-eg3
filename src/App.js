import React from 'react';
import './style.css';
import Product from './Product';
import ProductPanel from './ProductPanel';

export default function App() {
  return (
    <div>
      <Product name="Apple" id="item1" datePurchased={Date()}></Product>
      <ProductPanel />
    </div>
  );
}
