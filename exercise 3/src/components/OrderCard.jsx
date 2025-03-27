import React from "react";

export default function OrderCard({product, price, quantity, updateQuantity}) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>${price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={() => updateQuantity(-1)} disabled ={quantity === 0}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={() => updateQuantity(1)}>+</div>
      </div>
    </div>
  );
}
