export function Galactic(age) {
  this.earthYears = age;
  this.mercuryYears = this.mercuryAge();

}


Galactic.prototype.mercuryAge = function() {
  const mercuryRatio = 0.24;
  let mercury = Math.floor(this.earthYears/mercuryRatio);
  return mercury;
}
