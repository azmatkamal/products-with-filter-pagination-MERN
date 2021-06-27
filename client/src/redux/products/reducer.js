import { GET_PRODUCTS, GET_PRODUCT, GET_PRODUCT_META } from "../types";

const initialState = {
  product: {},
  products: [],
  meta: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case GET_PRODUCT_META:
      return {
        ...state,
        meta: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
