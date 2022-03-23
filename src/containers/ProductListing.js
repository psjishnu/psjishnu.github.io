import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts /*addnum*/ } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import Loading from "react-fullscreen-loading";

const ProductListing = () => {
  // const { sum } = useSelector((state) => state.addSub);
  const { loading, error } = useSelector((state) => state.loading);
  const { theme } = useSelector((state) => state.theme);
  let products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      {/* <button onClick={() => dispatch(addnum(10))}>click me {sum}</button> */}
      <div className="ui grid container">
        {error && (
          <div
            style={{ width: "100vw", textAlign: "center", fontSize: "35px" }}
          >
            Error occured !!
          </div>
        )}
        {products.length === 0 || loading ? (
          <Loading
            loading={true}
            background={theme.backgroundColor}
            loaderColor="#3498db"
          />
        ) : (
          <ProductComponent products={products} />
        )}
      </div>
    </>
  );
};

export default ProductListing;
