import React, { useState } from "react";

function RecipeCreate ({recipes, setRecipes}) {
  const initialFormData = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  }
  const [formData, setFormData] = useState(initialFormData)
  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const newRecipe = {...formData}
    setRecipes([...recipes, newRecipe])
    setFormData(initialFormData)
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" type="text" placeholder="Name" onChange={handleChange} value={formData.name}/></td>
            <td><input name="cuisine" type="text" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}/></td>
            <td><input name="photo" type="url" placeholder="URL" onChange={handleChange} value={formData.photo}/></td>
            <td><textarea name="ingredients" onChange={handleChange} value={formData.ingredients} placeholder="Ingredients"></textarea></td>
            <td><textarea name="preparation" onChange={handleChange} value={formData.preparation} placeholder="Preparation"></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
