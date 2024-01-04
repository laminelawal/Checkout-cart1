const reducer = (state, action)=>{
    if(action.type === "Delet_item"){
        return{
            ...state,
            products: state.products.filter((el)=>el._id !== action.playload)
    }
    }

    if(action.type === "Delete_all"){
     return{
        ...state,
        products: []
     }
    }

    if(action.type === "AUMENTA_QTY"){
        return{
            ...state,
            products: state.products.map((el) => {
                if (action.payload === el._id) {
                  return {
                    ...el,
                    qty: el.qty + 1,
                  };
                }
                return { ...el };
              }),
        }
    }
      //Diminuisco quantità
  if (action.type === "DIMINUISCI_QTY") {
    return {
      ...state,
      products: state.products.map((el) => {
        if (action.payload === el._id) {
          return {
            ...el,
            qty: el.qty - 1,
          };
        }
        return { ...el };
      }),
    };
  }
}

export default reducer;