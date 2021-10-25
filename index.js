const randomBASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const drinkMenu = document.querySelector("#drink-menu")
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
