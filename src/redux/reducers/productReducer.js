import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
  searchText: "",
  focus: false,
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    case "SEARCH":
      return { ...state, searchText: payload };
    case "FOCUS":
      return { ...state, focus: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        [`product_${String(payload.id)}`]: { ...payload.data },
      };
    default:
      return state;
  }
};

export const addSub = (state = { sum: 0 }, { type, payload }) => {
  switch (type) {
    case "ADD":
      return { ...state, sum: state.sum + payload };
    case "SUB":
      return { ...state, sum: state.sum - payload };
    default:
      return state;
  }
};

export const loading = (
  state = { loading: false, error: false },
  { type, payload }
) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: payload };
    case "ERROR":
      return { ...state, error: payload };
    default:
      return state;
  }
};
