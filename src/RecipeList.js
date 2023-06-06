import React from "react";

function RecipeList ({ recipes, handleDelete }) {
  const recipeCards = recipes.map((recipe, i) => {
    return (
      <tr key={i}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} /></td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td><button name="delete" onClick={() => {handleDelete(i)}}>Delete</button></td>
      </tr>
    )
  })
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeCards}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
