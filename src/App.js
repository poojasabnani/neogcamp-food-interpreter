import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const foodDictionary = {
    "🥔": "Potato",
    "🥥": "Coconut",
    "🥑": "Avocado",
    "🍆": "Eggplant",
    "🥒": "Cucumber",
    "🥬": "Leafy Green",
    "🥦": "Broccoli",
    "🧄": "Garlic",
    "🧅": "Onion",
    "🍄": "Mushroom",
    "🥜": "Peanuts",
    "🌰": "Chestnut",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry"
  };

  const [foodMeaning, setFoodMeaning] = useState("");

  function onChangeHandler(event) {
    const foodResult = event.target.value;
    if (foodResult in foodDictionary) {
      setFoodMeaning(foodDictionary[foodResult]);
    } else {
      setFoodMeaning("Food item doesn't exist in db");
    }
  }

  function foodClickHandler(food) {
    const foodMeaning = foodDictionary[food];
    setFoodMeaning(foodMeaning);
  }
  const foodArray = Object.keys(foodDictionary);

  return (
    <div className="App">
      <h1>Food Interpreter</h1>
      <input
        placeholder="Please enter food item here or select from below"
        onChange={onChangeHandler}
      ></input>
      <h3>{foodMeaning}</h3>
      <h2>
        {foodArray.map((food) => {
          return (
            <span
              id="foodList"
              onClick={() => foodClickHandler(food)}
              key={food}
            >
              {food}
            </span>
          );
        })}
      </h2>
    </div>
  );
}
