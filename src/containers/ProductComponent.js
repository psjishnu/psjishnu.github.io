import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = ({ products }) => {
  const { searchText } = useSelector((state) => state.allProducts);
  const inputText = new RegExp(searchText.toLowerCase());
  products = products.filter((item) =>
    inputText.test(item.title.toLowerCase())
  );

  const theme = useSelector((state) => state.theme.theme);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div style={theme} className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div style={theme} className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div style={theme} className="header">
                  {title}
                </div>
                <div style={theme} className="meta price">
                  $ {price}
                </div>
                <div style={theme} className="meta">
                  {category}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
