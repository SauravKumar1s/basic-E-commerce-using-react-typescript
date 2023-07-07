import { useState } from 'react';

import Header from '../Components/Header';
import Products from '../Components/Products';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      name: 'Table',
      quantity: 3,
      id: 1,
    },
    {
      name: 'Chair',
      quantity: 2,
      id: 2,
    },
    {
      name: 'Tents',
      quantity: 4,
      id: 3,
    },
   
  ]);

  return (
    <div>
      <Header title='Product List New' totalItems={products.length} />
    
      {products.map((g) => (
        <Products name={g.name} quantity={g.quantity} key={g.id.toString()} />
      ))}
    </div>
  );
};

export default ProductList;
