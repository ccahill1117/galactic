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
  const venusRatio = 0.62;
  let venus = Math.floor(this.earthYears/venusRatio);
  return venus;
}
Galactic.prototype.marsAge = function() {
  const marsRatio = 1.88;
  let mars = Math.floor(this.earthYears/marsRatio);
  return mars;
}
Galactic.prototype.jupiterAge = function() {
  const jupiterRatio = 11.86;
  let jupiter = Math.floor(this.earthYears/jupiterRatio);
  return jupiter;
}
Galactic.prototype.lifeExpect = function(country) {
  const expectancies = [["USA",79 ],["JPN",84],["Switzerland",83]];
  let lifeExpectancy = expectancies.find(function(element) {
    return element[0] == country
  })
  return lifeExpectancy[1]
}
Galactic.prototype.yearsRatio = function(planet) {
  const planetRatios = [["Earth",1],["Mercury",0.24],["Venus",0.62],["Mars",1.88],["Jupiter",11.86]];
  let ratio = planetRatios.find(function(element) {
    return element[0] == planet
  })
  return ratio[1];
}
