import React, { useContext } from "react";
import { currencyFormatter } from "../Utils/formatting";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";
function MealItems(props) {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(props.meal)
  }
  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${props.meal.image}`}
          alt={props.meal.name}
        />
        <div>
          <h3>{props.meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(props.meal.price)}
          </p>
          <p className="meal-item-descrption">{props.meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart </Button>
        </p>
      </article>
    </li>
  );
}

export default MealItems;
