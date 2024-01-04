import React from "react";
import {HiShoppingCart} from "react-icons/hi"
function Navbar(){
    return(
        <header>
            <div className="nav-brand">
                Cart Shop
            </div>
            <div className="nav-cart">
          <HiShoppingCart className="icon nav-icon" />
          <small className="nav-counter">6</small>
            </div>
        </header>
    )
}
export default Navbar;