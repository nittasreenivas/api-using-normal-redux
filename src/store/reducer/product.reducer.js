const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  if (action.type === "FETCH_PRODUCTS") {
    return {
      ...state,
      products: action.payload
    };
  }
  if (action.type === "DELETE_PRODUCT") {
    let deleteItem = state.products.filter((item) => {
      return item.id !== action.payload;
    });
    return {
      ...state,
      products: deleteItem
    };
  }
  return state;
};

export default productReducer;
