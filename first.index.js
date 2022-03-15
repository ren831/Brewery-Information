document.addEventListener("DOMContentLoaded", () => {
  baseURL = "https://api.openbrewerydb.org/breweries?by_state=california";

  let brewerySelect = document.querySelector("#brewery-dropdown");
  const form = document.getElementById("new-brewery");
  let breweryUL = document.querySelector("#Brewery-Container");
  let breweryInfo = document.querySelector(
    "body > div.col-container > div.brew-info"
  );
  console.log(breweryInfo);

  fetch(baseURL)
    .then((r) => r.json())
    .then(function (jsonObj) {
      let brewArr = jsonObj;
      brewArr.forEach((brewery) => {
        breweryUL.innerHTML += `<li>${brewery.name}</li>`;
      });
    });

  brewerySelect.addEventListener("change", (e) => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(function (jsonObj) {
        jsonObj.forEach((brewery) => {
          console.log(brewery);
        });
      });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let hi = document.querySelector(
      "body > div.col-container > div.col-brew-list"
    );
    breweryObj = document.createElement("li");

    breweryObj.name = document.getElementById("new-name").value;
    breweryObj.city = document.getElementById("Add-City").value;
    breweryObj.type = document.getElementById("Brewery-Type").value;
    breweryObj.rating = document.getElementById("new-rating").value;

    hi.append(breweryObj.name);
  });
});
