
const START_TEMP = 20;
const TEMP_INCREMENT = 1;

function Thermostat(){
  this.temp = START_TEMP;
};

Thermostat.prototype.increase = function () {
  this.temp += TEMP_INCREMENT;
};

Thermostat.prototype.decrease = function () {
  this.temp -= TEMP_INCREMENT;
};
