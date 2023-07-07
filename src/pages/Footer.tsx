import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
// import Products from '../components/Products';

type ProductsItem = {
  name: string;
  quantity: number;
  id: string;
};

const ProductList = () => {
  const [grocery, setGrocery] = useState<ProductsItem[]>([]);

  useEffect(() => {
    axios
      .get<ProductsItem[]>('http://localhost:3000/products')
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setGrocery(data);
        } else {
          console.error('Invalid data format');
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header title='Products List new' totalItems={grocery.length} />

      {/* {grocery.map((g) => (
        <Products
          name={g?.name || ''}
          quantity={g?.quantity || 0}
          key={g?.id || ''}
        />
      ))} */}
    </div>
  );
};

const Footer = () => {
  return (
    <div className='footer-dark'>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 item'>
              <h3>Products</h3>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/News'>News</a>
                </li>
                <li>
                  <a href='/Grocery'>Products</a>
                </li>
              </ul>
            </div>
            <div className='col-sm-6 col-md-3 item'>
              <h3>About</h3>
              <ul>
                <li>
                  <a href='#'>Company</a>
                </li>
                <li>
                  <a href='/Team'>Team</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 item text'>
              <h3>Company Name</h3>
              <p>Invincible Group Of Companies</p>
            </div>
            <div className='col item social'>
              <a href='#'>
                <i className='icon ion-social-facebook'></i>
              </a>
              <a href='#'>
                <i className='icon ion-social-twitter'></i>
              </a>
              <a href='#'>
                <i className='icon ion-social-snapchat'></i>
              </a>
              <a href='#'>
                <i className='icon ion-social-instagram'></i>
              </a>
            </div>
          </div>
          <p className='copyright'>
            Company Name © 2022
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
