document.addEventListener("DOMContentLoaded", (e) => {
  baseURL = "https://api.openbrewerydb.org/breweries?by_state=california";
  brewUL = document.querySelector("#Brewery-Container");
  NewBrewForm = document.querySelector("#new-brewery");
  const breweryList = document.createElement("li");

  NewBrewForm.addEventListener("submit", (e) => {
    const breweryList = document.createElement("li");
    e.preventDefault();
    const brewObj = [];
    brewObj.name = document.querySelector("#new-name").value;
    brewObj.city = document.querySelector("#Add-City").value;
    brewObj.brewery_type = document.querySelector("#Brewery-Type").value;
    brewObj.street = document.querySelector("#Brewery-Adress").value;

    displayBrewery(brewObj);
  });

  fetch(baseURL)
    .then((r) => r.json())
    .then((data) => displayBrewARR(data));

  function displayBrewery(brewery) {
    const breweryList = document.createElement("li");

    breweryList.name = brewery.name;
    breweryList.city = brewery.city;
    breweryList.business = brewery.brewery_type;
    breweryList.adress = brewery.street;

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
      ).innerHTML = breweryList.business;
      document.querySelector(
        "body > div.col-container > div.brew-info > h6 > p"
      ).innerHTML = breweryList.adress;
    });

    brewUL.append(breweryList);
  }

  let image = document.querySelector(
    "body > div.col-container > div.col-brew-list > img"
  );

  function displayBrewARR(brewery) {
    brewery.forEach((brewery) => {
      displayBrewery(brewery);
    });
  }
});
