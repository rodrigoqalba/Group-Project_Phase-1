document.addEventListener("DOMContentLoaded", () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(resp => resp.json())
    .then(data => console.log(data))
})