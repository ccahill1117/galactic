import { Galactic } from './../src/galactic.js';


  describe ('Galactic', function() {
  it('should make it work', function() {
    var string = new Galactic ("ok");
    expect(string.galaxy).toEqual("ok");
  })
})
