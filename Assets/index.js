const searchButton = document.getElementById('searchBtn');
const mealList = document.getElementById('meal');
const recipe = document.querySelector('recipes');
const closeBtn = document.getElementById("close")
const like = document.getElementById('likeBtn')

// event listener

searchButton.addEventListener('click', getMealList);
mealList.addEventListener('click',getRecipe);

// get meal list that matches with ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if (data.meals) {
            data.meals.forEach(meal => {
                html += `<div class="mealItem" data-id = "${meal.idMeal}">
                <div class="food-image">
                    <img src= "${meal.strMealThumb}" width="300px">
                </div>
                <div class="food-name">
                    <h3>${meal.strMeal}</h3>
                    <a href="#" class="recipe-button">Get Recipie</a>
                </div>
            </div>`;
            });
            
        }
        else{
            html = "Sorry, we couldn't find your meal"
        }

        mealList.innerHTML = html;
    });
    
}
   


function getRecipe(event) {
    event.preventDefault();
    if (event.target.classList.contains('recipe-button')) {
      let mealItem = event.target.parentElement.parentElement;
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
     .then(response => response.json())
     .then(data => foodRecipeModal(data.meals))
        
    }
    
}

function foodRecipeModal(meal) {
    // console.log(meal);
    // meal = meal[0];
    let html = `
    <button id="close">
    <i class="fa-solid fa-circle-xmark"></i>
    </button>

    <div class="recipe-image">
<img src="${meal.strMealThumb}" alt="" width="200px">
</div>
<h2 class= "recipe-title">${meal.strMeal}</h2>
<div class="recipe-details">
<h3 id="instruction">${meal.strCategory}</h3>
<p id="recipe-text">${meal.instructions}</p>
</div>
<button id="likeBtn" class="like-button" onclick="Toggle()"><i class="fa-solid fa-heart" id="heart"></i></button>
    
    `;
    recipe.innerHTML = html;
    recipe.parentElement.classList.add('showRecipe')
    
}
function Toggle() {
    if (like.style.color == "red") {
        like.style.color = "white"
        
    }
    else {
        like.style.color = "red"
    }  
    
}