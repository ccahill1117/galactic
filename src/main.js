import './styles.css';
import { Galactic } from './galactic.js';
import $ from 'jquery';


$(document).ready(function(){


    let testPerson = new Galactic(21);
    $(".resultDiv").text(testPerson.earthYears);

  });
