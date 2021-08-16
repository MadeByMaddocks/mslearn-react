import React from 'react';

function IngredientStepList(props) {
    // Create the list items using map
    const ingredientStepListItems = props.ingredientSteps.map((ingredientStep, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index}>
                { ingredientStep.name }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientStepListItems will be rendered as ol elements
    return (
        <ol>
            { ingredientStepListItems }
        </ol>
    );
}

export default IngredientStepList;