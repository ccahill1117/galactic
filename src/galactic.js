export class Galactic {
  constructor(year,month,day) {
    this.dateNow = new Date();
    this.earthBirthday = new Date(year,month,day)
    this.earthYears = Math.floor(this.dateDifference()/365)
    this.mercuryYears = this.mercuryAge();
    this.venusYears = this.venusAge();
    this.marsYears = this.marsAge();
    this.jupiterYears = this.jupiterAge();
  }
  dateDifference() {
    const oneDay = 1000 * 60 * 60 * 24;
    const difference = this.dateNow - this.earthBirthday;
    const daysDifference = difference/oneDay;
    return Math.floor(daysDifference);
  }
  mercuryAge() {
    const mercuryRatio = 0.24;
    const mercury = Math.floor(this.earthYears/mercuryRatio);
    return mercury;
  }
  venusAge() {
    const venusRatio = 0.62;
    const venus = Math.floor(this.earthYears/venusRatio);
    return venus;
  }
  marsAge() {
    const marsRatio = 1.88;
    const mars = Math.floor(this.earthYears/marsRatio);
    return mars;
  }
  jupiterAge() {
    const jupiterRatio = 11.86;
    const jupiter = Math.floor(this.earthYears/jupiterRatio);
    return jupiter;
  }
  lifeExpect(country) {
    const expectancies = [["USA",79 ],["Japan",84],["Switzerland",83]];
    const lifeExpectancy = expectancies.find(function(element) {
      return element[0] == country
    })
    return lifeExpectancy[1]
  }
  yearsRatio(planet) {
    const planetRatios = [["Earth",1],["Mercury",0.24],["Venus",0.62],["Mars",1.88],["Jupiter",11.86]];
    const ratio = planetRatios.find(function(element) {
      return element[0] == planet
    })
    return ratio[1];
  }

  yearsLeft(country,planet) {
    const expectancy = this.lifeExpect(country);
    const ratio = this.yearsRatio(planet);
    if ((this.earthYears) == expectancy) {
      return "this person is at the age of their life expectancy";
    }
    else if ((this.earthYears) < expectancy) {
      return "this person has " + (Math.floor((expectancy - this.earthYears)/(ratio))) + " years left on planet " + planet;
    }
    else if ((this.earthYears) > expectancy) {
      return "this person is " + Math.floor((this.earthYears - expectancy)/(ratio)) + " years past their life expectancy in " + planet + " years"
    }
  }

}
