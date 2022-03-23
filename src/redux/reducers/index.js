import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  addSub,
  loading,
} from "./productReducer";
import { theme } from "./themeReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  addSub,
  theme,
  loading,
});

export default reducers;
