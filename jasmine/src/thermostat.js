
const START_TEMP = 20;
const TEMP_INCREMENT = 1;
const MINIMUM_TEMP = 10

function Thermostat(){
  this.temp = START_TEMP;
  this.powerSaveMode = true;
};

Thermostat.prototype.changePowerSaveMode = function () {
  this.powerSaveMode = !this.powerSaveMode;
  return this.powerSaveMode
};

Thermostat.prototype.increase = function () {
  this.checkMaximumTemp()
  if (this.temp >= this.maximumTemp) throw new Error('Maximum temperature reached');
  this.temp += TEMP_INCREMENT;
  return this.temp
};

Thermostat.prototype.checkMaximumTemp = function () {
  if (this.powerSaveMode) {
    this.maximumTemp = 25
  } else {
    this.maximumTemp = 32
  }
  return this.maximumTemp
};

Thermostat.prototype.decrease = function () {
  if (this.temp === MINIMUM_TEMP) throw new Error('Minimum temperature reached');
  this.temp -= TEMP_INCREMENT;
  return this.temp
};

Thermostat.prototype.resetTemp = function () {
  this.temp = START_TEMP;
  return this.temp
};
