import './styles.css';
import { Galactic } from './galactic.js';
import $ from 'jquery';


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    let testPerson = new Galactic(21);

    $(".resultDiv").text(testPerson.earthAge);

  });
});
