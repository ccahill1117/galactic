import { Galactic } from './../src/galactic.js';


let newUser;

  describe ('Galactic', function() {
    beforeEach(function() {
      newUser = new Galactic(1989,10,17);
    })
  it('should return a normal earth age', function() {
    expect(newUser.earthYears).toEqual(28);
  })
  it('should return a mercury age based upon earth age', function() {
    expect(newUser.mercuryYears).toEqual(104);
  })
})
