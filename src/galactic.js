export function Galactic(age) {
  this.earthAge = age;
  this.mercuryYears = this.mercuryAge()

}


Galactic.prototype.mercuryAge = function(age) {
  const mercuryRatio = 0.24;
  let mercury = Math.floor(this.earthAge/mercuryRatio);
  return mercury;
}
