import { Galactic } from './../src/galactic.js';


  describe ('Galactic', function() {

  it('should return a normal earth age', function() {
    let newUser = new Galactic(25)
      expect(newUser.earthAge).toEqual(25);
  })
})
