const randomBASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const drinkMenu = document.querySelector("#drink-menu")
let dataHolder= [];

document.addEventListener("DOMContentLoaded", () => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(drinks => {
        drinksArray = Object.entries(drinks.drinks)
        dataFeeder(drinksArray)
})
})

function dataFeeder(drinksArray){
    drinksArray.forEach(displayDrinks);
    displayFirstRamen(drinksArray[0])
    makeDataGlobal(drinksArray);
}

function makeDataGlobal(drinksArray){
    dataHolder = [...drinksArray]
    return dataHolder;
}

function displayDrinks(drinksArray) {
        const menuImage = document.createElement("img")
        menuImage.src = drinksArray[1].strDrinkThumb

        menuImage.addEventListener('click', () => {
            document.querySelector("#drink-img").src = drinksArray[1].strDrinkThumb;
            document.querySelector("#drink-name").innerHTML = drinksArray[1].strDrink;
            document.querySelector("#drink-glass").innerHTML = drinksArray[1].strGlass;
            document.getElementById("ing").innerHTML = `${drinksArray[1].strIngredient1}, ${drinksArray[1].strIngredient2}, ${drinksArray[1].strIngredient3}`;
            document.getElementById("drink-inst").innerHTML = drinksArray[1].strInstructions;
        })
        drinkMenu.append(menuImage)
}

function displayFirstRamen(drinksArray){
    document.querySelector("#drink-img").src = drinksArray[1].strDrinkThumb;
    document.querySelector("#drink-name").innerHTML = drinksArray[1].strDrink;
    document.querySelector("#drink-glass").innerHTML = drinksArray[1].strGlass;
    document.getElementById("ing").innerHTML = `${drinksArray[1].strIngredient1}, ${drinksArray[1].strIngredient2}, ${drinksArray[1].strIngredient3}`;
    document.getElementById("drink-inst").innerHTML = drinksArray[1].strInstructions;
}
