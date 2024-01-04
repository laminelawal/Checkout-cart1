import React from "react";
import {HiShoppingCart} from "react-icons/hi"
import { useGlobalContext } from "../context/context";
function Navbar(){
    const {itemCounter} = useGlobalContext();
    return(
        <header>
            <div className="nav-brand">
                Cart Shop
            </div>
            <div className="nav-cart">
          <HiShoppingCart className="icon nav-icon" />
          <small className="nav-counter">{itemCounter}</small>
            </div>
        </header>
    )
}
export default Navbar;