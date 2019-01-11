import './styles.css';
import { Galactic } from './galactic.js';
import $ from 'jquery';


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    let userString = $("#inputText").val();
    let string = new Galactic(userString);
    $(".resultDiv").empty();
    $(".resultDiv").text(string.string);

  });
});
