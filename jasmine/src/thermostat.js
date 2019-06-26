
const START_TEMP = 20;
const TEMP_INCREMENT = 1;


function Thermostat(){
  this.temp = START_TEMP;
};

Thermostat.prototype.increase = function () {
  this.temp += TEMP_INCREMENT;
};

Thermostat.prototype.decrease = function () {
  if (this.temp === 10) {
    throw new Error('Minimum temperature reached')
  } else {
    this.temp -= TEMP_INCREMENT;
  };
};

Thermostat.prototype.resetTemp = function () {
  this.temp = START_TEMP;
};
