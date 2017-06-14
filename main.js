// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  document.querySelector('body').insertAdjacentHTML('afterbegin', '<h1>Internal Company Directory</h1>')

  for (var i = 0; i < 12; i++) {
    fetch("https://randomuser.me/api/?nat=us")
      .then( function(response) {
        return response.json()
      })
      .then( function(json) {
        console.log("data", json);

        let individual = {}
        individual.picture = json.results[0].picture.large
        individual.firstName = json.results[0].name.first
        individual.lastName = json.results[0].name.last
        individual.email = json.results[0].email
        individual.street = json.results[0].location.street
        individual.city = json.results[0].location.city
        individual.state = json.results[0].location.state
        individual.postcode = json.results[0].location.postcode
        individual.social = json.results[0].id.value


        //console.log(`${individual.firstName} ${individual.lastName}`);

        let html = `
          <div class = "customer">
            <img class = "picture" src="${individual.picture}"></img>
            <p class = "name">${individual.firstName} ${individual.lastName}</p>
            <p class = "email">${individual.email}</p>
            <div class = "address">
              <p class = "street">${individual.street}</p>
              <p class = "city">${individual.city}, ${individual.state} ${individual.postcode}</p>
            </div>
            <p class = "social">${individual.social}</p>
          </div>`


        document.querySelector('.customers').insertAdjacentHTML('afterbegin', html);
      })

//





  }

})();
