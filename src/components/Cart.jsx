import React from 'react'
import {MdRemoveShoppingCart} from "react-icons/md";
import { CartItem } from './CartItem';
import { useGlobalContext } from '../context/context';

export const Cart = () => {
  const {products, deletAll} = useGlobalContext()
  return (
    <div className='header-content'>
    <div className='header'>
    <h6>Item</h6>
    <h6 className='prd-name'>Name</h6>
    <h6>Qty</h6>
    <h6>Prezzo</h6>
    <button className="btn icon-btn"
    style={{
                backgroundColor: "transparent",
                color: "darkred",
                fontSize:"25px",
                cursor:"pointer"
            }}
            onClick={()=> deletAll()}
            >
          <MdRemoveShoppingCart className="icon minus-icon" />
        </button>
      </div>
      <hr style={{
         borderBottom:" 1px solid #333 ",
         marginTop: "20px",
      }}/>

      
      {products.map((el)=>
        { return <CartItem {...el} key={el._id}/>}
      )}
      </div>
      
  )
}
