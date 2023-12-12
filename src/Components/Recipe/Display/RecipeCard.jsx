import React from 'react';

const RecipeCard = ({ recipe: { recipeID, writtenBy, isVegan, isVegetarian, isAllergic, Poster, Title, Type } }) => {
  return (
    <div className="recipe" key={recipeID}>
      <div>
        <p>{ writtenBy }</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{ Type }</span>
        <span>{ isVegan }</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default RecipeCard;