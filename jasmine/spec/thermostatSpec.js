describe ('Thermostat', function(){

  var thermostat;

  it('starts at 20 degrees', function(){
    thermostat = new Thermostat;
    console.log(thermostat.temp)
    expect(thermostat.temp).toEqual(20);
  });
});
