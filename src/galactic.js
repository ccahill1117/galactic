export function Galactic(year,month,day) {
  this.dateNow = new Date();
  this.earthBirthday = new Date(year,month,day)
  this.earthYears = Math.floor(this.dateDifference()/365)
  this.mercuryYears = this.mercuryAge();

}


Galactic.prototype.mercuryAge = function() {
  const mercuryRatio = 0.24;
  let mercury = Math.floor(this.earthYears/mercuryRatio);
  return mercury;
}

Galactic.prototype.dateDifference = function() {
  let oneDay = 1000 * 60 * 60 * 24;
  let difference = this.dateNow - this.earthBirthday;
  let daysDifference = difference/oneDay;
  return Math.floor(daysDifference);
}
