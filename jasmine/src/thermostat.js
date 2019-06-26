
const START_TEMP = 20;
const TEMP_INCREMENT = 1;
const MINIMUM_TEMP = 10

function Thermostat(){
  this.temp = START_TEMP;
  this.powerSaveMode = true;
};

Thermostat.prototype.changePowerSaveMode = function () {
  this.powerSaveMode = !this.powerSaveMode;
};

Thermostat.prototype.increase = function () {
  if (this.powerSaveMode && this.temp >= 25) throw new Error('Maximum temperature of power save mode reached');
  if (!this.powerSaveMode && this.temp >= 32) throw new Error('Maximum temperature reached');
  this.temp += TEMP_INCREMENT;
};

Thermostat.prototype.decrease = function () {
  if (this.temp === MINIMUM_TEMP) throw new Error('Minimum temperature reached');
  this.temp -= TEMP_INCREMENT;
};

Thermostat.prototype.resetTemp = function () {
  this.temp = START_TEMP;
};
