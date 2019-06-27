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
      expect(thermostat.powerSaveMode).toEqual(true);
    });
  });

  describe('changing power save mode', function(){
    it('changes from on to off', function(){
      expect(thermostat.changePowerSaveMode()).toEqual(false);
    });

    it('changes from off to on', function(){
      thermostat.changePowerSaveMode();
      thermostat.changePowerSaveMode();
      expect(thermostat.powerSaveMode).toEqual(true);
    });
  });

  describe('increase temperature', function() {
    it('increase by 1', function() {
      expect(thermostat.increase()).toEqual(21);
    });
  });

  describe('decrease temperature', function() {
    it('decreases by 1', function() {
      expect(thermostat.decrease()).toEqual(19);
    });
  });

  describe('reset temperature', function(){
    it('resets temperature', function(){
      thermostat.increase();
      expect(thermostat.resetTemp()).toEqual(20);
    });
  });

  describe('minimum temperature', function() {
    it('has a minimum temperature', function() {
      thermostat.temp = 10;
      expect(function(){ thermostat.decrease(); }).toThrow(new Error('Minimum temperature reached'));
    });
  });

  describe('maximum temperature', function() {
    it('is 25 when power save mode is on', function() {
      thermostat.temp = 25;
      expect(function(){ thermostat.increase(); }).toThrow(new Error('Maximum temperature reached'));
    });

    it('is 32 when power save mode if off', function() {
      thermostat.changePowerSaveMode()
      thermostat.temp = 32;
      expect(function(){ thermostat.increase(); }).toThrow(new Error('Maximum temperature reached'))
    });
  });

  describe('energy usage', function() {
    it('should be low with temperature under 18', function() {
      thermostat.temp = 16;
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it('should be medium with temperature 18 and above and below 25', function() {
      thermostat.temp = 20;
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it('should be high with temperature 25 and above', function() {
      thermostat.temp = 25;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });

});
