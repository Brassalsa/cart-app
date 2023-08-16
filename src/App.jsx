import './App.css';
import { useState, useEffect } from 'react';
import Routes from './routes';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  function addTocart(e, product){
    const temp = [...cart];
    for(let i = 0; i < temp.length; i++) {
      if (temp[i].id == product.id) {
        return;
      }
    }
    
    temp.push({...product, quantity: 1});
    setCart([...temp]);
  }

  useEffect(()=>{
      fetch('https://fakestoreapi.com/products/')
          .then(res=>res.json())
          .then(json => {
            setProducts(json);
            setLoading(false);
          });
  },[]);
  
  return (
    <>
    <Routes 
      products = {products} setProducts={setProducts}
      cart={cart} setCart={setCart}
      addToCart={addTocart} loading={loading}
    ></Routes>
    </>
  );
};

export default App;