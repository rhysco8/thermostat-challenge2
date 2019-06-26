describe ('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  describe('at start', function(){
    it('starts at 20 degrees', function(){
      expect(thermostat.temp).toEqual(20);
    });

    it('power save mode is on', function(){
      expect(thermostat.powerSaveMode).toEqual(true)
    });
  });

  describe('changing power save mode', function(){
    it('changes from on to off', function(){
      thermostat.changePowerSaveMode();
      expect(thermostat.powerSaveMode).toEqual(false)
    });
  });

  describe('increase temperature', function() {
    it('increase by 1', function() {
      thermostat.increase();
      expect(thermostat.temp).toEqual(21);
    });
  });

  describe('decrease temperature', function() {
    it('decreases by 1', function() {
      thermostat.decrease();
      expect(thermostat.temp).toEqual(19);
    });
  });

  describe('reset temperature', function(){
    it('resets temperature', function(){
      thermostat.increase();
      thermostat.resetTemp();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('minimum temperature', function() {
    it('has a minimum temperature', function() {
      for (var i = 1; i <= 10; i++) {
        thermostat.decrease();
      };
      expect(function(){ thermostat.decrease(); }).toThrow(new Error('Minimum temperature reached'));
    });
  });


});
