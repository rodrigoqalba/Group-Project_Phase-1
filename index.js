document.addEventListener("DOMContentLoaded", getData)
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

let dataHolder = [];

const drinkMenu = document.querySelector("#drink-menu")

function getData(){
    fetch(BASE_URL)
    .then((resp) => resp.json())
    .then(data => dataFeeder(data));
}
function dataFeeder(data){
    // data.forEach(drinkyDrinks);
    makeDataGlobal(data);
}
function makeDataGlobal(data){
    dataHolder = [...data]
    return dataHolder;
}

