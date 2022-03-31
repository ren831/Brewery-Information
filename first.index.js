document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  baseURL = "https://api.openbrewerydb.org/breweries?by_state=california";
  brewUL = document.querySelector("#Brewery-Container");
  NewBrewForm = document.querySelector("#new-brewery");

  fetch(baseURL)
    .then((r) => r.json())
    .then((r) => displayBrewArr(r));

  NewBrewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const brewObj = {};
    brewObj.name = document.querySelector("#new-name").value;
    brewObj.city = document.querySelector("#Add-City").value;
    brewObj.street = document.querySelector("#Brewery-Adress").value;
    brewObj.brewery_type = document.querySelector("#Brewery-Type").value;

    displayBrew(brewObj);
  });

  function displayBrew(brewery) {
    const breweryList = document.createElement("li");

    breweryList.name = brewery.name;
    breweryList.city = brewery.city;
    breweryList.street = brewery.street;
    breweryList.brewtype = brewery.brewery_type;

    breweryList.append(breweryList.name);

    breweryList.addEventListener("click", (e) => {
      document.querySelector(
        "body > div.col-container > div.brew-info > h2 > p"
      ).innerHTML = breweryList.name;
      document.querySelector(
        "body > div.col-container > div.brew-info > h4 > p"
      ).innerHTML = breweryList.city;
      document.querySelector(
        "body > div.col-container > div.brew-info > h5 > p"
      ).innerHTML = breweryList.street;
      document.querySelector(
        "body > div.col-container > div.brew-info > h6 > p"
      ).innerHTML = breweryList.brewtype;
    });
    brewUL.append(breweryList);
  }

  function displayBrewArr(breweries) {
    breweries.forEach((brewery) => {
      displayBrew(brewery);
    });
  }
});
