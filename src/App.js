import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData)
  const handleDelete = (key) => {
    const updatedRecipes = recipes.filter((recipe, i) => i !== key)
    setRecipes(updatedRecipes)
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} />
    </div>
  )
}

export default App
