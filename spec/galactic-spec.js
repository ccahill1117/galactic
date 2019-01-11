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
})

// added a GalacticTest 

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
