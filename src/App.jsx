import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import products from './products';
import { Cart } from './components/Cart';
import Loading from './components/Loading';


const  text = "Total products 10";
document.title = text; 
export const App = () => {
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
          <h1 style={{ color: "lightblue" }}>0</h1>
        </>
      )}
    </div>
  );
}
