import React, { useState } from "react";

function RecipeCreate ({recipes, setRecipes}) {
  const initialFormData = {
    apple: 1
  }
  const [content, setContent] = useState(initialFormData)
  console.log(content)
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td></td>
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
