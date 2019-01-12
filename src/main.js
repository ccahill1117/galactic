import './styles.css';
import { Galactic } from './galactic.js';
import $ from 'jquery';

let monthName = function(getMonth){
  const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return mlist[getMonth];
};

$(document).ready(function(){
  $("#inputDate").submit(function(event) {
    event.preventDefault();


  let userBirthday = ($("#userBirthday").val()).toString();
  let userCountry = $("#country").val();

  let userBirthdayMonthParse =  parseInt(userBirthday.substring(5,7)) - 1
  let userGalaxy = new Galactic(
    ((parseInt(userBirthday.substring(0,4)))).toString(),
    userBirthdayMonthParse,
    userBirthday.substring(8,10)
  );


  let userYear = ((userGalaxy.earthBirthday).getFullYear()).toString();
  let userMonth = monthName((userGalaxy.earthBirthday).getMonth()).toString();
  let userDate = (userGalaxy.earthBirthday.getDate()).toString();
  let userBday = `${userMonth} ${userDate}, ${userYear}`

  $("#earthBirthday").text(userBday);
  $("#earthAge").text(userGalaxy.earthYears);
  $("#mercuryAge").text(userGalaxy.mercuryAge());
  $("#venusAge").text(userGalaxy.venusAge());
  $("#marsAge").text(userGalaxy.marsAge());
  $("#jupiterAge").text(userGalaxy.jupiterAge());
  $("#earthYears").text(userGalaxy.yearsLeft(userCountry,"Earth"))
  $("#mercuryYears").text(userGalaxy.yearsLeft(userCountry,"Mercury"))
  $("#venusYears").text(userGalaxy.yearsLeft(userCountry,"Venus"))
  $("#marsYears").text(userGalaxy.yearsLeft(userCountry,"Mars"))
  $("#jupiterYears").text(userGalaxy.yearsLeft(userCountry,"Jupiter"))
});

});
