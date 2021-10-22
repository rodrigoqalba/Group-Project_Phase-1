document.addEventListener("DOMContentLoaded", () => {
    fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then(resp => resp.json())
    .then(data => console.log(data))
})