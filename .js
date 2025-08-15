const recipes = [];

const recipe1 = {
  name: 'Spaghetti Carbonara',
  ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 4, 5],
  averageRating: null,
};

const recipe2 = {
  name: 'Chicken Curry',
  ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 5, 5],
  averageRating: null,
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3); //This will add the recipe objects to the "recipes" array.

function getAverageRating(ratings) {
    let average = ratings.reduce((a, b) => a + b, 0) / ratings.length; //This will calculate the average rating of "ratings" array.
    return average;
}

function getTotalIngredients(ingredients) {
    return ingredients.length; //This will return the total number of ingredients in the "ingredients" array.
}

function getDifficultyLevel(cookingTime) {
    if (cookingTime <= 30) {
      return "easy";
    }
    if (cookingTime <= 60) {
      return "medium";
    }
    else {
      return "hard";
    }
}

let recipe1AverageRating = getAverageRating(recipe1.ratings);
let recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
let recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

console.log(recipe1AverageRating); // This will log the average rating of recipe1
console.log(recipe1TotalIngredients); // This will log the total number of ingredients in recipe1
console.log(recipe1DifficultyLevel); // This will log the difficulty level of recipe1

recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

console.log(recipes); //This will log the "recipes" array with all the recipe objects and their updated calculated properties.
