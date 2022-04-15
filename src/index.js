$("form#info").submit(function(e) {
  e.preventDefault();
  let age = $("#age").val();
  let ethnicity = $("#region").val();
  let income = $("#income").val();
  let user = new Person(age,  ethnicity,  income);
  console.log(user);
});
import { Person } from "./js/person";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';