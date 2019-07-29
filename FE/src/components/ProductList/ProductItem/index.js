import React, { useState, useContext } from "react";
import {} from "./index.css";
import Price from "./Price";
import AddBtn from "./AddBtn";
import UnitsBtn from "./UnitsBtn";
import Context from "./../../../context";

const plus = (id, dispatch) => {
  dispatch({ type: "ADD_PRODUCT_UNIT", payload: { id } });
};
const minus = (id, dispatch) => {
  dispatch({ type: "REMOVE_PRODUCT_UNIT", payload: { id } });
};

const ProductItem = ({ data }) => {
  const { dispatch } = useContext(Context);

  const { id, name, price, originalPrice, photo, ammount } = data;

  return (
    <div className="item-container">
      <div>
        <img src={photo} alt="product-pic" />
      </div>
      <div className="item-name">{name}</div>
      <Price price={price} originalPrice={originalPrice} ammount={ammount} />
      {!data.ammount ? (
        <AddBtn
          add={() => {
            dispatch({ type: "ADD_PRODUCT", payload: { ...data } });
          }}
        />
      ) : (
        <UnitsBtn
          count={ammount}
          plus={() => plus(id, dispatch)}
          minus={() => minus(id, dispatch)}
        />
      )}
    </div>
  );
};

export default ProductItem;
