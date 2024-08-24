import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../Utils/formatting";
import Button from "./UI/Button";
import UserProgessContext from "../Store/UserProgessContext";
import CartItems from "./CartItems";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgeessCtx = useContext(UserProgessContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);
  function handleCloseCart() {
    userProgeessCtx.hideCart();
  }
  function handleGoToCheckout() {
    userProgeessCtx.showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={userProgeessCtx.progress === "cart"}
      onClose={userProgeessCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <CartItems
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartCtx.addItem(item)}
              onDecrease={() => cartCtx.removeItem(item.id)}
            />
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

export default Cart;
