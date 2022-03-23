import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/actions/productActions";
import Loading from "react-fullscreen-loading";

const initialProduct = {
  image: "",
  title: "",
  price: "",
  category: "",
  description: "",
};
const ProductDetail = () => {
  const { theme } = useSelector((state) => state.theme);
  const { error } = useSelector((state) => state.loading);
  const { productId } = useParams();
  const product = useSelector((state) => state.product[`product_${productId}`]);
  const { image, title, price, category, description } =
    product || initialProduct;

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productId && productId !== "") dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  return (
    <div style={theme} className="ui grid container">
      {error && (
        <div style={{ width: "100vw", textAlign: "center", fontSize: "35px" }}>
          Error occured !!
        </div>
      )}
      {!product || Object.keys(product).length === 0 ? (
        <Loading
          loading={true}
          background={theme.backgroundColor}
          loaderColor="#3498db"
        />
      ) : (
        <div style={theme} className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div style={theme} className="ui vertical divider">
              AND
            </div>
            <div style={theme} className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div style={theme} className="column rp">
                <h1>{title}</h1>
                <h2 className="ui teal tag label">${price}</h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
