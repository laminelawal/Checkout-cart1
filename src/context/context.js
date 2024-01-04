import React, { createContext, useContext, useReducer } from "react"
import products from "../products"
import reducer from "./reducer";
const AppContext = createContext();

const initialState = {
    products: products,
}



function AppProvider({children}){

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    function deleteItem(id){
        dispatch({type: "Delet_item", playload: id})
        console.log("Clikked")
    }

    function deletAll(){
        dispatch({type: "Delete_all"})
    }

      //Aumenta Quantità
  const addQty = (id) => {
    return dispatch({ type: "AUMENTA_QTY", payload: id });
  };

  //Riduce quantità singolo elemento
  const dimQty = (id) => {
    return dispatch({ type: "DIMINUISCI_QTY", payload: id });
  };
    return(
        <AppContext.Provider
        value={{
            ...state,
            deleteItem,
            deletAll, addQty,dimQty
            }
        }
        >
            {children}
        </AppContext.Provider>
    )
}

function useGlobalContext(){
    return useContext(AppContext)
}


export {AppProvider, useGlobalContext, initialState}