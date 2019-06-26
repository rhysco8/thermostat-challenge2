describe ('Thermostat', function(){

  var thermostat;

  it('starts at 20 degrees', function(){
    thermostat = new Thermostat;
    expect(thermostat.temp).toEqual(20);
  });

  describe('increase temperature', function() {
    it('increase by 1', function() {
      thermostat = new Thermostat;
      thermostat.increase();
      expect(thermostat.temp).toEqual(21);
    });
  });

});
