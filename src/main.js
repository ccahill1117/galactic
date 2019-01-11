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


  let userBirthday = $("#userBirthday").val();
  $(".resultDiv").text(userBirthday);


  let testUserMain = new Galactic(1989,10,17)
  let testYear = ((testUserMain.earthBirthday).getFullYear()).toString();
  let testMonth = monthName((testUserMain.earthBirthday).getMonth()).toString();
  let testDate = (testUserMain.earthBirthday.getDate()).toString();
  let testString = `${testMonth} ${testDate}, ${testYear}`

  $(".resultDiv2").text(testString);

});

});
