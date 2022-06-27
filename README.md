Tasty Food Recipies is open for business! You are starting! This website displays your best recipes 

## Demo

Use this gif as an example of how the app should work.

![Tasty foods app Demo]()

> To view in VSCode, right click on the README.md file and select "Open Preview".

## Setup



 The base URL for your API will be
  [https://www.themealdb.com/api/json/v1/1/]

## Core Deliverables

As a user, I can:

1. search for any meal available on the website by the meal name.
   request to the following endpoint to retrieve the film data:

   ```txt
   GET /meals/

   Example Response:
   {
    "meals": [
     {
      "strMeal": "Chick-Fil-A Sandwich",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
      "idMeal": "53016"
       }
      ]
    }
   
   
   ```

2. Get the recipe off different meals by clicking the "Get Recipe" button.

   ```txt
   GET /films

   Example response:
   {
  "meals": [
   {
   "idMeal": "52771",
   "strMeal": "Spicy Arrabiata Penne",
   "strDrinkAlternate": null,
   "strCategory": "Vegetarian",
   "strArea": "Italian",
   "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
   "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
   "strTags": "Pasta,Curry",
   "strIngredient1": "penne rigate",
   "strIngredient2": "olive oil",
   "strIngredient3": "garlic",
   "strIngredient4": "chopped tomatoes",
   "strIngredient5": "red chile flakes",
   "strIngredient6": "italian seasoning",
   "strIngredient7": "basil",
   "strIngredient8": "Parmigiano-Reggiano",
   "strMeasure1": "1 pound",
   "strMeasure2": "1/4 cup",
   "strMeasure3": "3 cloves",
   "strMeasure4": "1 tin ",
   "strMeasure5": "1/2 teaspoon",
   "strMeasure6": "1/2 teaspoon",
   "strMeasure7": "6 leaves",
   "strMeasure8": "spinkling",
    }
   ]
   ```

### Bonus Deliverables
 In a more advanced version, the user will e able to add personal recipies to the website, like and leave a comment in different the recipes and also be able to delete items.

