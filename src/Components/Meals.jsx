import React, { useEffect, useState } from "react";
import MealItems from "./MealItems";

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setLoadedMeals(resData);
      });
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItems key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}

export default Meals;
