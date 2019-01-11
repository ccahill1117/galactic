import { Galactic } from './../src/galactic.js';


let newUser;

  describe ('Galactic', function() {
    beforeEach(function() {
    newUser = new Galactic(1989,10,17);
    })
  it('should return a normal earth age', function() {
    expect(newUser.earthYears).toEqual(29);
  })
  it('should return a mercury age based upon earth age', function() {
    expect(newUser.mercuryYears).toEqual(120);
  })
  it('should return a venus age based upon earth age', function() {
    expect(newUser.venusYears).toEqual(46);
  })
  it('should return a mars age based upon earth age', function() {
    expect(newUser.marsYears).toEqual(15);
  })
  it('should return a jupiter age based upon earth age', function() {
    expect(newUser.jupiterYears).toEqual(2);
  })
})
