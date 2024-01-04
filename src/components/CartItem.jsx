import React from 'react'
import {BiPlus, BiMinus} from "react-icons/bi"
import {MdDelete} from "react-icons/md"
import { useGlobalContext } from '../context/context'


export const CartItem = ({name,_id,price,countInStock,image, qty}) => {
  const {deleteItem,addQty,dimQty} = useGlobalContext();


  const aggiungiQty = (id) => {
    if (qty + 1 > countInStock) {
      return;
    }
    return addQty(id);
  };


  function diminuisciQty(id){
    if(qty - 1 <= 0){
     return deleteItem(id)
    }else{
     return dimQty(id);
    }
  }
  return (
    <div className='cart-section'>
        <div className='cart-item'>
    <div className='img-container'>
        <img  alt={name} src={image}/>
    </div>
    <small className='prd-name'>{name}</small>
    <div className='quantity-controller'>
    <button className="btn icon-btn" onClick={()=> aggiungiQty(_id)}>
          <BiPlus className="icon add-icon" style={{color:"lightblue", fontSize: "1.8rem"}}/>
        </button>
        <p> {qty} </p>
        <button className="btn icon-btn " onClick={()=> diminuisciQty(_id)}>
          <BiMinus
            className="icon minus-icon"
            style={{color:"darkred", fontSize: "1.8rem",cursor:"pointer"}}
          />
        </button>
    </div>
        <small>{price} $</small>      
        <button className="btn icon-btn"
                style={{
                backgroundColor: "transparent",
                color: "darkred",
                fontSize:"25px",
                filter: "drop-shadow(0px 1px 1px white)",
                cursor:"pointer"
            }}
            onClick={()=>deleteItem(_id)}
        >
        <MdDelete className=" icon del-icon" 
        />
      </button>
    </div>
    </div>
  )
}

