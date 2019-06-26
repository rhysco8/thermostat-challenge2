describe ('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
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
      thermostat.decrease();
      console.log(thermostat.temp);
      thermostat.decrease();
      console.log(thermostat.temp);
      thermostat.decrease();
      console.log(thermostat.temp);
      thermostat.decrease();
      console.log(thermostat.temp);
      thermostat.decrease();
      console.log(thermostat.temp);
      thermostat.decrease();
      console.log(thermostat.temp);
      thermostat.decrease();
      console.log(thermostat.temp);
      thermostat.decrease();
      console.log(thermostat.temp);
      thermostat.decrease();
      console.log(thermostat.temp);
      thermostat.decrease();
      console.log(thermostat.temp);
      expect( function(){ thermostat.decrease(); }).toThrow(new Error('Minimum temperature reached'));
    })
  })
});
