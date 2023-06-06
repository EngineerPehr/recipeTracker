import React from "react";

function RecipeList ({ recipes, handleDelete }) {
  const recipeCards = recipes.map((recipe, i) => {
    return (
      <tr key={i}>
        <td><p>{recipe.name}</p></td>
        <td><p>{recipe.cuisine}</p></td>
        <td><img src={recipe.photo} /></td>
        <td className="ingredients"><p>{recipe.ingredients}</p></td>
        <td className="preparation"><p>{recipe.preparation}</p></td>
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
            <th>Preparation</th>
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
