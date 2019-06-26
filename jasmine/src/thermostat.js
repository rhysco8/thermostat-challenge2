
const START_TEMP = 20;
const TEMP_INCREMENT = 1;
const MINIMUM_TEMP = 10

function Thermostat(){
  this.temp = START_TEMP;
};

Thermostat.prototype.increase = function () {
  this.temp += TEMP_INCREMENT;
};

Thermostat.prototype.decrease = function () {
  if (this.temp === MINIMUM_TEMP) throw new Error('Minimum temperature reached');
  this.temp -= TEMP_INCREMENT;
};

Thermostat.prototype.resetTemp = function () {
  this.temp = START_TEMP;
};
