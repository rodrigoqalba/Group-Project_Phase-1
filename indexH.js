const randomBASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// let dataHolder = [];

const drinkMenu = document.querySelector("#drink-menu")

document.addEventListener("DOMContentLoaded", () => {
    fetch(baseURL)
    .then((resp) => resp.json())
    .then(data => displayDrinks(data))
},

function displayDrinks(drinks) {
    // const drinkMenu = document.getElementById("drink-menu")
    drinks.forEach(drink => {
        const menuImage = document.createElement("img")
        menuImage.src = drink.strDrinkThumb
        drinkMenu.append(menuImage)
        console.log(menuImage)
    })
})