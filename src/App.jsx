import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import products from './products';
import { Cart } from './components/Cart';
import Loading from './components/Loading';
import { useGlobalContext } from './context/context';
import formatNumber from './utils/formatNumber';




export const App = () => {
  const {total, itemCounter} = useGlobalContext();
  const [isLoading,setIsLoading] = useState(false);
  function OnloadWindow(){
    return window.onload =()=>{
      return setIsLoading(true)
    };
  }
  useEffect(() => {
    // Simulate an API call or any asynchronous operation
    OnloadWindow();
    setTimeout(() => {
      setIsLoading(false);
      return ()=> clearTimeout();
    }, 500);
  }, [isLoading]);


  
    useEffect(() => {
      // Update document title whenever itemCounter changes
      if (itemCounter <= 0) {
        document.title = 'You got nothing in your Cart';
      } else if (itemCounter === 1) {
        document.title = `You got ${itemCounter} item in your Cart`;
      } else {
        document.title = `You got ${itemCounter} items in your Cart`;
      }
    }, [itemCounter]);


  return (
    <div>
      <Navbar />
      {isLoading ? (
        <div className="center-item">
         <Loading/>
        </div>
      ) : (
        <>
          {products.length > 0 ? (
            <Cart />
          ) : (
            <div className="center-item">
              <h4 style={{ color: "lightblue", fontSize: "30px" }}>Nessun prodotto nel carrello</h4>
            </div>
          )}
          {/* {total > 0 && <TotalBox />} */}
          {total > 0 && 
          <h1 className='cartBox'>
          <small>Carrello</small>
         {formatNumber(total)}
          <button>Checkout</button>
          </h1>
         }
          
        </>
      )}
    </div>
  );
}



