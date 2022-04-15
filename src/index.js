function generateOutput(person, planet) {
  let outputName = $(`#${planet}Output`);
  let age = planet + "Age";
  let yearsLeft = planet + "YearsLeft";
  let yearsOver = planet + "YearsOver";
  if  (person.earthAge < person.lifeExpect) {
    let output = `${capitalizeFirstChar(planet)} <br> Age: ${person[age]} <br> Expected Years Left: ${person[yearsLeft]}`;
    return outputName.html(output);
  } else if (person.earthAge > person.lifeExpect) {
    let output = `${capitalizeFirstChar(planet)} <br> Age: ${person[age]} <br> Expected Years Over: ${person[yearsOver]}`;
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

{/* <img  src="assets/images/mercury.jpg" alt="Mercury">
$("#mercuryOutput").html(`Mercury <br> Age: ${user.mercuryAge} <br> Expected Years Left: ${user.mercuryYearsLeft}`);
<p id="mercuryOutput"></p> */}