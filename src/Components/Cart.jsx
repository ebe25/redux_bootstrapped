import React from "react";
import { useSelector } from "react-redux";
//useSelector => is basically subscribing to the states in the store
const Cart = () => {
  const items=useSelector((state)=>state)
  // console.log(items.cart);
  const total=items.cart.reduce((a,b)=>a+b.price, 0)
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {items.cart.length} Rs. ({total})/-
      </h3>
    </div>
  );
};

export default Cart;
