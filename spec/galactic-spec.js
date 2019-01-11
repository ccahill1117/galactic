import { Galactic } from './../src/galactic.js';
let newUser;
let testUser;

describe ('GalacticTest', function() {
  beforeEach(function() {
    testUser = new GalacticTest(2019,0,10)
  })
  it('should return a normal earth age', function() {
    expect(testUser.dateDifference()).toEqual(9);
  })
})

describe ('Galactic', function() {
  beforeEach(function() {
    newUser = new Galactic(1989,10,17);
  })
  it('should return a normal earth age', function() {
    expect(newUser.earthYears).toEqual(29);
  })
  it('should return a mercury age based upon earth age', function() {
    expect(newUser.mercuryAge()).toEqual(120);
  })
  it('should return a venus age based upon earth age', function() {
    expect(newUser.venusAge()).toEqual(46);
  })
  it('should return a mars age based upon earth age', function() {
    expect(newUser.marsAge()).toEqual(15);
  })
  it('should return a jupiter age based upon earth age', function() {
    expect(newUser.jupiterAge()).toEqual(2);
  })
  it('should return a user life expectancy based upon country of origin', function() {
    expect(newUser.lifeExpect("USA")).toEqual(79);
  })
  it('should return the years ratio based upon a planet', function() {
    expect(newUser.yearsRatio("Mercury")).toEqual(0.24);
  })
  it('should return a user years of life left on a particular planet', function() {
    expect(newUser.yearsLeft("USA","Mars")).toEqual('this person has 26 years left on planet Mars');
  })
})



// added a GalacticTest with a hardcorded testDate so that the tests would not fail if run on another day

function GalacticTest(year,month,day) {
  this.earthBirthday = new Date(year,month,day)
  this.testDate = new Date(2019,0,1)
  this.earthYears = Math.floor(this.dateDifference()/365)
}

GalacticTest.prototype.dateDifference = function() {
  let oneDay = 1000 * 60 * 60 * 24;
  let difference = this.earthBirthday - this.testDate;
  let daysDifference = difference/oneDay;
  return Math.floor(daysDifference);
}
