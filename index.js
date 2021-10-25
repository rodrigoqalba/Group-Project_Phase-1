const randomBASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const drinkMenu = document.querySelector("#drink-menu")
const randomDrink = document.getElementsByClassName("surprise")
const randomDrinkImage = document.getElementById("sup")
const randomDrinkName = document.getElementById("sup-drink-name")
const randomDrinkGlass = document.getElementById("sup-drink-glass")
const randomDrinkIngridients = document.getElementById("sup-drink-ing")
const randomDrinkRecipe = document.getElementById("sup-drink-inst")
const surpriseMeButton = document.getElementById("surprise-me")
let dataHolder= [];

document.addEventListener("DOMContentLoaded", () => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(drinks => {
        drinksArray = Object.entries(drinks.drinks)
        console.log(drinksArray)
        dataFeeder(drinksArray)
        })
})
function dataFeeder(drinksArray){
    drinksArray.forEach(displayDrinks);
    makeDataGlobal(drinksArray);
}
function makeDataGlobal(drinksArray){
    dataHolder = [...drinksArray]
    return dataHolder;
}

function displayDrinks(drinksArray) {
        const menuImage = document.createElement("img")
        menuImage.src = drinksArray[1].strDrinkThumb
        drinkMenu.append(menuImage)
        console.log(menuImage)
}

// Random Drink Button 

surpriseMeButton.addEventListener("click", () => {
    fetch(randomBASE_URL)
    .then(resp => resp.json())
    .then(drinks => {
        randomDrinkArray = Object.entries(drinks.drinks)
        dataFeeder(randomDrinkArray)
        })
        function dataFeeder(randomDrinkArray){
            randomDrinkArray.forEach(displayRandomDrinks);
            makeDataGlobal(randomDrinkArray);
        }
        
        function displayRandomDrinks(randomDrinkArray) {
            randomDrinkImage.src = randomDrinkArray[1].strDrinkThumb
            randomDrinkName.textContent = `Drink Name: ${randomDrinkArray[1].strDrink}`
            randomDrinkGlass.textContent = `Glass Type: ${randomDrinkArray[1].strGlass}`
            randomDrinkIngridients.textContent = `Ingridients: ${randomDrinkArray[1].strIngredient1}, ${randomDrinkArray[1].strIngredient2}, ${randomDrinkArray[1].strIngredient3}, ${randomDrinkArray[1].strIngredient4}`
            randomDrinkRecipe.textContent = `Instructions: ${randomDrinkArray[1].strInstructions}`

        }
})
