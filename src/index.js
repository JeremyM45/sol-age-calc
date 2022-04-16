function generateOutput(person, planet) {
  let outputName = $(`#${planet}Output`);
  let age = planet + "Age";
  let yearsLeft = planet + "YearsLeft";
  let yearsOver = planet + "YearsOver";
  if  (person.earthAge < person.lifeExpect) {
    let output = `<img src='./assets/images/${planet}.jpg' alt='${planet}'> <br> <b>${capitalizeFirstChar(planet)}</b> <br> Age: ${person[age]} <br> Expected Years Left: ${person[yearsLeft]}`;
    return outputName.html(output);
  } else if (person.earthAge > person.lifeExpect) {
    let output = `<img src='assets/images/${planet}.jpg' alt='${planet}'> <br> <b>${capitalizeFirstChar(planet)}</b> <br> Age: ${person[age]} <br> Expected Years Over: ${person[yearsOver]}`;
    return outputName.html(output);
  }
}
function capitalizeFirstChar(planet)  {
  let capArray = planet.split('');
  capArray[0] = capArray[0].toUpperCase();
  let planetName = capArray.join('');
  return planetName;
}
$("form#info").submit(function(e) {
  e.preventDefault();
  let age = $("#age").val();
  let ethnicity = $("#region").val();
  let income = $("#income").val();
  let user = new Person(age,  ethnicity,  income);
  generateOutput(user, "mercury");
  generateOutput(user, "venus");
  generateOutput(user, "earth");
  generateOutput(user, "mars");
  generateOutput(user, "jupiter");
  generateOutput(user, "saturn");
  generateOutput(user, "uranus");
  generateOutput(user, "neptune");
});
import { Person } from "./js/person";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './assets/images/mercury.jpg';
import './assets/images/venus.jpg';
import './assets/images/earth.jpg';
import './assets/images/mars.jpg';
import './assets/images/jupiter.jpg';
import './assets/images/saturn.jpg';
import './assets/images/uranus.jpg';
import './assets/images/neptune.jpg';