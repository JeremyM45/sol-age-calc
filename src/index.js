$("form#info").submit(function(e) {
  e.preventDefault();
  let age = $("#age").val();
  let ethnicity = $("#region").val();
  let income = $("#income").val();
  let user = new Person(age,  ethnicity,  income);
  user.mercuryYears();
  user.venusYears();
  user.marsYears();
  user.jupiterYears();
  user.saturnYears();
  user.uranusYears();
  user.neptuneYears();
  console.log(user);
  if(user.lifeExpect > user.earthYears) {
    $("#mercuryOutput").html(`Mercury <br> Age: ${user.mercuryAge} <br> Expected Years Left: ${user.mercuryYearsLeft}`);
    $("#venusOutput").html(`Venus <br> Age: ${user.venusAge} <br> Expected Years Left: ${user.venusYearsLeft}`);
    $("#earthOutput").html(`Earth <br> Age: ${user.earthYears} <br> Expected Years Left: ${user.yearsLeft}`);
    $("#marsOutput").html(`Mars <br> Age: ${user.marsAge} <br> Expected Years Left: ${user.marsYearsLeft}`);
    $("#jupiterOutput").html(`Jupiter <br> Age: ${user.jupiterAge} <br> Expected Years Left: ${user.jupiterYearsLeft}`);
    $("#saturnOutput").html(`Saturn <br> Age: ${user.saturnAge} <br> Expected Years Left: ${user.saturnYearsLeft}`);
    $("#uranusOutput").html(`Uranus <br> Age: ${user.uranusAge} <br> Expected Years Left: ${user.uranusYearsLeft}`);
    $("#neptuneOutput").html(`Neptune <br> Age: ${user.neptuneAge} <br> Expected Years Left: ${user.neptuneYearsLeft}`);
  } else  {
    $("#mercuryOutput").html(`Age: ${user.mercuryAge} <br> Expected Years Over: ${user.mercuryYearsOver}`);
    $("#venusOutput").html(`Venus <br> Age: ${user.venusAge} <br> Expected Years Left: ${user.venusYearsOver}`);
    $("#earthOutput").html(`Earth <br> Age: ${user.earthYears} <br> Expected Years Left: ${user.yearsOver}`);
    $("#marsOutput").html(`Mars <br> Age: ${user.marsAge} <br> Expected Years Left: ${user.marsYearsOver}`);
    $("#jupiterOutput").html(`Jupiter <br> Age: ${user.jupiterAge} <br> Expected Years Left: ${user.jupiterYearsOver}`);
    $("#saturnOutput").html(`Saturn <br> Age: ${user.saturnAge} <br> Expected Years Left: ${user.saturnYearsOver}`);
    $("#uranusOutput").html(`Uranus <br> Age: ${user.uranusAge} <br> Expected Years Left: ${user.uranusYearsOver}`);
    $("#neptuneOutput").html(`Neptune <br> Age: ${user.neptuneAge} <br> Expected Years Left: ${user.neptuneYearsOver}`);
  }

});
import { Person } from "./js/person";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';