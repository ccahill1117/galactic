export function Galactic(year,month,day) {
  this.dateNow = new Date();
  this.earthBirthday = new Date(year,month,day)
  this.earthYears = Math.floor(this.dateDifference()/365)
  this.mercuryYears = this.mercuryAge();
  this.venusYears = this.venusAge();
  this.marsYears = this.marsAge();
  this.jupiterYears = this.jupiterAge();

}

Galactic.prototype.dateDifference = function() {
  let oneDay = 1000 * 60 * 60 * 24;
  let difference = this.dateNow - this.earthBirthday;
  let daysDifference = difference/oneDay;
  return Math.floor(daysDifference);
}

Galactic.prototype.mercuryAge = function() {
  const mercuryRatio = 0.24;
  let mercury = Math.floor(this.earthYears/mercuryRatio);
  return mercury;
}

Galactic.prototype.venusAge = function() {
  const mercuryRatio = 0.62;
  let mercury = Math.floor(this.earthYears/mercuryRatio);
  return venus;
}

Galactic.prototype.marsAge = function() {
  const mercuryRatio = 1.88;
  let mercury = Math.floor(this.earthYears/mercuryRatio);
  return mars;
}

Galactic.prototype.jupiterAge = function() {
  const mercuryRatio = 11.86;
  let mercury = Math.floor(this.earthYears/mercuryRatio);
  return jupiter;
}
