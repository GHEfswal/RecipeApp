import React from "react";
import "./Recipes.scss";
import Recipe1 from "../../../assets/recipe-1.jpeg";
import Recipe2 from "../../../assets/recipe-2.jpeg";
import Recipe3 from "../../../assets/recipe-3.jpeg";
import Recipe4 from "../../../assets/recipe-4.jpeg";

function RecipeItem(props) {
  // const { recipeName, kitchen, image } = props;

  return (
    <div className="recipes">
      <div>{props.image}</div>
      <h2>{props.recipeName}</h2>
      <p>{props.kitchen}</p>
    </div>
  );
}

export default function Recipes() {
  const avocadorecipe = {
    recipeName: "Avocado and Tomato Salad",
    kitchen: "Dona's Kitchen",
    image: <img src={Recipe1} alt="" />,
  };

  const butternutrecipe = {
    recipeName: "Chickenpea & Butternut Squash Salad",
    kitchen: "Tasty Treat",
    image: <img src={Recipe2} alt="" />,
  };

  const spchickenrecipe = {
    recipeName: "Spicy Chicken & Salad",
    kitchen: "Yummy Foods",
    image: <img src={Recipe3} alt="" />,
  };

  const avcreamyrecipe = {
    recipeName: "Chips, Avocado Creamy Sauce",
    kitchen: "Ella Olsson",
    image: <img src={Recipe4} alt="" />,
  };

  return (
    <div className="recipeInfo">
      <RecipeItem {...avocadorecipe} />
      <RecipeItem {...butternutrecipe} />
      <RecipeItem {...spchickenrecipe} />
      <RecipeItem {...avcreamyrecipe} />
    </div>
  );
}

/*

function RecipeItem(props) {
  const { recipeName, kitchen, image } = props;

  return (
    <div className="recipes">
      <div>{image}</div>
      <h2>{recipeName}</h2>
      <p>{kitchen}</p>
    </div>
  );
}

export default function Recipes() {
  return (
    <>
      <RecipeItem
        recipeName="Avocado and Tomato Salad"
        kitchen="Dona's Kitchen"
      />
      <RecipeItem
        recipeName="Chickpea & Butternut Squash Salad"
        kitchen="Tasty Treat"
      />
      <RecipeItem recipeName="Spicy Chicken & Salad" kitchen="Yummy Foods" />
      <RecipeItem
        recipeName="Chips Avocado Creamy Sauce"
        kitchen="Ella Olsson"
      />
    </>
  );
}

*/
