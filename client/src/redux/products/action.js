import axios from "axios";

import {
  GET_ERRORS,
  CLEAR_ALERTS,
  CLEAR_ERRORS,
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCT_META,
} from "../types";

export const getProducts = (data, loading) => (dispatch) => {
  dispatch({ type: CLEAR_ALERTS });
  dispatch({ type: CLEAR_ERRORS });
  loading();
  axios
    .post("/api", data)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.docs,
      });
      loading();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
      loading();
    });
};

export const getProduct = (data, loading) => (dispatch) => {
  dispatch({ type: CLEAR_ALERTS });
  dispatch({ type: CLEAR_ERRORS });
  loading();
  axios
    .post("/api/product", data)
    .then((res) => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
      loading();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
      loading();
    });
};
