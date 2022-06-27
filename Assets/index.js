const searchButton = document.getElementById('searchBtn');
const mealList = document.getElementById('meal');

// event listener

searchButton.addEventListener('click', getMealList);

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
   