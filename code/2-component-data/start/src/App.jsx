import './index.css';
import React from 'react';
import RecipeTitle from './RecipeTitle'
// TODO: Import IngredientList
import IngredientList from './IngredientList'
// TODO: Import IngredientStepList
import IngredientStepList from './IngredientStepList'



function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        ingredientSteps: [
            { name: 'Add cut potatoes to a pot of heavily salted water.'},
            { name: 'Bring pot to a boil.'},
            { name: 'Boil the potatoes until fork tender, about 15-20 minutes.'},
            { name: 'Strain the potatoes.'},
            { name: 'Return potatoes to pot.'},
            { name: 'Add butter, cream, salt, and pepper to taste.'},
            { name: 'Mash potatoes.'},
            { name: 'Reseason and add butter and cream as desired.'},
        ],
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />

            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />

             {/* TODO: Add IngredientStepList component */}
             <h2>Steps</h2>
             <IngredientStepList ingredientSteps={recipe.ingredientSteps} />

        </article>
    )
}

export default App;
