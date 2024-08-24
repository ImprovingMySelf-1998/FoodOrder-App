import React from "react";
import { currencyFormatter } from "../Utils/formatting";

function CartItems(props) {
  return (
    <li className="cart-item">
      <p>
        {props.name} - {props.quantity} x{" "}
        {currencyFormatter.format(props.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={props.onDecrease}>-</button>
        <span>{props.quantity}</span>
        <button onClick={props.onIncrease}>+</button>
      </p>
    </li>
  );
}

export default CartItems;
